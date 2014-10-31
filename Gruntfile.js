'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            config: {
                options: {
                    jshintrc: 'config/jshint/config.json'
                },
                src: [
                    'config/**/*.js'
                ]
            },
            src: {
                options: {
                    jshintrc: 'config/jshint/src.json'
                },
                src: [
                    '*.js',
                    'src/**/*.js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'config/jshint/test.json'
                },
                src: [
                    'test/**/*.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('lint', [
        'jshint'
    ]);

};
