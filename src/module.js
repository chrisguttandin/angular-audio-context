'use strict';

var angular = require('angular'),
    AudioContextService = require('./service/audio-context.js'),
    AudioContextSupportService = require('./service/audio-context-support.js');

module.exports = angular
    .module('chrisguttandin.audioContext', [])

    .service('audioContextService', AudioContextService)
    .service('audioContextSupportService', AudioContextSupportService);
