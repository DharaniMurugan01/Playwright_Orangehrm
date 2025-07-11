const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports/json', 
  reportPath: 'reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: '115'
    },
    device: 'Dharani Local test machine',
    platform: {
      name: 'Windows',
      version: '10'
    }
  },
  customData: {
    title: 'Project Info',
    data: [
      { label: 'Project', value: 'OrangeHRM BDD' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'Regression' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
      { label: 'Execution End Time', value: new Date().toLocaleString() }
    ]
  }
});
