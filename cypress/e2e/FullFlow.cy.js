describe('Tela de Login', () => {
  beforeEach(() => {
    cy.visit('/index/363622206')
  });

  it('Fluxo 1 - Deve cadastrar um novo usuário com sucesso', () => {

    // Clica em "Cadastre-se"
    cy.get('[data-cy="btn-cadastro"]').click()
    cy.get('[data-cy="campo-nome-input"]').should('be.visible')


    // Gera um email único pra cada execução
    const randomEmail = `teste_${Date.now()}@guerrillamail.com`
    const randomNumber = Math.floor(Math.random() * 10000)
    const randomName = `MatheusTeste${randomNumber}`


     // Salva no fixture para o login
    cy.salvarDados(randomName, randomEmail);



    // Preenche o formulário
    cy.preencherFormulario(randomName, randomEmail);

    
    cy.get('[data-cy="campo-senha-input"]').eq(1).type('Teste123!')
    cy.get('[data-cy="campo-confirmar-senha-input"]').eq(0).type('Teste123!')

    cy.get('#cb-cadastro').check({ force: true })




    // Intercepta a requisição de criação de conta
    cy.intercept('POST', '**/api/social/usuarios').as('criarConta')


    // Clica em Criar conta
    cy.get('[data-cy="btn-criar-conta"]').click()


    // Espera a resposta da API
    cy.wait('@criarConta').its('response.statusCode').should('eq', 200)

    // Verifica se o nome aparece na home logada
    cy.contains('Bem-vindo').should('be.visible')
    cy.contains(randomName.split(' ')[0], { timeout: 10000 }).should('be.visible')
  })
  it('Fluxo 2 - Deve logar um usuário existente com sucesso', () => {
    
    // Lê os dados do usuário do cadastro
    cy.fixture('usuario.json').then((user) => {
      // Intercepta **antes** de qualquer ação
      cy.intercept('POST', 'https://clinic-mol.quark.tec.br/api/auth/login').as('loginUsuario')
      cy.intercept('GET', '**/api/protected/me').as('getMe')

      // Abre o modal de login
      cy.get('[data-cy="btn-login"]').click()
      cy.get('[data-cy="campo-usuario-input"]', { timeout: 10000 }).should('be.visible')

      // Preenche email e senha
      cy.login(user.email, user.senha)

      // Espera as APIs terminarem
      cy.wait('@loginUsuario', { timeout: 15000 }).its('response.statusCode').should('eq', 200)
      cy.wait('@getMe', { timeout: 15000 })

      // Valida que a home está logada
      cy.contains('Bem-vindo', { timeout: 10000 }).should('be.visible')
      cy.contains(user.nome.split(' ')[0], { timeout: 10000 }).should('be.visible')
    })
  })

  it('Fluxo 3 - Deve agendar uma consulta', () => {
    cy.agendarConsulta();
    
    
    cy.get('[data-cy="confirmacao-especialidade"]').should('contain.text', 'CARDIOLOGIA');
    cy.fixture('usuario.json').then((user) => {
      cy.get('[data-cy="confirmacao-paciente"]').should('contain.text', user.nome);
    })
    cy.get('@profissionalSelecionado').then((profissionalNome) => {
      cy.get('[data-cy="confirmacao-profissional"]').should('contain.text', profissionalNome);
    })
    cy.get('@diaSelecionado').then((dia) => {
      cy.get('[data-cy="confirmacao-datahora"]').should('contain.text', dia);
    })
    cy.get('@horarioSelecionado').then((horarioTexto) => {
      cy.get('[data-cy="confirmacao-datahora"]').should('contain.text', horarioTexto)
    })
    cy.get('[data-cy="confirmacao-btn-confirmar"]').click();
    cy.get('[data-cy="finalizacao-msg-sucesso"]').should('contain.text', 'Agendamento efetuado com Sucesso!');
  })

  it("fluxo 4 (bonus) - Comprovante", () =>{
    cy.agendarConsulta();
    cy.get('[data-cy="confirmacao-btn-confirmar"]').click();
    cy.get('[data-cy="finalizacao-btn-transferencia"]').click();
    cy.get('#comprovante').selectFile('pdf-test.pdf');
    cy.get('[data-cy="pagamento-form-textarea-observacao"]').type('Comprovante de teste');
    cy.get('[data-cy="pagamento-form-btn-enviar"]').click();
    cy.get('[data-cy="pagamento-confirm-link"]').should('contain.text', 'Obrigado por enviar! Iremos analisar');

  } )

})

