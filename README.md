angular-audio-context
=====================

An AngularJS wrapper for Web Audio API's AudioContext.

Besides being a wrapper this module also patches the deprecated and prefixed versions which are out
there. If you don't care about the AngularJS wrapper you might be interested in a similar attempt
which can be found here: https://github.com/cwilso/AudioContext-MonkeyPatch/

This module is intended to be used with browserify like this:

    var audioContext = require('angular-audio-context');

    angular
      .module('my-app', [audioContext.name])
      .controller('ExampleCtrl', ['audioContextService', function (audioContextService) {

        // do something with the audioContextService instance ...

    }]);

This module does not yet support all features specified by the W3C. Currently supported features are:

    readonly attribute AudioDestinationNode destination;
    readonly attribute double currentTime;

    AudioBufferSourceNode AudioContextService.createBufferSource();
    GainNode AudioContextService.createGain();
    void decodeAudioData(ArrayBuffer audioData,
                         DecodeSuccessCallback successCallback,
                         optional DecodeErrorCallback errorCallback);

The original specification can be found here: http://www.w3.org/TR/webaudio/

In addition to that the audioContextService provides an extra property called isSupported. It is a
boolean value that indicates if the currently used browser supports Web Audio API's AudioContext or
not. An example usage might look like this:

    angular
        .module('your-module', [])
        .config(function (audioContextServiceProvider) {
            $provide.constant('audioContextIsSupported', audioContextServiceProvider.isSupported);
        })
        .controller('YourController', ['audioContextIsSupported', function (audioContextIsSupported) {
            // use audioContextIsSupported here ...
        });

    <span data-ng-if="!audioContextIsSupported">Sorry AudioContext is not supported.</span>

In case you are missing a feature just fork or raise an issue.
