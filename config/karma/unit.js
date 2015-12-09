'use strict';

var browserify = require('../../package.json').browserify;

module.exports = function (config) {

    config.set({

        basePath: '../../',

        browserify: {
            transform: browserify.transform
        },

        browsers: [
            'Chrome',
            'ChromeCanary',
            'Firefox',
            'FirefoxDeveloper'
        ],

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/module.js',
            {
                included: false,
                pattern: 'test/fixtures/**',
                served: true,
                watched: true,
            },
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

    });

};
