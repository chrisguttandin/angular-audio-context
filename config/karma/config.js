const { join } = require('path');
const { env } = require('process');

module.exports = (config) => {
    config.set({
        basePath: '../../',

        browserDisconnectTimeout: 100000,

        browserNoActivityTimeout: 100000,

        client: {
            clearContext: false
        },

        coverageReporter: {
            dir: join(__dirname, '../../coverage/angular-audio-context'),
            reporters: [{ type: 'html' }, { type: 'text-summary' }],
            subdir: '.'
        },

        frameworks: ['@angular-devkit/build-angular', 'jasmine'],

        plugins: ['@angular-devkit/build-angular/plugins/karma', 'karma-*'],

        reporters: ['progress', 'kjhtml'],

        restartOnFileChange: true
    });

    if (env.CI) {
        config.set({
            browsers: ['ChromeSauceLabs', 'FirefoxSauceLabs', 'SafariSauceLabs'],

            captureTimeout: 300000,

            customLaunchers: {
                ChromeSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'chrome',
                    captureTimeout: 300,
                    platform: 'macOS 11.00'
                },
                FirefoxSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'firefox',
                    captureTimeout: 300,
                    platform: 'macOS 11.00'
                },
                SafariSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'safari',
                    captureTimeout: 300,
                    platform: 'macOS 11.00'
                }
            },

            sauceLabs: {
                recordVideo: false
            }
        });
    } else {
        config.set({
            browsers: ['ChromeCanaryHeadless', 'ChromeHeadless', 'FirefoxDeveloperHeadless', 'FirefoxHeadless', 'Safari']
        });
    }
};
