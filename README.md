# Atividade Tecnica 
---
# ⚙️ Instalação

Antes de começar, certifique-se de ter instalado:

[Node.js (versão 16 ou superior)](https://nodejs.org/pt/download)
[npm ou yarn](https://nodejs.org/pt/download)

Depois, clone o repositório e instale as dependências:
```bash
git clone https://github.com/Theus750/Atividade_tecnica_Matheus_silva.git
cd Atividade_Tecnica_Matheus_Silva
npm install cypress --save-dev
```
---
## 🚀 Como Rodar os Testes

### 🔹 Modo Interativo (interface do Cypress)

Abre o Cypress Test Runner para visualizar os testes rodando em tempo real:
```bash
npx cypress open
```
Após isso, selecione o tipo de teste ***"E2E"*** e o navegador que deseja usar.


Depois, selecione o arquivo:

```bash
FullFlow.cy.js 
```
### 🔹 Modo Headless (linha de comando)

Executa todos os testes diretamente no terminal (sem interface gráfica):

```bash
npx cypress run
```
---
## 🧩 Funcionalidades Testadas
| Fluxo | Descrição                         |
| ----- | --------------------------------- |
| **1** | Cadastro de novo usuário          |
| **2** | Login de usuário existente        |
| **3** | Agendamento de consulta           |
| **4** | Envio de comprovante de pagamento |

---
## 🧠 Comandos Customizados

| Fluxo | Comando                         |
| ----- | --------------------------------- |
| **1** | cy.login(email, senha)        |
| **2** | cy.agendarConsulta()        |
| **3** | cy.salvarDados(nome, email)           |
| **4** | cy.preencherFormulario(nome, email) |


---
## 📁 Estrutura do projeto

```bash
📦 Atividade_Tecnica_Matheus_Silva
├── cypress/
│   ├── e2e/
│   │   └── FullFlow.cy.js                  # Arquivo principal de testes (fluxos 1–4)
│   ├── fixtures/
│   │   └── usuario.json                    # Dados do usuário (gerado automaticamente)
│   ├── support/
│   │   ├── commands.js                     # Comandos customizados (login, agendarConsulta etc.)
│   │   └── e2e.js                          # Arquivo de suporte do Cypress
│
├── .gitignore                              # Arquivos e pastas ignorados pelo Git
├── Atividade_2_Fundamentos_de_Testes.md
├── cypress.config.js                       # Configuração do Cypress
├── package.json                            # Dependências e scripts do projeto
├── pdf-test.pdf
└── README.md                               # Este arquivo 

```

---

# Links:
[Repositório da atividade](https://github.com/Theus750)




# 🧑🏽‍💻 Feito com carinho por [Matheus](https://github.com/Theus750)