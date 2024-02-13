import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1280,
  viewportWidth: 800,
  video: true,
  watchForFileChanges: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      stage:'https://stage.pasv.us/course',
      prod:'https://coding.pasv.us/course',
      test:'Hello World!'
    }
  },
  defaultCommandTimeout: 15_000,
});
//type of env указываем в тестах и можем переходить на любой environment при тестировании (environments.cy.ts)
//env.stage - dot notation using in tests
