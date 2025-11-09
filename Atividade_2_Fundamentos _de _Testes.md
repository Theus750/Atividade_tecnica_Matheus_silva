# Atividade 2: Fundamentos de Testes

## 1. Plano de Testes: O que é e qual sua importância? Quais seções-chave compõem um Plano de Testes para o projeto QuarkClinic?


Um plano de testes é um documento essencial dentro do processo de garantia de qualidade de software, que descreve como o sistema será testado, quais serão os objetivos dos testes, os recursos necessários e o cronograma das atividades de teste.

Baseando-se no texto anterior, podemos dizer que o plano de testes é a etapa que organiza e direciona todas as atividades de teste ao longo do ciclo de vida de desenvolvimento de software (SDLC), garantindo que tanto a verificação (se o sistema atende aos requisitos especificados) quanto a validação (se ele realmente satisfaz as necessidades do usuário) sejam realizadas de forma estruturada.

em resumo:

``` bash

Um Plano de Testes é um documento que descreve a estratégia, o escopo, os recursos e o cronograma das atividades de  teste de um sistema.
Ele serve como guia para a equipe de QA e desenvolvimento, garantindo que todos entendam o que será testado, como e com quais critérios de sucesso.

```

### Importância do plano de testes:

***Garante organização e padronização nos testes.***

***Reduz retrabalho e erros de comunicação entre equipe de QA e devs.***

***Facilita o rastreamento de falhas e a priorização de correções.***

***Ajuda a comprovar a qualidade do software antes da entrega***

### Seções-chave do Plano de Testes — Projeto QuarkClinic:

As seções-chave de um Plano de Testes são os elementos fundamentais que estruturam como os testes serão planejados, executados e avaliados em um projeto. Em outras palavras, são as partes que garantem que o processo de teste seja organizado, rastreável e eficiente. sabendo disso, Tomaremos a atividade 1 como exemplo e criamos um exemplo para o  Projeto QuarkClinic:


| **Seção**                      | **Descrição**                                                                                                                                                                                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Introdução**              | O projeto **QuarkClinic** oferece uma plataforma online para agendamento de consultas médicas. O plano de testes documenta a estratégia, os recursos e o escopo das atividades de teste, garantindo qualidade, funcionalidade e confiabilidade antes da entrega final. |
| **2. Objetivos dos Testes**    | Validar o comportamento esperado do sistema, garantindo o funcionamento correto dos fluxos principais (cadastro, login, agendamento), estabilidade da interface e detecção precoce de falhas.                                                                          |
| **3. Escopo dos Testes**       | **Incluído:** Testes automatizados com Cypress, fluxos principais (cadastro, login, agendamento e envio de comprovante). **Excluído:** Testes de performance, segurança avançada e integração com serviços externos.                                                   |
| **4. Estratégia de Testes**    | Baseada em **Testes Funcionais Automatizados (Caixa-Preta)** com o Cypress. Inclui testes de regressão e E2E. Níveis: Sistema e Aceitação.                                                                                                                             |
| **5. Recursos Necessários**    | **Equipe:** 1 desenvolvedor/testador (Matheus). **Ferramentas:** Node.js, Cypress, VS Code, GitHub.                                                                                                                                                                    |
| **6. Ambiente de Teste**       | **SO:** Windows 10/11. **Navegador:** Chrome. **Framework:** Cypress 13+. **Servidor:** [https://clinic-mol.quark.tec.br](https://clinic-mol.quark.tec.br). **Banco de Dados:** Simulado via API.                                                                      |
| **7. Cronograma de Testes**    | **Dia 1:** Configuração do ambiente. **Dia 2–3:** Criação dos testes. **Dia 4:** Execução e ajustes. **Dia 5:** Revisão e relatório.                                                                                                                                   |
| **8. Riscos e Mitigações**     | API instável (usar mocks), alterações de layout (ajustar seletores), lentidão (aumentar timeout), ausência de staging (usar produção controladamente).                                                                                                                 |
| **9. Métricas de Qualidade**   | Taxa de sucesso dos testes, número de falhas detectadas, tempo médio de execução, cobertura funcional dos fluxos críticos.                                                                                                                                             |
| **10. Critérios de Aceitação** | Todos os testes críticos com 100% de sucesso; sem erros bloqueantes; cadastro, login e agendamento funcionais; mensagens e redirecionamentos corretos.                                                                                                                 |
| **11. Conclusão**              | O plano garante uma abordagem estruturada e rastreável, assegurando confiabilidade e qualidade contínua no sistema QuarkClinic.                                                                                                                                        |

---

## 2. Tipos de Testes: Explique os conceitos de: Teste de Caixa Preta (Black Box), Teste de Caixa Branca (White Box), Teste de Caixa Cinza (Gray Box).




| **Tipo de Teste**               | **Descrição**                                                                                                                                             | **Objetivo**                                                                                                  | **Exemplo no QuarkClinic**                                                                                                                   |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟩 **Caixa Preta (Black Box)**  | O testador **não tem acesso ao código-fonte**. O foco está nas **entradas e saídas**, verificando se o sistema responde corretamente às ações do usuário. | Validar se o software atende aos **requisitos funcionais** e comportamentais definidos.                       | Testar o login com credenciais válidas e inválidas, garantindo que o sistema permita o acesso apenas a usuários autorizados.                 |
| 🟦 **Caixa Branca (White Box)** | O testador **tem acesso completo ao código**, podendo analisar fluxos, condições e estruturas internas.                                                   | Garantir que todos os **caminhos e blocos lógicos** do código sejam testados e funcionem conforme o esperado. | Verificar o funcionamento interno das funções de autenticação, como o tratamento de erros e retorno de tokens de sessão.                     |
| 🟪 **Caixa Cinza (Gray Box)**   | O testador possui **conhecimento parcial do código** e dos fluxos internos, mas realiza testes funcionais com base no uso do sistema.                     | Validar a integração entre **módulos internos e externos**, considerando o comportamento esperado do usuário. | Testar o fluxo de agendamento conhecendo os endpoints da API (ex: `/api/v1/agendamentos`), mas executando o teste pela interface do sistema. |

---
## 3. Casos de Teste: O que são Casos de Teste? o Escreva 3 (três) casos de teste manuais (formato BDD ou tradicional) para a tela de Login (Fluxo 2), incluindo cenários positivo, negativo e de borda.



#### São cenários documentados que descrevem uma situação específica a ser testada, incluindo as etapas, os dados de entrada e o resultado esperado. Eles ajudam a verificar se o sistema atende aos requisitos funcionais.

| **ID**    | **Título do Caso de Teste**   | **Tipo de Cenário** | **Funcionalidade**               | **Cenário BDD**                                                                                                                                                                                                                                                                                                      | **Resultado Esperado**                                                                                                            |
| --------- | ----------------------------- | ------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **CT-01** | Login com credenciais válidas | 🟩 Positivo         | Autenticação de Usuário          | **Dado** que o usuário está na tela de login<br>**E** possui um cadastro válido no sistema<br>**Quando** ele insere um e-mail e senha corretos<br>**E** clica em “Continuar”<br>**Então** o sistema deve autenticar o usuário<br>**E** redirecionar para a tela principal exibindo “Bem-vindo(a), [Nome do Usuário]” | O sistema autentica corretamente o usuário e redireciona para a tela principal, exibindo a mensagem de boas-vindas personalizada. |
| **CT-02** | Login com senha incorreta     | 🟥 Negativo         | Autenticação de Usuário          | **Dado** que o usuário está na tela de login<br>**E** informa um e-mail válido<br>**Quando** ele insere uma senha incorreta<br>**E** clica em “Continuar”<br>**Então** o sistema deve exibir a mensagem de erro “Credenciais inválidas”<br>**E** o acesso não deve ser permitido                                     | O sistema bloqueia o acesso e apresenta a mensagem de erro “Credenciais inválidas”.                                               |
| **CT-03** | Login com campos vazios       | 🟨 Borda            | Validação de Campos Obrigatórios | **Dado** que o usuário está na tela de login<br>**Quando** ele deixa o campo de e-mail e/ou senha em branco<br>**E** clica em “Continuar”<br>**Então** o sistema deve impedir o envio do formulário<br>**E** exibir mensagens de validação como “Campo obrigatório” para os campos não preenchidos                   | O sistema exibe corretamente mensagens de erro e impede o envio até que os campos obrigatórios sejam preenchidos.                 |
