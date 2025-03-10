Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignorar errores no capturados y continuar con las pruebas
    return false;
  });
  


describe("Testear el formulario y llenarlo", () => {
  it("Ingresar a la página web principal, moverse a la página web del formulario y testear que se encuentren las casillas correspondientes y llenarlas con datos", () => {
    cy.visit("https://demoqa.com/");
    cy.get(".card-body").contains("Form").click();
    cy.contains("span", "Practice Form").click();
    cy.get("#firstName")
      .should("be.visible")
      .type("Santiago");
    cy.get("#lastName", { timeout: 1000 })
      .should("be.visible")
      .type("Douton");
    cy.get("#userEmail")
      .should("be.visible")
      .type("doutontrabajo@gmail.com");
    cy.contains("label", "Male").click();
    cy.get("input#userNumber", {timeout: 1000})
      .should("be.visible")
      .type("0123456789");
  });
});
