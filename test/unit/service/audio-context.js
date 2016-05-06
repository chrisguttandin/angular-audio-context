'use strict';

var standardizedAudioContext = require('standardized-audio-context');

describe('audioContextService', function () {

    var audioContextService;

    beforeEach(angular.mock.module('chrisguttandin.audioContext'));

    beforeEach(inject(function ($injector) {
        audioContextService = $injector.get('audioContextService');
    }));

    it('should be an instance of a AudioContext', function () {
        expect(audioContextService).to.be.an.instanceOf(standardizedAudioContext.AudioContext);
    });

});
