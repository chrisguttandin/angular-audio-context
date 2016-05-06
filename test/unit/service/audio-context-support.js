'use strict';

describe('audioContextSupportService', function () {

    var audioContextSupportService;

    beforeEach(angular.mock.module('chrisguttandin.audioContext'));

    beforeEach(inject(function ($injector) {
        audioContextSupportService = $injector.get('audioContextSupportService');
    }));

    describe('isSupported', function () {

        it('should return an instance of a Promise', function () {
            expect(audioContextSupportService.isSupported()).to.be.an.instanceOf(Promise);
        });

    });

});
