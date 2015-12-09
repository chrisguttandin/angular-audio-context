'use strict';

var standardizedAudioContext = require('standardized-audio-context');

describe('audioContextService', function () {

    var audioContextService,
        rootScope;

    beforeEach(angular.mock.module('chrisguttandin.audioContext'));

    beforeEach(inject(function ($injector, $rootScope) {
        rootScope = $rootScope;

        audioContextService = $injector.get('audioContextService');
    }));

    it('should be a instance of AudioContext', function () {
        expect(audioContextService).to.be.an.instanceOf(standardizedAudioContext.AudioContext);
    });

});
