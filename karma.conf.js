/*eslint-disable */
// Karma configuration
// Generated on Sat Mar 24 2018 19:17:19 GMT+0800 (中国标准时间)
process.env.PHANTOMJS_BIN = './node_modules/.bin/phantomjs';
module.exports = function(config) {
  config.set({

    basePath: '',

    plugins: ['karma-phantomjs-launcher'],


    // frameworks to use
    frameworks: ['jasmine'],


    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],


    exclude: [
    ],

    preprocessors: {
    },


    reporters: ['progress'],


    port: 9876,


    colors: true,


    logLevel: config.LOG_INFO,


    autoWatch: true,


    // start these browsers
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    concurrency: Infinity
  })
}
