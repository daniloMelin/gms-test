/// <reference types="cypress" />

import { fakerPT_BR } from '@faker-js/faker';

describe('US-012-Funcionalidade: Cadastro de membros', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.get('body').should('be.visible');
    cy.screenshot();
  });

  const email = fakerPT_BR.internet.email();

  it('Deve fazer o cadastro de campos obrigatórios', () => {    
    cy.preencherCadastro('Douglas', 'Silva', email, '11999999999', 'Forte@1235');
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso');
  });

  it('Deve validar mensagem de erro quando email duplicado', () => {
    cy.preencherCadastro('Douglas', 'Silva', email, '11999999999', 'Forte@1235');
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado');
  });

  it('Deve validar mensagem de erro quando email estiver no formato inválido', () => {
    cy.preencherCadastro('Douglas', 'Silva', 'douglas.com.br', '11999999999', 'Forte@1235');
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido');
  });

  it('Deve validar mensagem de erro com telefone inválido', () => {
    cy.preencherCadastro('Douglas', 'Silva', fakerPT_BR.internet.email(), '1199', 'Forte@1235');
    cy.get('#signup-response').should('contain', 'Telefone deve ser um telefone válido');
  });

  it('Deve validar mensagem de erroquando a senha estiver com menos de 8 caracteres', () => {
    cy.preencherCadastro('Douglas', 'Silva', fakerPT_BR.internet.email(), '11999999999', 'Forte');
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres');
  });

  it('Deve validar mensagem de erro quando a senha não contiver caracteres especiais', () => {
    cy.preencherCadastro('Douglas', 'Silva', fakerPT_BR.internet.email(), '11999999999', 'Forte1234');
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres');
  });

});

