# Fiscco Serviços Contábeis (Next.js)

Landing page para a **Fiscco Serviços Contábeis**, construída com **Next.js (App Router)**, **React**, **Tailwind CSS** e animações com **framer-motion**.

---

## Tecnologias

- **Next.js** 15
- **React** 19
- **TypeScript**
- **Tailwind CSS**
- **framer-motion** (animações)
- **lucide-react** (ícones)
- UI components em `src/components/ui`

---

## Visão geral da estrutura

- `app/` e `src/app/`
  - `page.tsx`: montagem das seções (Hero, About, Benefits, etc.)
  - `layout.tsx`: metadata e carregamento de fontes
- `src/components/layout/`
  - `Header.tsx`: menu responsivo e estado de navegação
  - `Footer.tsx`: links e rodapé
- `src/components/sections/`
  - Seções da página (Hero, About, Benefits, Industries, Services, FAQ, Blog, Newsletter, Contact, etc.)
- `src/components/ui/`
  - Componentes reutilizáveis (Button, Card, Input, SectionHeading...)
- `src/data/`
  - Dados estáticos para seções como Serviços, FAQ, Indústrias, Benefits...

---

## Como rodar o projeto

1) Instale as dependências:

```bash
npm install
```

2) Suba o servidor de desenvolvimento:

```bash
npm run dev
```

3) Abra no navegador:

- http://localhost:3000

---

## Scripts

No `package.json`:

- `npm run dev` — inicia o Next em modo desenvolvimento
- `npm run build` — build para produção (com `--no-lint`)
- `npm start` — executa em produção
- `npm run lint` — executa ESLint

---

## Personalização

- **Conteúdo das seções**: ajuste os componentes em `src/components/sections/*` e/ou os arquivos de dados em `src/data/*`.
- **Tema/cores**: o projeto usa fundo preto e acento verde. Em `src/app/layout.tsx` e `app/globals.css` ficam as variáveis CSS.
- **Seções no layout da página**: a ordem atual está em `src/app/page.tsx`:
  - `Hero -> About -> Benefits -> Industries -> Services -> CompanyOpening -> Mei -> FAQ -> Blog -> Newsletter -> Contact`

---

## Deploy

Este projeto é compatível com deploy via **Vercel** (recomendado para Next.js). Para publicar:

- Faça build: `npm run build`
- Faça deploy no Vercel usando o comando padrão para Next.

---

## Licença

Projeto gerado para fins de demonstração. Sem licença definida neste repositório.

