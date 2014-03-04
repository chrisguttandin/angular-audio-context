'use strict';

var AudioContextService = require('../service/audio-context.js')

function AudioContextServiceProvider() {
    var audioContext,
        format,
        isSupported;

    // it is not possible to use AngularJS' $window service, because it is not available for providers
    audioContext = (window.hasOwnProperty('AudioContext')) ?
        new window.AudioContext() :
        (window.hasOwnProperty('webkitAudioContext')) ?
            new window.webkitAudioContext() :
            null;

    format = null;

    isSupported = (audioContext !== null);

    if (isSupported) {
        // this assumes that every browser with an AudioContext has an Audio element, too
        format = !!(new window.Audio()).canPlayType('audio/ogg') ? 'ogg' : 'mp3';
    }

    this.isSupported = isSupported;

    this.$get = function($window) {
        return new AudioContextService({
            audioContext: audioContext,
            format: format,
            isSupported: isSupported
        });
    };
};

module.exports = AudioContextServiceProvider;
