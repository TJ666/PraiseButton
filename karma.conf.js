// Karma configuration
// Generated on Sun Mar 25 2018 21:20:11 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    files: [
      './unit/**/*.js',
      './unit/**/*.spec.js'
    ],


    exclude: [
    ],

    preprocessors: {
      './unit/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },


    port: 9876,


    colors: true,


    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    browsers: ['PhantomJS'],


    // 在终端执行 改为true
    singleRun: true,

    concurrency: Infinity
  })
}
