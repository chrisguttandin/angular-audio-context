'use strict';

var angular = require('angular'),
    AudioContextServiceProvider = require('./provider/audio-context.js');

module.exports = angular
    .module('chrisguttandin.audioContext', [])
    .provider('audioContextService', AudioContextServiceProvider);
