'use strict';

function AudioContextService(options) {
    this._audioContext = options.audioContext;
    this.format = options.format;
    this.isSupported = options.isSupported;
    try {
        this._isSupportingPromises = (this._audioContext.decodeAudioData(new Uint8Array(1)) !== undefined);
    } catch (err) {
        this._isSupportingPromises = false;
    }
}

Object.defineProperty(AudioContextService.prototype, 'destination', {
    get: function () {
        return this._audioContext.destination;
    }
});

Object.defineProperty(AudioContextService.prototype, 'currentTime', {
    get: function () {
        return this._audioContext.currentTime;
    }
});

Object.defineProperty(AudioContextService.prototype, 'format', {
    writable: true
});

Object.defineProperty(AudioContextService.prototype, 'isSupported', {
    writable: true
});

AudioContextService.prototype.createBiquadFilter = function () {
    return this._audioContext.createBiquadFilter();
};

AudioContextService.prototype.createBuffer = function (numberOfChannels, length, sampleRate) {
    return this._audioContext.createBuffer(numberOfChannels, length, sampleRate);
};

AudioContextService.prototype.createBufferSource = function () {
    var bufferSource = this._audioContext.createBufferSource();

    if (!bufferSource.start) {
        bufferSource.start = function (when, offset, duration) {
            if (offset || duration) {
                bufferSource.noteGrainOn(when, offset, duration);
            } else {
                bufferSource.noteOn(when);
            }
        };
    }

    if (!bufferSource.stop) {
        bufferSource.stop = bufferSource.noteOff;
    }

    return bufferSource;
};

AudioContextService.prototype.createGain = function () {
    return this._audioContext.createGain();
};

AudioContextService.prototype.decodeAudioData = function (audioData) {
    var _audioContext = this._audioContext;

    if (this._isSupportingPromises) {
        return _audioContext.decodeAudioData(audioData);
    }

    return new Promise (function (resolve, reject) {
        _audioContext.decodeAudioData(audioData, resolve, reject);
    });
};

module.exports = AudioContextService;
