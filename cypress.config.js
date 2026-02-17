const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { defineConfig } = require("cypress");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bro-workout-frontend.vercel.app",
    specPattern:"cypress/e2e/features/**/*.feature",
    async setupNodeEvents(on, config){
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});