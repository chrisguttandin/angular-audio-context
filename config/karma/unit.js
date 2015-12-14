'use strict';

var browserify = require('../../package.json').browserify;

module.exports = function (config) {

    var configuration = {

            basePath: '../../',

            browserify: {
                transform: browserify.transform
            },

            files: [
                'node_modules/angular/angular.js',
                'node_modules/angular-mocks/angular-mocks.js',
                'src/module.js',
                'test/unit/**/*.js'
            ],

            frameworks: [
                'browserify',
                'mocha',
                'sinon-chai' // implicitly uses chai too
            ],

            preprocessors: {
                'src/module.js': 'browserify',
                'test/unit/**/*.js': 'browserify'
            }

        };

    if (process.env.TRAVIS) {
        configuration.browsers = [
            'ChromeCanarySauceLabs',
            'ChromeSauceLabs',
            'FirefoxDeveloperSauceLabs',
            'FirefoxSauceLabs'
        ];

        configuration.captureTimeout = 120000;

        configuration.customLaunchers = {
            ChromeCanarySauceLabs: {
                base: 'SauceLabs',
                browserName: 'chrome',
                platform: 'OS X 10.10',
                version: 'dev'
            },
            ChromeSauceLabs: {
                base: 'SauceLabs',
                browserName: 'chrome',
                platform: 'OS X 10.10'
            },
            FirefoxDeveloperSauceLabs: {
                base: 'SauceLabs',
                browserName: 'firefox',
                platform: 'OS X 10.10',
                version: 'dev'
            },
            FirefoxSauceLabs: {
                base: 'SauceLabs',
                browserName: 'firefox',
                platform: 'OS X 10.10'
            }
        };

        configuration.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
    } else {
        configuration.browsers = [
            'Chrome',
            'ChromeCanary',
            'Firefox',
            'FirefoxDeveloper'
        ];
    }

    config.set(configuration);

};
