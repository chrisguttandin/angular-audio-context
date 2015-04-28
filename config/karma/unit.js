'use strict';

module.exports = function (config) {

    config.set({

        autoWatch: true,

        browserify: {
            watch: true
        },

        browsers: [
            'ChromeCanary',
            'Firefox'
        ],

        files: [
            '../../node_modules/angular/angular.js',
            '../../node_modules/angular-mocks/angular-mocks.js',
            '../../src/module.js',
            '../../test/**/*.js'
        ],

        frameworks: [
            'browserify',
            'mocha',
            'sinon-chai' // implicitly uses chai too
        ],

        preprocessors: {
            '../../src/module.js': [
                'browserify'
            ]
        },

        singleRun: false

    });

};
