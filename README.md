# 🎬 GMS Test - Automação de Testes End-to-End

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

Este projeto consiste na automação de testes End-to-End (E2E) para o sistema **Golden Movie Studio (GMS)**. O projeto foi desenvolvido como parte da **Jornada de QA da EBAC**, simulando um ambiente real de desenvolvimento ágil.

## 🎯 Objetivo

Garantir a qualidade das principais funcionalidades da aplicação, assegurando que fluxos críticos como cadastro e autenticação funcionem conforme o esperado, além de validar regras de negócio e integridade de dados via API.

## 🚀 Funcionalidades Testadas

* 🔍 **Busca de filmes:** Validação de filtros e resultados.
* 📝 **Cadastro de membros:** Fluxos de sucesso e validações de erro (campos obrigatórios, máscaras).
* ⭐ **Recomendações:** Verificação da exibição de recomendações diárias.
* 🔐 **Autenticação:** Login, Logout e segurança de senha.
* 📡 **Integração:** Testes de contrato de API.

## 🛠️ Estrutura do Projeto

```text
gms-test/
├── .github/workflows/   # Pipeline de CI/CD (Github Actions)
├── cypress/
│   ├── e2e/             # Cenários de teste (spec files)
│   ├── fixtures/        # Massas de dados estáticas (JSON)
│   ├── support/         # Comandos customizados e Page Objects
│   └── videos/          # Evidências de execução (gerado automaticamente)
├── cypress.config.js    # Configuração global do Cypress
├── package.json         # Dependências e scripts do projeto
└── README.md            # Documentação
```

## 🧪 Casos de Teste (Escopo)

Abaixo estão os cenários planejados e executados durante a sprint.

| ID          | Cenário                          | Prioridade | Resultado Esperado                                               |
| ----------- | -------------------------------- | ---------- | ---------------------------------------------------------------- |
| **CAD-001** | Cadastro com campos obrigatórios | Alta       | Mensagem de sucesso ao preencher o mínimo necessário.            |
| **CAD-002** | Validação de formato de e-mail   | Média      | Bloquear formatos inválidos (ex: `nome@dominio`).                |
| **CAD-003** | Submissão vazia                  | Média      | Exibir mensagens de erro em todos os campos obrigatórios.        |
| **CAD-004** | Cadastro completo                | Alta       | Sucesso ao preencher todos os campos (obrigatórios + opcionais). |
| **CAD-005** | Validação de Telefone            | Média      | Bloquear formatos inválidos (ex: "123").                         |
| **CAD-006** | Senha Forte                      | Alta       | Permitir senha com letras maiúsculas, especiais e min 8 dígitos. |
| **CAD-007** | Bloqueio de Senha Fraca          | Alta       | Exibir erro para senhas simples (ex: "senha123").                |
| **CAD-008** | E-mail duplicado                 | Alta       | Impedir cadastro de e-mail já existente na base.                 |
| **CAD-009** | Política de Privacidade          | Baixa      | Redirecionar corretamente para a página de política.             |
| **CAD-010** | Criptografia (Banco de Dados)    | Alta       | A senha deve estar hash/criptografada no DB.                     |

## 🐛 Bugs Reportados

Durante a execução dos testes exploratórios e automatizados, as seguintes falhas foram identificadas:

| ID          | Título                                  | Severidade | Ferramenta | Status      |
| ----------- | --------------------------------------- | ---------- | ---------- | ----------- |
| **BUG-001** | Cadastro de usuário sem nome permitido  | Crítico    | Postman    | 🔴 Aberto    |
| **BUG-002** | Senha salva sem criptografia no Banco   | Crítico    | Postman    | 🟢 Corrigido |
| **BUG-003** | Aceite de telefone com formato inválido | Crítico    | Chrome     | 🔴 Aberto    |

## ⚙️ Como executar

**Pré-requisitos:**

* Node.js (v14 ou superior)
* NPM (v6 ou superior)

**Passo a passo:**

1. Clone o repositório:

```bash
   git clone [https://github.com/daniloMelin/gms-test.git](https://github.com/daniloMelin/gms-test.git)
   cd gms-test
```

2. Instale as dependências:

```bash
   npm install
```

3. Execute os testes:

* **Modo Headless (Terminal):**
  
```bash
   npx cypress run
```

* **Modo Interativo (Navegador):**

```bash
   npx cypress open
```

## 📄 Licença

Este projeto é para fins educacionais.
