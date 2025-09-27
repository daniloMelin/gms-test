/// <reference types="cypress" />

describe("US-015-Funcionalidade: Recomendações de filmes", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Deve conter as recomendaçõe do dia", () => {
    cy.get("#recommendations").should("be.visible");
  });
});
