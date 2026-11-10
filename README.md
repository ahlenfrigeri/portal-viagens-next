# RotaLivre: portal de viagens em Next.js

Portal de viagens simples feito com **Next.js (App Router) + TypeScript**. Usa rotas baseadas em arquivos, componentes reutilizáveis, navegação com `next/link` e estilos encapsulados com **CSS Modules**. Exercício do Módulo 22 do curso de Front-End da EBAC.

## Páginas

| Rota | Arquivo | Conteúdo |
|---|---|---|
| `/` | `src/app/page.tsx` | apresentação do portal + botão para os destinos |
| `/destinos` | `src/app/destinos/page.tsx` | lista com 6 destinos em cards |

A rota nasce da **estrutura de pastas**: a pasta `src/app/destinos/` com um `page.tsx` dentro já cria a página `/destinos`, sem configurar nenhum roteador.

## Componentes

- **`Layout`** (`src/components/Layout/`): cabeçalho com logo e menu (`next/link`), área de conteúdo e rodapé. É aplicado uma vez em `src/app/layout.tsx`, que envolve todas as páginas.
- **`CardDestino`** (`src/components/CardDestino/`): recebe `nome`, `imagem` e `descricao` por props. A imagem usa `next/image`.

Os dados ficam em um array local, `src/data/destinos.ts` (campos `id`, `nome`, `imagem`, `descricao`), e a listagem usa `map()`.

## CSS Modules

Cada componente e cada página tem o seu `.module.css`. O Next transforma `styles.card` num nome de classe único, então um componente nunca "vaza" estilo para outro. O `globals.css` guarda só o reset e as variáveis de cor.

```
src/
├── app/
│   ├── layout.tsx            aplica o <Layout> em todas as páginas
│   ├── globals.css
│   ├── page.tsx + page.module.css
│   └── destinos/
│       └── page.tsx + page.module.css
├── components/
│   ├── Layout/        Layout.tsx + Layout.module.css
│   └── CardDestino/   CardDestino.tsx + CardDestino.module.css
└── data/destinos.ts
```

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Tecnologias

Next.js 16 (App Router) · React 19 · TypeScript · CSS Modules · next/image · next/font
