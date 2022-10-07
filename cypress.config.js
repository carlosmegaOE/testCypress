const { defineConfig } = require("cypress");
module.exports = defineConfig({
  requestTimeout: 2000,
  experimentalStudio: true,
  defaultCommandTimeout: 10000,
  retries: 0,
  viewportWidth: 1440,
  viewportHeight: 900,
  video:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      watchForFileChanges = true,
      defaultCommandTimeout = 3000,
      pluginsFile = false,
      chromeWebSecurity = false
    },
  },
});

