# Azulzinha Web 2.1

## Diretrizes de Estilização

- **Sempre usar Tailwind CSS** para toda estilização. Não usar `style={{}}` inline.
- Gradientes simples (180deg): usar `bg-linear-to-b from-[cor] to-[cor]`
- Gradientes com ângulos customizados: usar `bg-[linear-gradient(...)]`
- Box shadows customizados: usar `shadow-[...]`
- Dimensões fixas: usar classes como `h-[79px]`, `w-[168px]`
- Cores do tema estão definidas em `globals.css` via `@theme` e podem ser usadas como classes (ex: `bg-azul`, `text-laranja`, `from-laranja-claro to-laranja`)
- Estilos base globais (body, html) devem ficar em `@layer base` no `globals.css`
- **Títulos de seção** devem sempre usar `<h2 className="section-title text-azul">`. A classe `section-title` está definida em `globals.css` com tamanhos padrão (38px desktop / 26px mobile) e responsividade. Nunca definir tamanho de fonte manualmente nos títulos de seção.

## Organização de Componentes

- **Componentes compartilhados** (usados por mais de uma página) devem ficar em `src/components/shared/`. Ao tornar um componente reutilizável, mova-o para `shared/` e atualize todos os imports.
- **Componentes específicos de página** ficam em `src/components/[nome-da-pagina]/`.
- Nunca deixar componentes reutilizáveis soltos na raiz de `src/components/`.

## Estrutura de Página

- Cada página fica em `src/app/[rota]/page.tsx`
- Estrutura padrão: `<main>` > `<Navbar />` > Seções > `<Footer />`
- Componentes da página ficam em `src/components/[nome-da-pagina]/`
- Imagens da página ficam em `public/images/[nome-da-pagina]/` e devem ser referenciadas via helper `asset()` de `@/lib/assets`

## Layout e Espaçamento

- **Container padrão de seção:** `max-w-[1440px] mx-auto px-[30px] lg:px-[100px]`
- **Padding vertical de seção:** `py-14 lg:py-20` (variações: `py-14 lg:py-27.5`)
- **Body text padrão:** `text-[16px] lg:text-[18px] leading-[1.4]`
- **Cards:** `rounded-[12px]` com `shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]`
- **Responsividade:** mobile-first. Estilos base = mobile, variantes `lg:` = desktop

## Carrosséis

- Sempre usar **Embla Carousel** (`useEmblaCarousel`) com `WheelGesturesPlugin` para scroll via mouse/trackpad
- Para autoplay, usar `Autoplay` de `embla-carousel-autoplay`
- Padrão de referência: `src/components/ProductsSection.tsx` (home)
- Layout do carousel: `overflow-hidden` no container, `flex pl-[30px] lg:pl-[100px] gap-6` nos items, `shrink-0` em cada item

## Arquivos de Configuração (`src/lib/`)

URLs, constantes e helpers compartilhados ficam centralizados em `src/lib/`. Sempre que um valor for usado em mais de um lugar (ou representar uma URL de produção), adicionar ao arquivo apropriado em vez de hard-coded nos componentes.

- **`src/lib/assets.ts`** — helper `asset(path)` que prefixa `NEXT_PUBLIC_BASE_PATH` em caminhos relativos. Usar para imagens servidas pelo próprio site (em `public/images/...`).
- **`src/lib/social.ts`** — constante `SOCIAL_LINKS` com Instagram, Facebook, LinkedIn, YouTube e WhatsApp. Nunca duplicar essas URLs em componentes; importar de `@/lib/social`.
- **`src/lib/blog.ts`** — `BLOG_MEDIA_BASE_URL` (`https://azulzinhadacaixa.com.br/blogmidias`) e helper `blogMediaUrl(filename)`. Imagens dos posts do blog (cards e banner do post) moram nesse domínio remoto; o JSON em `public/assets/post.json` guarda apenas o nome do arquivo. Não usar `asset()` para imagens de blog — a URL já é absoluta.
- **`src/lib/categories.ts`** — categorias do blog derivadas dos posts.

Regra geral: se for URL absoluta de produção (blog, social, etc.), criar/estender um arquivo em `src/lib/` seguindo o padrão de `social.ts` e `blog.ts`.
