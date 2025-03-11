Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignorar errores no capturados y continuar con las pruebas
  return false;
});

describe("Testear el formulario y llenarlo", () => {
  it("Ingresar a la página web principal, moverse a la página web del formulario y testear que se encuentren las casillas correspondientes y llenarlas con datos", () => {
    cy.visit("https://demoqa.com/");
    cy.get(".card-body").contains("Form").click();
    cy.contains("span", "Practice Form").click();
    cy.get("#firstName").should("be.visible").type("Santiago");
    cy.get("#lastName", { timeout: 1000 }).should("be.visible").type("Douton");
    cy.get("#userEmail").should("be.visible").type("doutontrabajo@gmail.com");
    cy.contains("label", "Male").click();
    cy.get("input#userNumber", { timeout: 1000 })
      .should("be.visible")
      .type("0123456789");
    cy.get("input#dateOfBirthInput").click().should("be.visible");
    cy.get("select.react-datepicker__month-select").select("July");
    cy.get("select.react-datepicker__year-select", { tiomeout: 3000 }).select(
      "1994"
    );
    cy.get(".react-datepicker__day--029")
      .should("be.visible") // Asegura que está visible
      .eq(0) // Selecciona el primer elemento de la lista
      .click();
    cy.get("div.subjects-auto-complete__value-container").type("Qa Analyst");
    cy.contains("label", "Music").click();
    cy.get("textarea#currentAddress").type("Texto dentro del Current Address");
    cy.get(".css-1hwfws3").eq(1).click(); // Abre el menú
    cy.contains("Haryana").click(); // Haz clic en la opción "Haryana"
    cy.get('div[id="city"] div').eq(2).click();
    cy.get('#react-select-4-option-0').click();
  });
});

