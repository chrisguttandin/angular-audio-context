'use strict';

// If you use this module within yout tests it can happen that you create a lot of AudioContexts.
// This might fail, depending on your browser. Chrome for example throws something like this:
// Failed to construct 'AudioContext': number of hardware contexts reached maximum (6). Therefore
// only one AudioContext is created by this module and cached internally.

var audioContext,
    AudioContextService = require('../service/audio-context.js');

function AudioContextServiceProvider() {
    var format,
        isSupported;

    if (audioContext === undefined) {
        // It is not possible to use AngularJS' $window service here, because it is not available
        // for providers.
        audioContext = (window.hasOwnProperty('AudioContext')) ?
            new window.AudioContext() :
            (window.hasOwnProperty('webkitAudioContext')) ?
                new window.webkitAudioContext() :
                null;
    }

    isSupported = (audioContext !== null);

    if (isSupported) {
        // This assumes that every browser with an AudioContext has an Audio element, too.
        format = !!(new window.Audio()).canPlayType('audio/ogg') ? 'ogg' : 'mp3';
    } else {
        format = null;
    }

    this.isSupported = isSupported;

    this.$get = function ($window) {
        return new AudioContextService({
            audioContext: audioContext,
            format: format,
            isSupported: isSupported
        });
    };
}

module.exports = AudioContextServiceProvider;
