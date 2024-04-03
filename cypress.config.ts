import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1280,
  viewportWidth: 800,
  video: true,
  watchForFileChanges: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'http://uitestingplayground.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env:{
      stage:'https://stage.pasv.us/course',
      prod:'https://coding.pasv.us/course',
      test:'Hello World!',
      herokuapp: 'https://the-internet.herokuapp.com/javascript_alerts',
      demoQa: 'https://demoqa.com'
    }
  },
  retries: {
    runMode: 3,
    openMode: 2,
  },
  defaultCommandTimeout: 15_000,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
//type of env указываем в тестах и можем переходить на любой environment при тестировании (environments.cy.ts)
//env.stage - dot notation using in tests
