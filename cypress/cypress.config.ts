import { defineConfig }  from 'cypress'

export default defineConfig({
  viewportHeight: 1280,
  viewportWidth: 800,
  video: true,
  watchForFileChanges: true,
  e2e: {
    baseUrl: 'https://uitestingplayground.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      stage:'https://stage.pasv.us/course',
      prod: 'https://coding.pasv.us/course',
      info: 'Hello World!',
      herokuapp: 'https://the-internet.herokuapp.com',
      demoQA: 'https://demoqa.com'
    }
  },
  defaultCommandTimeout: 16_000,
});
