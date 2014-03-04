'use strict';

if (typeof angular === 'undefined') {
    require('angular/angular');
}

var AudioContextServiceProvider = require('./provider/audio-context.js');

module.exports = angular
    .module('chrisguttandin.audioContext', [])
    .provider('audioContextService', AudioContextServiceProvider);
