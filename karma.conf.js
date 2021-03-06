module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [
            './test/**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {
            "./test/**/*.spec.js": ["webpack"]
        },
        reporters: [ 'mocha' ],
        // webpack configuration
        webpack: require("./webpack.config.js"),
        webpackMiddleware: {
            //stats: "errors-only"
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeWithoutSecurity'],
        customLaunchers: {
            ChromeWithoutSecurity: {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        },
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
        concurrency: Infinity
    });
};
