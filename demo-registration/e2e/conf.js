exports.config = {
  framework: 'cucumber',
  baseUrl: 'http://demoqa.com/',
  specs: [
    //C:\Users\Admin\IntelliJ\demo-registration\node_modules\webdriverio
    './e2e/features/registration.feature'
    //'test/resources/**'
  ],
  capabilities: [/*{
   browserName: 'chrome'
   },*/
    {
      browserName: 'firefox'
    }
  ],
  sync: true,
  logLevel: 'result',
  coloredLogs: true,
  screenshotPath: './e2e/reports/screenshots',
  waitforTimeout: 1000,
  reporters: ['dot'],
  reporterOptions: {
    outputDir: './'
  },
  cucumberOpts: {
    //require: [],        // <string[]> (file/dir) require files before executing features
    //backtrace: false,   // <boolean> show full backtrace for errors
    //compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    colors: true,       // <boolean> disable colors in formatter output
    source: true,       // <boolean> hide source URIs
    //tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 20000,      // <number> timeout for step definitions
    format: ['pretty']
  },
  /*plugins: {
    webdrivercss: {
      screenWidth: [320,480,640,1024]
    }
  },*/
  onPrepare: function () {
    var reporter = require('cucumber-html-reporter');
    var options = {
      theme: 'bootstrap',
      output: './e2e/reports/report'
    };
    reporter.generate(options);
  }
};