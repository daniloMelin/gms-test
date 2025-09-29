/// <reference types="cypress" />

describe("US-001-Funcionalidade: Busca de filmes", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Deve buscar um filme na barra de pesquisa", () => {
    cy.get("#search-input").type("The Matrix");
    cy.get("#search-button").click();

    cy.get("#results-section").should("be.visible");
  });

  it("Deve buscar um filme inexistente na barra de pesquisa", () => {
    // Busca um filme que não está na lista
    cy.get("#search-input").type("O Senhor dos Anéis");
    cy.get("#search-button").click();

    cy.get("#results-section > p").should("contain", "Filme não encontrado.");
  });

  it("Deve buscar um filme de uma lista", () => {
    // Pega o segundo filme do arquivo filmes.json
    cy.fixture("filmes").then((filmes) => {
      cy.get("#search-input").type(filmes[1].titulo);
      cy.get("#search-button").click();

      cy.get("#results-section").should('contain', filmes[1].titulo);
    });
  });

  it("Deve buscar todos os filmes da lista", () => {
    // Itera sobre cada filme no arquivo filmes.json
    cy.fixture("filmes").each((filmes) => {
      cy.get("#search-input").clear().type(filmes.titulo);
      cy.get("#search-button").click();

      cy.get("#results-section").should('contain', filmes.titulo);
    });
  });
});
