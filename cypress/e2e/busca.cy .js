/// <reference types="cypress" />

describe.skip("US-001-Funcionalidade: Busca de filmes", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Deve buscar um filme na barra de pesquisa", () => {
    cy.get("#search-input").type("The Matrix");
    cy.get("#search-button").click();

    cy.get("#results-section").should("be.visible");
  });

  it("Deve buscar um filme inexistente na barra de pesquisa", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#search-input").type("O Senhor dos Anéis");
    cy.get("#search-button").click();

    cy.get("#results-section > p").should("contain", "Filme não encontrado.");
  });
});
