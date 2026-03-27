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
