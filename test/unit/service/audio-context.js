'use strict';

var loadFixture = require('../../helper/load-fixture.js');

describe('audioContextService', function () {

    var audioContextService,
        rootScope;

    beforeEach(angular.mock.module('chrisguttandin.audioContext'));

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
            }, 100);
        });

    });

    describe('decodeAudioData()', function () {

        it('should return a promise', function () {
            expect(audioContextService.decodeAudioData()).to.be.an.instanceOf(Promise);
        });

        it('should throw an error', function (done) {
            audioContextService
                .decodeAudioData()
                .catch(function (err) {
                    expect(err).to.not.be.null;

                    done();
                });
        });

        it('should decode an arrayBuffer', function (done) {
            loadFixture('1000-frames-of-noise.wav', function (err, arrayBuffer) {
                audioContextService
                    .decodeAudioData(arrayBuffer)
                    .then(function (audioBuffer) {
                        expect(audioBuffer.length).to.equal(1000);

                        done();
                    });
            });
        });

    });

});
