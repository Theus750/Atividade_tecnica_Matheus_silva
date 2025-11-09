// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-cy="campo-usuario-input"]').type(email)
    cy.get('[data-cy="campo-senha-input"]').first().type(senha)

    // Marca checkbox se necessário
    cy.get('#cb-login').check({force: true})

    // Clica em "Continuar" para logar
    cy.get('[data-cy="btn-submit-login"]').dblclick()
})

Cypress.Commands.add("agendarConsulta", () => {
    cy.fixture('usuario.json').then((user) => {
      cy.get('[data-cy="btn-login"]').click();
      cy.login(user.email, user.senha)
      })
    cy.get('[data-cy="texto-consulta-presencial"]').click({force: true});
    cy.get('[data-cy^="convenio-radio"]').contains('PARTICULAR').click({force: true});
    cy.get('[data-cy^="especialidade-item"]').contains('CARDIOLOGIA')
    cy.get('[data-cy^="agendar-agenda-item-"]').eq(1).within(() => {
      cy.get('[data-cy="agenda-main-header"]').then((diaElement) => {
        let data = diaElement.text().slice(0, 4);
        cy.wrap(data).as('diaSelecionado')
      })
      cy.get('[data-cy="agenda-profissional-nome"]').then((profissionalElement) => {
        let profissionalNome = profissionalElement.text();
        cy.wrap(profissionalNome).as('profissionalSelecionado')
      })
      cy.get('[data-cy^="agenda-item-horario-texto-"]').first().then((horarioElement) => {
        let horarioTexto = horarioElement.text();
        cy.wrap(horarioTexto).as('horarioSelecionado')
        cy.wrap(horarioElement).click();
      })
    })
    cy.get('[data-cy="paciente-card-radio-label"]').click();
    
  })


  Cypress.Commands.add("salvarDados", (nome, email) =>{
    cy.writeFile('cypress/fixtures/usuario.json', { 
      nome: nome,
      email: email,
      senha: 'Teste123!',
      telefone: '84999999999',
    })
  })


  Cypress.Commands.add('preencherFormulario', (nome, email) => {
    cy.get('[data-cy="campo-nome-input"]').type(nome)
    cy.get('[data-cy="campo-telefone-input"]').type('84999999999')
    cy.get('[data-cy="campo-sexo-select"]').select('MASCULINO')
    cy.get('[data-cy="campo-data-nascimento-input"]').type('20-07-2003')
    cy.get('[data-cy="campo-email-input"]').first().type(email)
    cy.get('[data-cy="campo-tipo-documento-select"]').select('CPF')
    cy.get('[data-cy="campo-numero-documento-input"]').type('12345678909')

  })
 