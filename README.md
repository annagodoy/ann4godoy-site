# ANN4GODOY

[![CI](https://github.com/annagodoy/ann4godoy-site/actions/workflows/ci.yml/badge.svg)](https://github.com/annagodoy/ann4godoy-site/actions/workflows/ci.yml)

Site artístico e revista digital da DJ ANN4GODOY.

A primeira versão do projeto é a **Issue 001 — Warm Graphite**,
com uma direção visual inspirada em revistas e editoriais independentes.

**Site publicado:** [ann4godoy-site.annabfgodoy.workers.dev](https://ann4godoy-site.annabfgodoy.workers.dev)

## Objetivos

- Apresentar identidade artística, sets e projetos.
- Reunir informações para contato e booking.
- Servir como laboratório de estudo de engenharia de software.

## Stack

- Astro
- TypeScript
- HTML
- CSS

## Desenvolvimento

Instale as dependências:

```bash
npm install
```

Inicie o servidor em segundo plano:

```bash
npm run astro -- dev --background
```

Consulte ou encerre o servidor:

```bash
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Verifique os componentes Astro, TypeScript e React:

```bash
npm run check
```

Gere o build de produção:

```bash
npm run build
```

## Validação local

Os comandos possuem responsabilidades diferentes:

- `npm run check` verifica tipos e diagnósticos dos componentes;
- `npm run build` valida o conteúdo e gera o site estático em `dist/`.

Antes de concluir alterações na aplicação ou nos inventários, execute:

```bash
npm run check
npm run build
```

## Integração contínua

O workflow de CI está definido em `.github/workflows/ci.yml` e é executado
em pushes e pull requests direcionados à branch `main`.

A validação remota executa:

1. instalação reproduzível com `npm ci`;
2. checagem de tipos com `npm run check`;
3. geração estática com `npm run build`.

## Deploy contínuo

A versão de produção é publicada como um site estático no Cloudflare Workers:

<https://ann4godoy-site.annabfgodoy.workers.dev>

O Cloudflare Workers Builds acompanha a branch `main`. Após cada push, o ambiente remoto executa:

```bash
npm run check && npm run build
```

Se essas verificações forem concluídas, o conteúdo de `dist/` é publicado com:

```bash
npx wrangler deploy
```

O GitHub Actions realiza a integração contínua (CI), validando o projeto. O Cloudflare Workers Builds realiza o deploy contínuo (CD), publicando a versão aprovada.

A versão atual utiliza a URL gratuita `workers.dev` e ainda não possui domínio próprio.

## Estrutura

```text
src/
├── assets/styles/          # estilos globais e design tokens
├── components/
│   ├── editorial/          # componentes Astro estáticos
│   └── player/             # player interativo em React
├── data/                   # inventários JSON versionados
├── layouts/                # estrutura HTML compartilhada
├── pages/                  # rotas e composição das páginas
├── types/                  # contratos TypeScript compartilhados
└── content.config.ts       # coleções e schemas de conteúdo
```

## Arquitetura

O site segue uma arquitetura **static-first**. Astro consulta e valida o
conteúdo durante o build e gera HTML estático para a homepage.

A maior parte da interface utiliza componentes Astro sem JavaScript no
cliente. React é usado apenas nos players interativos, hidratados com
`client:visible`.

Os embeds do SoundCloud e YouTube não são carregados no HTML inicial.
O iframe é criado somente após uma seleção explícita da pessoa usuária.

## Conteúdo

Os inventários são mantidos em arquivos JSON dentro de `src/data/` e
validados por Astro Content Collections:

- `sets.json`: catálogo geral de sets;
- `maremoto-sessions.json`: arquivo do programa Maremoto Sessions;
- `date-invites.json`: arquivo do programa Te convido para um Date.

Registros inválidos interrompem o build.

## Documentação

- [Contexto do projeto](docs/PROJECT_CONTEXT.md)
- [Direção visual da Issue 001](docs/issues.md)
- [Tarefas do projeto](docs/tasks/)
- [Decisões de arquitetura](docs/architecture/)

## Status

Em desenvolvimento — Issue 001: Warm Graphite.

Conteúdo editorial, arquivos musicais, players sob demanda e contato
profissional já estão implementados.
