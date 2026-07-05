# Relatório (parcial) — Refatoração nível sênior

## Status atual
- Build do Next executou com sucesso (durante diagnóstico inicial).
- `npm run lint` falhou por erro de toolchain/compatibilidade do ESLint 9 (falha ao “patch ESLint”), não por violações de regras.

## Decisões até agora
- Não removi arquivos ainda para evitar quebra prematura de rotas/comportamento visual.

## Próximos passos (conforme TODO)
- Neutralizar/remover duplicidade entre `app/` e `src/app/` com segurança.
- Estabilizar `npm run lint` e então corrigir TypeScript e ESLint.
- Refatorar componentes duplicados e padronizar Tailwind mantendo o mesmo visual.
- Otimizar performance e acessibilidade sem mudar output visual final.

