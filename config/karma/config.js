const { join } = require('path');
const { env } = require('process');

module.exports = (config) => {

    config.set({

        basePath: '../../',

        browserNoActivityTimeout: 300000,

        client: {
            clearContext: false
        },

        concurrency: 2,

        coverageIstanbulReporter: {
            dir: join(__dirname, '../../coverage'),
            fixWebpackSourcePaths: true,
            reports: [ 'html', 'lcovonly' ]
        },

        frameworks: [
            '@angular-devkit/build-angular',
            'jasmine'
        ],

        plugins: [
            '@angular-devkit/build-angular/plugins/karma',
            'karma-*'
        ],

        reporters: [ 'progress', 'kjhtml' ]

    });

    if (env.TRAVIS) {

        config.set({

            browsers: [
                /*
                 * @todo Enable all tests again.
                 * 'ChromeCanarySauceLabs',
                 */
                'ChromeSauceLabs'
                /*
                 * 'FirefoxDeveloperSauceLabs',
                 * 'FirefoxSauceLabs'
                 */
            ],

            captureTimeout: 120000,

            customLaunchers: {
                ChromeCanarySauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'chrome',
                    platform: 'OS X 10.11',
                    version: 'dev'
                },
                ChromeSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'chrome',
                    platform: 'OS X 10.11'
                },
                FirefoxDeveloperSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'firefox',
                    platform: 'OS X 10.11',
                    version: 'dev'
                },
                FirefoxSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'firefox',
                    platform: 'OS X 10.11'
                }
            },

            tunnelIdentifier: env.TRAVIS_JOB_NUMBER

        });

    } else {

        config.set({

            browsers: [
                'ChromeHeadless',
                'ChromeCanaryHeadless',
                'FirefoxHeadless',
                'FirefoxDeveloperHeadless'
            ]

        });

    }

};
