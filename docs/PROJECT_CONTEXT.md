# Contexto do Projeto — ANN4GODOY

## Sobre o projeto

Estou desenvolvendo meu site artístico como DJ sob a marca **ANN4GODOY**.

O objetivo principal é criar um site profissional para apresentar meu trabalho, identidade artística, sets, agenda e informações para booking.

A linguagem visual será inspirada em **revistas e editoriais independentes**, e não em um portfólio tradicional de DJ.

Quero que o site funcione como uma espécie de **revista digital da ANN4GODOY**, utilizando conceitos como:

* capa;
* edições/issues;
* editorial;
* índice/contents;
* spreads fotográficos;
* arquivo;
* seleções musicais;
* agenda;
* press/media kit;
* contato/booking.

A primeira versão será chamada **Issue 001 - Warm Graphite**.

---

# Objetivo técnico

Além de ser um produto real para minha carreira como DJ, este projeto será usado como laboratório de estudo de engenharia de software.

Sou formada em Análise e Desenvolvimento de Sistemas e trabalho com desenvolvimento web há aproximadamente 10 anos, principalmente com **Ruby on Rails**.

Tenho experiência profissional com:

* Ruby on Rails;
* PostgreSQL e MySQL;
* APIs REST;
* GraphQL;
* Redis;
* Sidekiq;
* Background Jobs;
* RSpec;
* FactoryBot;
* Elasticsearch;
* React;
* Docker;
* AWS;
* CI/CD;
* Observabilidade;
* Code Review.

Quero usar o projeto para colocar em prática e expandir meus conhecimentos em:

* TypeScript;
* Node.js;
* NestJS;
* Arquitetura de Software;
* DDD;
* Event-Driven Architecture;
* Filas e processamento assíncrono no ecossistema Node;
* CI/CD;
* AWS;
* Observabilidade;
* Métricas;
* SLI/SLO/SLA;
* Decisões Arquiteturais.

Visando exemplificar cada decisão tomada e relacionar conceitos novos com coisas que já tenho experiencia do ecossistema Rails.

---

# Stack inicial

O frontend foi criado utilizando:

* Astro;
* TypeScript;
* HTML;
* CSS.

Neste momento, o projeto é um site essencialmente estático.

---

# Arquitetura inicial

Pretendo começar aproximadamente com:

src/
├── components/
│   └── editorial/
├── layouts/
├── pages/
└── styles/

Os componentes devem seguir a linguagem editorial do projeto.

Exemplos:

* Cover
* Masthead
* IssueIndex
* EditorialIntro
* PhotoSpread
* PullQuote
* SetItem
* EventItem

Evitar nomes e padrões excessivamente associados a landing pages tradicionais quando houver uma representação editorial melhor.

---

# Direção visual

A interface deve remeter a uma revista/editorial contemporâneo.

Características:

* grid editorial;
* tipografia como elemento visual;
* fotografias grandes;
* bastante espaço negativo;
* composições assimétricas;
* hierarquia tipográfica forte;
* estética minimalista;
* poucos efeitos;
* animações sutis;
* experiência responsiva.

Evitar:

* aparência de dashboard;
* excesso de cards;
* sombras;
* muitos elementos arredondados;
* estética SaaS;
* neon/cyberpunk genérico;
* efeitos apenas decorativos.

---

# Evolução planejada

O projeto deverá crescer progressivamente.

## Fase 1 — Site editorial

Astro + TypeScript.

Construir:

* Cover;
* Contents;
* Editorial;
* Sets;
* Archive;
* Contact.

Foco em:

* Componentização;
* HTML semântico;
* CSS;
* Responsividade;
* Acessibilidade;
* Performance;
* SEO.

## Fase 2 — Domínio

Começar a modelar conceitos como:

* Artist;
* Event;
* Venue;
* Set;
* Booking;
* MediaAsset;
* PressFeature.

Quero estudar modelagem de domínio através desses problemas reais.

## Fase 3 — Backend

Posteriormente criar uma API separada utilizando:

**Node.js + NestJS**

Possíveis endpoints:

GET /events
GET /events/:id

GET /sets
GET /sets/:id

POST /bookings

## Fase 4 — Persistência

Adicionar PostgreSQL quando existir uma necessidade real de persistência.

## Fase 5 — Booking

Criar um fluxo real de solicitação de booking.

Por exemplo:

Website
→ POST /bookings
→ API
→ Booking criado

Posteriormente esse fluxo poderá ser utilizado para estudar arquitetura orientada a eventos:

BookingRequested
→ SendBookingEmail
→ NotifyArtist
→ Analytics

## Fase 6 — Processamento assíncrono

Explorar:

* Redis;
* BullMQ;
* workers;
* queues.

Quero relacionar esses conceitos com minha experiência anterior usando Sidekiq + Redis em Rails.

## Fase 7 — Infraestrutura

Explorar progressivamente:

* GitHub Actions;
* CI/CD;
* AWS;
* S3;
* CloudFront;
* ECS;
* CloudWatch.

## Fase 8 — Observabilidade

Introduzir:

* structured logging;
* métricas;
* tracing;
* health checks;
* latency;
* error rate;
* availability;
* SLI;
* SLO;
* SLA.

---

# Filosofia de desenvolvimento

Este projeto também é um exercício de tomada de decisões de engenharia.

Antes de introduzir uma tecnologia ou padrão, quero responder:

1. Qual problema estamos tentando resolver?
2. O projeto realmente possui esse problema atualmente?
3. Qual é a solução mais simples?
4. Quais são as alternativas?
5. Qual trade-off estamos aceitando?

Não implementar microsserviços, filas, Redis, banco de dados, DDD ou outras tecnologias simplesmente para utilizá-las.

Quero introduzi-las quando o domínio criar uma justificativa real ou quando estivermos realizando explicitamente um experimento de aprendizado.

---

# Como quero que o Codex trabalhe comigo

Atue mais como **pair programmer / tech lead** do que como gerador automático de código.

Quando estivermos implementando algo novo:

1. explique brevemente o problema;
2. apresente a decisão técnica;
3. explique o motivo;
4. quando for um conceito importante para aprendizado, permita que eu tente implementar;
5. faça code review da minha implementação;
6. identifique problemas;
7. proponha refatorações;
8. explique os conceitos envolvidos.

Quando fizer alterações diretamente no projeto, explique:

* quais arquivos foram alterados;
* por que foram alterados;
* quais decisões arquiteturais foram tomadas.

Evite grandes refatorações sem explicar previamente a motivação.

---

# Architecture Decision Records

Quero documentar decisões importantes em:

docs/architecture/

Utilizando ADRs.

Exemplo:

docs/architecture/
├── 001-use-astro.md
├── 002-static-first-architecture.md
└── ...

Cada ADR deve registrar:

* Context;
* Decision;
* Alternatives;
* Consequences.

Não criar ADR para decisões triviais.

---

# Princípio principal

O objetivo não é criar a arquitetura mais complexa possível.

O objetivo é construir um produto real para a **ANN4GODOY** enquanto desenvolvo minha capacidade de raciocinar sobre arquitetura e engenharia de software.

Sempre priorizar:

**problema → decisão → implementação → observação → refatoração**

em vez de:

**tecnologia → procurar onde utilizá-la**.
