# gms-test

Automação de testes end-to-end com [Cypress](https://www.cypress.io/) para o sistema de gerenciamento de filmes (GMS). Este projeto foi desenvolvido como parte do curso Jornada de QA da EBAC.

## Visão geral

O objetivo deste projeto é garantir a qualidade das principais funcionalidades do Golden Movie Studio por meio de testes automatizados, facilitando a identificação de bugs e a validação de requisitos.

## Funcionalidades testadas

- Busca de filmes
- Cadastro de membros
- Recomendações diárias
- Validação de campos obrigatórios
- Fluxos de autenticação

## Estrutura de pastas

- `cypress/` — Testes automatizados, fixtures e suporte
- `cypress/e2e/` — Cenários de testes end-to-end
- `cypress/fixtures/` — Dados de teste
- `cypress/support/` — Comandos customizados e configurações
- `README.md` — Documentação do projeto

## Como executar os testes

1. Instale as dependências:

```bash
   npm install
```

2. Execute os testes em modo interativo:

```bash
   npx cypress open
```

   Ou em modo headless:

```bash
   npx cypress run
```

## Requisitos

- Node.js >= 14
- npm >= 6

## Licença

Este projeto é apenas para fins educacionais.
