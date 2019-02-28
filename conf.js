exports.config = {
  
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // directConnect: true,
  suites : {
    specs : [
    './generat_ouput/e2e_testing/Test_Suites/login-page-verification.js',
   
  ],
},
  framework: 'jasmine',
  /* multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }] ,*/
  navigate : 'https://opensource-demo.orangehrmlive.com/',

  onPrepare: () => {
    let globals = require('protractor');
    let browser = globals.browser;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(5000);
  }

};

/*
The this keyword:   this.foo = 0; 
 */