/// <reference types="cypress" />

describe("US-015-Funcionalidade: Recomendações de filmes", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Deve exibir entre 4 e 5 cards de recomendações do dia", () => {
    cy.get("#recommendations-section").should("be.visible");
    cy.get("#recommendations-section h2").should("have.text", "RECOMENDAÇÕES DO DIA");

    // 3. Valida a regra de negócio (a quantidade de itens)
    cy.get("#recommendations > div").its("length").should("be.gte", 4).and("be.lte", 5);
  });

  it("Deve garantir que todos os cards de recomendação contenham imagem e título", () => {
    // Busca todos os divs de recomendação e itera sobre cada um
    cy.get("#recommendations > div").each(($cardFilmes) => {
      cy.wrap($cardFilmes).find("img").should("be.visible");
      cy.wrap($cardFilmes).find("p").should("not.be.empty");
    });
  });
});
