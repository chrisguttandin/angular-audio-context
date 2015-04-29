'use strict';

// If you use this module within your tests it can happen that you create a lot of AudioContexts.
// This might fail, depending on your browser. Chrome for example throws something like this:
// Failed to construct 'AudioContext': number of hardware contexts reached maximum (6). Therefore
// only one AudioContext is created by this module and cached internally.

var audioContext,
    AudioContextService = require('../service/audio-context.js'),
    // stolen from Modernizr
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/es6/promises.js
    isSupportingPromises = ('Promise' in window &&
        'resolve' in window.Promise &&
        'reject' in window.Promise &&
        'all' in window.Promise &&
        'race' in window.Promise &&
        (function() {
            var resolve;

            new window.Promise(function (r) {
                resolve = r;
            });

            return typeof resolve === 'function';
        }()));

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

    isSupported = (audioContext !== null) && isSupportingPromises;

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

    this.$get.$inject = ['$window'];
}

module.exports = AudioContextServiceProvider;
