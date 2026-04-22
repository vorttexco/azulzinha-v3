# Plano — Melhorias de SEO no Blog

## Contexto

O blog do Azulzinha (Next.js 15, App Router, `output: "export"`) está publicando sem os sinais mínimos de SEO:

- `src/app/layout.tsx` só tem `title` e `description` — sem `metadataBase`, `openGraph`, `twitter`, `canonical`.
- `/blog` e `/blog/[slug]` não exportam `generateMetadata`; toda página do blog herda o mesmo título genérico.
- O conteúdo do blog é carregado client-side: `BlogContent.tsx` e `PostPage.tsx` usam `useEffect` para buscar `public/assets/post.json`. O HTML servido pelo build estático fica sem título dinâmico, sem corpo do post e sem cards da listagem. Crawlers que não executam JS enxergam um esqueleto.
- Não há `sitemap.ts`, `robots.ts`, nem nenhum JSON-LD. Cards em `BlogCard.tsx` usam `<a>` cru em vez de `<Link>`.
- HTML semântico ausente: sem `<article>`, sem `<time datetime>`, data no JSON em formato `"24/03/26"` (dd/mm/yy confirmado pelo usuário).
- Banner do post sem `priority` / `sizes` — penaliza LCP.

Objetivo: deixar cada post indexável com metadata rica, rich results elegíveis, conteúdo no HTML estático, e Core Web Vitals melhores. Tudo mantendo compatibilidade com `output: "export"`.

## Abordagem — 5 fases, incrementais

Cada fase entrega valor isolado e não quebra as seguintes. Pode ser interrompido entre fases sem deixar estado inconsistente.

### Fase 0 — Fundações compartilhadas

- **`src/lib/posts.ts`** (novo). Loader server-side de `public/assets/post.json` via `fs`, cacheado em módulo. Exporta:
  - `getAllPosts(): Post[]`
  - `getPostBySlug(slug): Post | null`
  - tipos `Post`, `PostContentBlock`
  - Consumido por `generateStaticParams`, `generateMetadata`, `sitemap.ts`, componentes server.
- **Estender `src/lib/blog.ts`**:
  - `SITE_URL = "https://azulzinhadacaixa.com.br"`
  - `absoluteUrl(path)` — concatena `SITE_URL + path`, garante uma barra só.
  - `parsePostDate(str)` — interpreta `"dd/mm/yy"` (dd/mm/yy confirmado), retorna `Date` em UTC; fallback `null` se parse falhar.
  - `toIsoDate(date)` — `YYYY-MM-DD`.

### Fase 1 — Quick wins (alto impacto, baixo risco)

- **`src/app/layout.tsx`** — adicionar ao `metadata`:
  - `metadataBase: new URL(SITE_URL)`
  - `openGraph` default (type `website`, `site_name: "azulzinha"`, `locale: "pt_BR"`, imagem padrão `/images/og-default.png` — criar placeholder se não existir).
  - `twitter: { card: "summary_large_image" }`
  - `alternates.canonical: "/"`
  - `robots: { index: true, follow: true }`
- **`src/app/robots.ts`** (novo) — `{ rules: [{ userAgent: "*", allow: "/" }], sitemap: absoluteUrl("/sitemap.xml") }`.
- **`src/app/sitemap.ts`** (novo) — rotas estáticas (`/`, `/blog`, páginas conhecidas) + `getAllPosts().map(p => ({ url: absoluteUrl(\`/blog/${p.postId}\`), lastModified: parsePostDate(p.date) ?? new Date() }))`.
- **`src/components/shared/BlogCard.tsx`** (linhas 64 e 90) — trocar `<a href>` por `<Link>` do `next/link`.
- **Hints de LCP**:
  - `src/components/shared/HeroSection.tsx` — banner principal com `priority` e `sizes="100vw"`.
  - `src/components/blog/PostContent.tsx` — banner do post com `priority` e `sizes` responsivo (ex.: `(min-width: 1024px) 900px, 100vw`).

### Fase 2 — Metadata por rota

- **`src/app/blog/page.tsx`** — `export const metadata` com:
  - `title: "Blog da azulzinha"`
  - `description` (texto atual do hero)
  - `alternates.canonical: "/blog"`
  - `openGraph` / `twitter` overrides.
- **`src/app/blog/[slug]/page.tsx`** — `export async function generateMetadata({ params })`:
  - Usa `getPostBySlug(slug)`; se nulo → `notFound()` (criar `src/app/not-found.tsx` com `robots: { index: false }`).
  - `title: post.title`, `description: post.description`.
  - `alternates.canonical: \`/blog/${slug}\``.
  - `openGraph.type: "article"`, `openGraph.images: [blogMediaUrl(bannerFilename)]` (extrai banner do `content[]`; fallback `${postId}.jpg`).
  - `openGraph.publishedTime: toIsoDate(parsePostDate(post.date))`.
  - `openGraph.tags: post.category`.
  - `twitter.images` igual ao og.

### Fase 3 — Server render do post e da listagem

A reforma mais valiosa para SEO: remove os `useEffect` e coloca todo conteúdo no HTML estático.

- **Criar `src/components/blog/PostArticle.tsx`** (server component). Recebe `post: Post` via props, renderiza:
  - `<article>` wrapper
  - `<header>` com `<h1>{post.title}</h1>` e `<time dateTime={toIsoDate(parsePostDate(post.date))}>{post.date}</time>`
  - Banner via `next/image` (`priority`, `sizes`, `blogMediaUrl(...)`)
  - Mapeia `content[]` (banner já acima; `texto` via `dangerouslySetInnerHTML`, mantendo o tratamento atual de remover `<h1>` duplicado e capitalizar `<h2>`).
- **Reescrever `src/app/blog/[slug]/page.tsx`** para buscar o post via `getPostBySlug(slug)` no server, passar para `<PostArticle post={...} />`. Remover dependência de `PostPage` para conteúdo; `PostPage.tsx` pode ser apagado ou reduzido só a widgets interativos se houver.
- **`PostCtaSection` e `PostUltimasSection`** — passar posts recentes como prop server-side em vez de fetch client.
- **Listagem `/blog`**: passar `posts` de `getAllPosts()` como prop do `<BlogRouteSwitch>`. Manter busca/filtro/paginação client-side, mas seed inicial vem server-rendered — crawlers veem todos os cards. Ajustar `BlogContent.tsx` e `BlogSearchContent.tsx` para aceitar `initialPosts` via prop e não refetch.
- **Verificação**: rodar `STATIC_EXPORT=true pnpm build` (ou `npm run build`) e abrir `out/blog/<slug>/index.html` no editor. O `<h1>`, corpo do post, imagem e metadata devem estar no HTML estático.

### Fase 4 — JSON-LD e polimento semântico

- **`src/components/shared/JsonLd.tsx`** (novo) — helper minúsculo:
  ```tsx
  export function JsonLd({ data }: { data: unknown }) {
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
  }
  ```
- **Layout global** — injetar `Organization` + `WebSite` schemas.
- **`/blog`** — schema `Blog` (itemListElement com os posts).
- **`/blog/[slug]`** (dentro de `PostArticle.tsx`) — `BlogPosting` com `headline`, `image`, `datePublished`, `author` (Organization azulzinha), `publisher`, `mainEntityOfPage`, `articleSection: post.category`. + `BreadcrumbList` (Home → Blog → Post).
- Sempre emitir via `absoluteUrl()` para URLs no JSON-LD.

## Arquivos críticos

**Novos:**
- `src/lib/posts.ts`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/not-found.tsx`
- `src/components/blog/PostArticle.tsx`
- `src/components/shared/JsonLd.tsx`

**Modificados:**
- `src/lib/blog.ts` — `SITE_URL`, `absoluteUrl`, `parsePostDate`, `toIsoDate`
- `src/app/layout.tsx` — metadata completa + JSON-LD Organization/WebSite
- `src/app/blog/page.tsx` — `metadata`, passa `posts` via prop, JSON-LD Blog
- `src/app/blog/[slug]/page.tsx` — `generateMetadata`, renderiza `<PostArticle>` server-side
- `src/components/blog/BlogContent.tsx` — aceita `initialPosts`, sem fetch
- `src/components/blog/BlogSearchContent.tsx` — idem
- `src/components/blog/PostPage.tsx` — remover ou reduzir a widgets interativos
- `src/components/blog/PostContent.tsx` — adotado por `PostArticle` (ou fundido)
- `src/components/shared/BlogCard.tsx` — `<Link>` em vez de `<a>`
- `src/components/shared/HeroSection.tsx` — `priority` + `sizes` no banner
- `CLAUDE.md` — documentar `src/lib/posts.ts` na seção de config

## Helpers existentes a reutilizar

- `src/lib/blog.ts` — `BLOG_MEDIA_BASE_URL`, `blogMediaUrl(filename)` (já existe; mantém a URL absoluta em OG/JSON-LD).
- `src/lib/social.ts` — `SOCIAL_LINKS` para `sameAs` no schema `Organization`.
- `src/lib/assets.ts` — `asset()` continua para imagens do site (não de blog).
- `src/lib/categories.ts` — `getCategoriesFromPosts` para schema `Blog`.

## Verificação end-to-end

1. **Build estático**: `STATIC_EXPORT=true npm run build`. Inspecionar `out/blog/<slug>/index.html`:
   - `<title>` bate com `post.title`
   - `<meta property="og:image">` aponta para `https://azulzinhadacaixa.com.br/blogmidias/<file>.jpg`
   - `<link rel="canonical" href="https://azulzinhadacaixa.com.br/blog/<slug>">`
   - `<h1>`, corpo do post e `<time dateTime="YYYY-MM-DD">` presentes no HTML
   - `<script type="application/ld+json">` com `BlogPosting` válido
2. **Sitemap/robots**: abrir `out/sitemap.xml` e `out/robots.txt`. Sitemap deve listar todas as URLs de posts; robots deve apontar para o sitemap.
3. **Rich Results Test** (Google): colar URL de preview ou HTML → `BlogPosting` detectado sem erros. Repetir para `Organization` e `Blog`.
4. **Lighthouse** (mobile, produção): meta SEO 100; LCP no banner do post abaixo de 2.5s.
5. **Navegação client-side**: clicar em cards da listagem não deve recarregar a página inteira (transição via `<Link>`).
6. **Parser de data**: verificar post com `"24/03/26"` rende `<time dateTime="2026-03-24">`. Post com data inválida renderiza string crua sem `<time>`.
7. **Fallback de post inexistente**: acessar `/blog/foo-bar` retorna a página `not-found` com `noindex`.
