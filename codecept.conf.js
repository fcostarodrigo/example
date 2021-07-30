exports.config = {
  output: 'application-tests/report',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:4200',
      windowSize: '1200x900'
    }
  },
  include: {},
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: 'application-tests/features/*.feature',
    steps: ['./application-tests/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  name: 'example'
}
