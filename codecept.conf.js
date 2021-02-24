require('dotenv').config();
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  name: 'automation-project-template',
  tests: './src/tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: process.env.BASE_URL,
      browser: process.env.BROWSER,
      host: process.env.WEBDRIVER_HOST,
      port: Number(process.env.WEBDRIVER_PORT),
      restart: true,
      show: false,
      protocol: 'http',
      outputDir: '../output',
      smartWait: 5000,
      ignoreHTTPSErrors: true,
      windowSize: '1320x720',
      fullPageScreenshots: true,
      args: ["--no-sandbox", "--disable-gpu"],
      desiredCapabilities: {
        pageLoadStrategy: 'none'
      },
    }
  },

  include: {
    I: './steps_file.js'
  },

  bootstrap: null,
  mocha: {},

  multiple: {
    parallel: {
      chunks: 2,
      browsers: [process.env.BROWSER]
    }
  },

  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    selenoid: {
      enabled: true,
      deletePassed: false,
      autoCreate: false,
      autoStart: false,
      sessionTimeout: '2m',
      enableVideo: false,
      enableLog: false,
      enableVNC: true
    }
  }
}