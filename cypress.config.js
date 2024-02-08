const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  experimentalModifyObstructiveThirdPartyCode: true,
  reporter: 'mochawesome',
  reporterOptions: {
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": true,
    "json": true,
    "screenshot": false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
