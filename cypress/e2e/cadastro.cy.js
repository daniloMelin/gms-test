/// <reference types="cypress" />

describe.skip("US-012-Funcionalidade: Cadastro de membros", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it.skip("Deve fazer o cadastro de campos obrigatórios", () => {
    cy.get("#signup-firstname").type("Diego");
    cy.get("#signup-lastname").type("Silva");

    cy.get("#signup-email").type("emailSilva@teste.com");
    cy.get("#signup-phone").type("11999999999");
    cy.get("#signup-password").type("Forte@1235");

    cy.get("#signup-button").click();
    cy.get("#signup-response").should("contain", "Cadastro realizado com sucesso");
  });

    it("Deve preencher o email em formato inválido", () => {
    cy.get("#signup-firstname").type("Diego");
    cy.get("#signup-lastname").type("Silva");

    cy.get("#signup-email").type("emailSilvateste.com");
    cy.get("#signup-phone").type("11999999999");
    cy.get("#signup-password").type("Forte@1235");

    cy.get("#signup-button").click();
    cy.get("#signup-response").should("contain", "E-mail deve ser um email válido");
  });

});
