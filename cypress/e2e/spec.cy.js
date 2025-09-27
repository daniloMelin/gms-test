/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type('Diego')
    cy.get('#signup-lastname').type('Silva')
    cy.get('#signup-email').type('emailSilva@teste.com')
    cy.get('#signup-phone').type('11999999999')
    cy.get('#signup-password').type('Forte@1235')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso')
  })
})

/*
describe('US-001-Funcionalidade: Busca de filmes', () => {
  it('Deve buscar um filme na barra de pesquisa', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#search-input').type('O Senhor dos Anéis')
    cy.get('#search-button').click()
  })
})

describe('US-015-Funcionalidade: Recomendações de filmes', () => {
  it('Deve recomendar filmes com base no histórico de visualização do usuário', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#recommendations').should('be.visible')
  })
})

*/