---
name: figma-mcp-new-page
description: Cria uma nova página completa a partir do Figma, seção por seção, reutilizando componentes existentes e validando com Playwright
user_invocable: true
arguments:
  - name: figma_desktop_url
    description: URL ou node ID da versão desktop da página no Figma
    required: true
  - name: figma_mobile_url
    description: URL ou node ID da versão mobile da página no Figma
    required: true
---

# Skill: Criar Nova Página a partir do Figma

Você vai criar uma nova página no projeto a partir de um design do Figma. Siga rigorosamente cada etapa abaixo.

## Regra fundamental

**O código existente no projeto é a fonte de verdade.** Nunca modifique componentes, seções ou padrões já existentes. A nova página deve se adaptar ao que já existe, não o contrário.

---

## Etapa 1 — Análise do projeto existente

Antes de consultar o Figma, analise o projeto atual para entender os padrões estabelecidos:

1. **Leia o `CLAUDE.md`** para entender todas as diretrizes do projeto
2. **Leia o `globals.css`** para entender as classes globais, cores do tema, e componentes CSS (ex: `section-title`)
3. **Liste todos os componentes existentes** em `src/components/` e leia cada um para entender:
   - Padrões de estilização (Tailwind classes usadas, espaçamentos, breakpoints)
   - Componentes compartilhados (Navbar, Footer, HeroSection, CtaSection, etc.)
   - Padrões de carrossel (Embla Carousel)
   - Padrões de responsividade (mobile-first, breakpoints `lg:`)
   - Padrões de layout (max-w, px, py, gaps)
4. **Liste as páginas existentes** em `src/app/` e analise como são estruturadas (imports, composição de seções)
5. **Identifique componentes reutilizáveis** — componentes que já existem e podem ser reaproveitados na nova página (ex: HeroSection, CtaSection, Footer, Navbar)

Guarde essas informações para usar durante toda a implementação.

---

## Etapa 2 — Consultar o Figma (Desktop + Mobile)

1. Use a ferramenta `mcp__figma__get_figma_data` para obter os dados de **ambas as versões**:
   - **Desktop:** `{{ figma_desktop_url }}`
   - **Mobile:** `{{ figma_mobile_url }}`
2. Analise a estrutura completa da página em ambas as versões:
   - Identifique todas as seções da página, de cima para baixo
   - Para cada seção, identifique: layout, cores, tipografia, espaçamentos, imagens, ícones
   - **Compare as diferenças entre desktop e mobile** para cada seção (mudanças de layout, tamanhos, visibilidade de elementos, reordenação)
3. **Compare cada seção do Figma com os componentes existentes no projeto:**
   - Se uma seção do Figma corresponde a um componente existente (ex: Navbar, Footer, HeroSection, CtaSection), **reutilize-o** passando as props adequadas
   - Se uma seção é nova, crie um novo componente seguindo os mesmos padrões dos existentes
4. **Mapeie o responsivo:** Para cada seção nova, documente o que muda entre desktop e mobile:
   - Direção do layout (row → col)
   - Tamanhos de fonte e espaçamentos
   - Elementos que aparecem/escondem
   - Reordenação de elementos
   - Imagens diferentes entre breakpoints

---

## Etapa 3 — Planejar a implementação

Antes de escrever código:

1. **Pergunte ao usuário qual será a rota da nova página** (ex: `/minha-pagina`). Não assuma o nome — aguarde a resposta.

Depois, crie um plano listando:

1. Nome da pasta da página baseado na rota informada (ex: `src/app/minha-pagina/`)
2. Lista de seções na ordem do Figma
3. Para cada seção, indicar:
   - Se vai **reutilizar** componente existente (qual e com quais props)
   - Se vai **criar** novo componente (nome proposto, em `src/components/[pagina]/NomeSection.tsx`)
4. Imagens que precisam ser baixadas do Figma

**Apresente o plano ao usuário e aguarde confirmação antes de prosseguir.**

---

## Etapa 4 — Implementação seção por seção

Para cada seção da página, na ordem de cima para baixo:

### 4.1 — Se reutiliza componente existente:
- Importe e use o componente com as props corretas
- **Não modifique o componente original**, EXCETO no caso abaixo (4.1.1)

### 4.1.1 — Se o componente existente é idêntico em estrutura mas tem dados hardcoded:
- É permitido **torná-lo dinâmico** adicionando props, desde que:
  - A estrutura visual e os estilos permaneçam inalterados
  - Os valores hardcoded atuais se tornem os valores **default** das props (para não quebrar páginas que já usam o componente)
  - O componente seja movido para `src/components/` (raiz) se ainda estiver em uma subpasta específica de página
  - A página original que usava o componente continue funcionando sem alterações

### 4.2 — Se é um componente novo:
1. Use `mcp__figma__get_figma_data` para obter detalhes específicos do node da seção — consulte **tanto o node desktop quanto o mobile** para implementar o responsivo corretamente
2. Se necessário, use `mcp__figma__download_figma_images` para baixar imagens/assets e salve em `public/images/[nome-da-pagina]/`
3. Crie o componente em `src/components/[nome-da-pagina]/NomeDaSectionSection.tsx`
4. Siga rigorosamente os padrões do projeto:
   - **Tailwind CSS** para toda estilização (nunca `style={{}}`)
   - **`section-title`** class para títulos de seção
   - **Layout padrão:** `max-w-[1440px] mx-auto px-[30px] lg:px-[100px]`
   - **Cores do tema** definidas em `globals.css` (ex: `text-azul`, `bg-laranja`)
   - **Responsividade mobile-first:** estilos base = mobile (do Figma mobile), variantes `lg:` = desktop (do Figma desktop)
   - **Carrosséis** usando Embla Carousel no padrão do projeto

### 4.3 — Após implementar cada seção:
- Verifique se o código compila sem erros
- Verifique se segue todos os padrões identificados na Etapa 1

---

## Etapa 5 — Montar a página

1. Crie o arquivo `src/app/[nome-da-pagina]/page.tsx`
2. Siga a mesma estrutura das páginas existentes:
   - Import de todos os componentes
   - Componente exportado como `default`
   - Estrutura: `<main>` > Navbar > Seções > Footer

---

## Etapa 6 — Validação com Playwright

Após a implementação completa:

1. **Inicie o servidor de desenvolvimento** se não estiver rodando (`npm run dev`)
2. **Validação Desktop:**
   - Use `mcp__playwright__browser_resize` para viewport desktop (1440×900)
   - `mcp__playwright__browser_navigate` para abrir a página
   - `mcp__playwright__browser_take_screenshot` para capturar a página completa
   - Use `mcp__figma__download_figma_images` para baixar a imagem de referência **desktop** do Figma
   - Compare seção por seção: layout, cores, espaçamentos, tipografia, alinhamentos
3. **Validação Mobile:**
   - Use `mcp__playwright__browser_resize` para viewport mobile (375×812)
   - `mcp__playwright__browser_take_screenshot` para capturar a página completa
   - Use `mcp__figma__download_figma_images` para baixar a imagem de referência **mobile** do Figma
   - Compare seção por seção: layout, cores, espaçamentos, tipografia, alinhamentos
4. **Identifique diferenças** entre a implementação e o Figma em ambos os viewports
5. **Corrija cada diferença** encontrada
6. **Repita o processo** (screenshot desktop + mobile → comparar → corrigir) até que a implementação esteja **100% fiel ao Figma em ambas as versões**

### Checklist de validação (aplicar para desktop E mobile):
- [ ] Espaçamentos (padding, margin, gap) correspondem ao Figma
- [ ] Cores correspondem ao Figma
- [ ] Tipografia (font-family, font-size, font-weight, line-height) corresponde ao Figma
- [ ] Imagens estão corretas e bem posicionadas
- [ ] Layout e alinhamento correspondem ao Figma
- [ ] Elementos visíveis/ocultos corretos para cada viewport
- [ ] Componentes reutilizados exibem corretamente com as novas props

---

## Regras importantes

- **NUNCA** use `style={{}}` inline — sempre Tailwind CSS
- **NUNCA** modifique componentes existentes para atender a nova página, EXCETO para torná-los dinâmicos (adicionar props) quando a estrutura é idêntica — mantendo os valores atuais como defaults
- **NUNCA** crie componentes duplicados se já existe um que pode ser reutilizado (mesmo que precise torná-lo dinâmico)
- **NUNCA** ignore padrões estabelecidos no projeto (fontes, cores, espaçamentos, layouts)
- **SEMPRE** siga a estrutura de pastas: componentes da página em `src/components/[nome-da-pagina]/`
- **SEMPRE** valide com Playwright ao final e itere até estar 100% igual ao Figma
