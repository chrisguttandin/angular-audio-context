'use strict';

var standardizedAudioContext = require('standardized-audio-context');

function AudioContextSupportService() {

    this.isSupported = function () {
        return standardizedAudioContext.isSupported;
    };

}

module.exports = AudioContextSupportService;
