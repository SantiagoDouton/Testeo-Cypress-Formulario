const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.js",  // Esto buscará todos los archivos .js en la carpeta e2e y subcarpetas
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});