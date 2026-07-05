# Edit plan - Fase 2 (Redesign visual das seções)

## Informação coletada
- Seções atuais misturam: fundos escuros com cards “hardcoded” vs seções claras (Industries/Services/FAQ/Blog/Newsletter/Contact/Mei/CompanyOpening) com Tailwind colors diferentes (blue/zinc/emerald).
- `Hero/About/Benefits` usam muitos valores fixos de cor (`#000000`, `#E5E7EB`, etc) e variações grandes de contraste.
- Cards/containers não estão padronizados (bordas, radius, shadows, overlays, overlays de gradiente/luz).
- Forms aparecem já em `CompanyOpening` e `Contact` e também em `Newsletter` — mas a ordem aprovada diz que **vamos primeiro redesenhar a estrutura visual** (layout/grid/containers), e só depois uniformizar inputs/btns.

## Plan (mudanças por arquivo)
- **Criação de padrão visual via utilitários CSS/tokens (sem quebrar Tailwind)**
  - Usar tokens já criados (`--background`, `--foreground`, `--accent`, `--border`, `--muted`, `--ring`) com `rgba()` onde necessário.
  - Manter `rounded-3xl`, `border-[rgba(...)]` e `shadow-[...]` consistentes.

- **Hero.tsx**
  - Manter estrutura (grid + card com imagem), mas padronizar:
    - overlay/backdrop sutil usando `--card/--border` (via rgba).
    - cards de features com borda/hover shadow consistente.
    - microinteractions discretas (parâmetros do framer-motion sem exagero).
  - Preferir proporções mais “premium” no card da imagem (sem alterar conteúdo).

- **About.tsx**
  - Trocar container com `bg-[#000000]/25 border-[#E5E7EB]/40` por padrão tokenizado.
  - Ajustar hierarquia: título + parágrafos com `leading-7/8` consistente.
  - Manter layout (texto ao lado do visual vazio). Se não houver imagem, criar “slot” visual discreto (apenas estrutura).

- **Benefits.tsx**
  - Padronizar cards:
    - destaque (card grande) com mesmo radius/borda/sombra dos demais.
    - cards individuais com `bg-[rgba(255,255,255,0.03)]` + `border-[var(--border)]` equivalente (via rgba).
  - Ajustar tipografia (tamanho do h3 e leading) sem alterar textos.

- **Industries.tsx** (fundo branco)
  - Harmonizar para tema premium usando tokens em vez de `blue-950`/`zinc-600` fixos.
  - Cards/chips: usar borda e hover premium (ainda que sejam apenas texto).

- **Services.tsx** (fundo zinc)
  - Manter lista, mas trocar cores por tokenizados:
    - título e texto usando `--foreground/--muted`.
    - ícone container com `bg-[rgba(...)]` e borda se fizer sentido.

- **CompanyOpening.tsx** (fundo branco)
  - Apenas estrutura visual por agora:
    - padronizar container (radius/border/shadow) e grids.
    - **não** alterar inputs para usar `Input.tsx` ainda nesta fase (ordem aprovada).

- **Mei.tsx** (fundo zinc)
  - Padronizar cards com o mesmo estilo dos demais.

- **FAQ.tsx** (fundo branco)
  - Padronizar container do accordion com tokens (bordas e background).
  - Ajustar cores do texto e ícone sem mudar conteúdo.

- **Blog.tsx** (fundo zinc)
  - Padronizar cards dos posts (bordas/shadow) e tipografia.

- **Newsletter.tsx** (fundo branco)
  - Padronizar container e spacing; manter campos/btn como estão por enquanto.

- **Contact.tsx** (fundo escuro)
  - Padronizar cards e títulos usando tokens; manter inputs como estão.

## Dependent files to be edited (por Fase 2)
- `fisccoclone/src/components/sections/Hero.tsx`
- `fisccoclone/src/components/sections/About.tsx`
- `fisccoclone/src/components/sections/Benefits.tsx`
- `fisccoclone/src/components/sections/Industries.tsx`
- `fisccoclone/src/components/sections/Services.tsx`
- `fisccoclone/src/components/sections/CompanyOpening.tsx`
- `fisccoclone/src/components/sections/Mei.tsx`
- `fisccoclone/src/components/sections/FAQ.tsx`
- `fisccoclone/src/components/sections/Blog.tsx`
- `fisccoclone/src/components/sections/Newsletter.tsx`
- `fisccoclone/src/components/sections/Contact.tsx`

## Followup steps
- Rodar `next dev` para verificar visual (evitar build completo devido a OOM).
- Se precisar, executar build com mais heap: `set NODE_OPTIONS=--max-old-space-size=4096`.

<ask_followup_question>
Antes de eu aplicar as edições em massa: você quer que eu mantenha os fundos por seção (Hero/About/Benefits/Contact escuros; Industries/Services/FAQ/Blog/Newsletter/Mei/CompanyOpening claros) ou prefere que eu unifique com um único fundo base (ex.: tudo sobre `--background` com “cards claros”)?
</ask_followup_question>

