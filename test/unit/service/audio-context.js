'use strict';

describe('audioContextService', function () {

    var audioContextService,
        rootScope;

    beforeEach(module('chrisguttandin.audioContext'));

    beforeEach(inject(function ($injector, $rootScope) {
        rootScope = $rootScope;

        audioContextService = $injector.get('audioContextService');
    }));

    describe('destination', function () {

        it('should be an instance of AudioDestinationNode', function () {
            expect(audioContextService.destination).to.be.an.instanceOf(AudioDestinationNode);
        });

    });

    describe('currentTime', function () {

        it('should be a number', function () {
            expect(audioContextService.currentTime).to.be.a.number;
        });

        it('should advance over time', function (done) {
            var now = audioContextService.currentTime;

            setTimeout(function () {
                expect(audioContextService.currentTime).to.above(now);

                done();
            });
        });

    });

});
