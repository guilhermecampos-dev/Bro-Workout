const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { defineConfig } = require("cypress");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  env: {
    apiUrl: "https://broworkout.back.brothertec.com.br",
    activeWorkoutExerciseId: "6882f02ee87e15cb925ed6a4",
    activeWorkoutExerciseName: "Voador",
  },
  e2e: {
    baseUrl: "https://bro-workout-frontend.vercel.app",
    specPattern:"cypress/e2e/**/*.{cy.js,feature}",
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
