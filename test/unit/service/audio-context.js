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

    describe('destination', function () {

        it('should be an instance of AudioDestinationNode', function () {
            expect(audioContextService.destination).to.be.an.instanceOf(AudioDestinationNode);
        });

    });

    describe('createBuffer()', function () {

        it('should return an instance of AudioBuffer', function () {
            expect(audioContextService.createBuffer(2, 10, 44100)).to.be.an.instanceOf(AudioBuffer);
        });

        it('should return an audioBuffer with the given parameters', function () {
            var audioBuffer = audioContextService.createBuffer(2, 10, 44100);

            expect(audioBuffer.duration).to.equal(10 / 44100);
            expect(audioBuffer.length).to.equal(10);
            expect(audioBuffer.numberOfChannels).to.equal(2);
            expect(audioBuffer.sampleRate).to.equal(44100);
        });

        it('should support the copyFromChannel() method', function () {
            var audioBuffer = audioContextService.createBuffer(2, 10, 44100);

            expect(audioBuffer.copyFromChannel).to.be.a.function;
        });

        it('should support the copyToChannel() method', function () {
            var audioBuffer = audioContextService.createBuffer(2, 10, 44100);

            expect(audioBuffer.copyToChannel).to.be.a.function;
        });

        it('should implement the copyFromChannel()/copyToChannel() methods', function () {
            var audioBuffer,
                destination,
                i,
                source;

            audioBuffer = audioContextService.createBuffer(2, 10, 44100);
            destination = new Float32Array(10);
            source = new Float32Array(10);

            for (i = 0; i < 10; i += 1) {
                destination[i] = Math.random();
                source[i] = Math.random();
            }

            audioBuffer.copyToChannel(source, 0);
            audioBuffer.copyFromChannel(destination, 0);

            for (i = 0; i < 10; i += 1) {
                expect(destination[i]).to.equal(source[i]);
            }

            audioBuffer = audioContextService.createBuffer(2, 100, 44100);
            destination = new Float32Array(10);
            source = new Float32Array(10);

            for (i = 0; i < 10; i += 1) {
                destination[i] = Math.random();
                source[i] = Math.random();
            }

            audioBuffer.copyToChannel(source, 0, 50);
            audioBuffer.copyFromChannel(destination, 0, 50);

            for (i = 0; i < 10; i += 1) {
                expect(destination[i]).to.equal(source[i]);
            }
        });

    });

    describe('createChannelMerger()', function () {

        it('should return an instance of ChannelMergerNode', function () {
            expect(audioContextService.createChannelMerger(2)).to.be.an.instanceOf(ChannelMergerNode);
        });

        it('should return a channelMergerNode with the given parameters', function () {
            var channelMergerNode = audioContextService.createChannelMerger(2);

            expect(channelMergerNode.numberOfInputs).to.equal(2);
        });

    });

    describe('createChannelSplitter()', function () {

        it('should return an instance of ChannelSplitterNode', function () {
            expect(audioContextService.createChannelSplitter(2)).to.be.an.instanceOf(ChannelSplitterNode);
        });

        it('should return a channelSplitterNode with the given parameters', function () {
            var channelSplitterNode = audioContextService.createChannelSplitter(2);

            expect(channelSplitterNode.numberOfOutputs).to.equal(2);
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
