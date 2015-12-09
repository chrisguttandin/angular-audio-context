'use strict';

var standardizedAudioContext = require('standardized-audio-context');

function AudioContextServiceProvider() {

    this.isSupported = standardizedAudioContext.isSupported;

    this.$get = function () {
        return new standardizedAudioContext.AudioContext();
    };

}

module.exports = AudioContextServiceProvider;
