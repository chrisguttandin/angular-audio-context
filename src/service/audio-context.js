'use strict';

function patchBuffer(buffer) {
    if (buffer.copyFromChannel === undefined) {
        // @todo throw errors
        buffer.copyFromChannel = function (destination, channelNumber, startInChannel) {
            var channelData,
                channelLength,
                destinationLength,
                i;

            if (arguments.length < 3) {
                startInChannel = 0
            }

            channelData = buffer.getChannelData(channelNumber);
            channelLength = channelData.length;
            destinationLength = destination.length;

            for (i = 0; i + startInChannel < channelLength && i < destinationLength; i += 1) {
                destination[i] = channelData[i + startInChannel];
            }
        };
    }

    if (buffer.copyToChannel === undefined) {
        // @todo throw errors
        buffer.copyToChannel = function (source, channelNumber, startInChannel) {
            var channelData,
                channelLength,
                i,
                sourceLength;

            if (arguments.length < 3) {
                startInChannel = 0
            }

            channelData = buffer.getChannelData(channelNumber);
            channelLength = channelData.length;
            sourceLength = source.length;

            for (i = 0; i + startInChannel < channelLength && i < sourceLength; i += 1) {
                channelData[i + startInChannel] = source[i];
            }
        };
    }

    return buffer;
}

function AudioContextService(options) {
    this._audioContext = options.audioContext;
    this.format = options.format;
    this.isSupported = options.isSupported;
    try {
        this._isSupportingPromises = (this._audioContext.decodeAudioData(new ArrayBuffer(0), function () {}) !== undefined);
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
    return patchBuffer(this._audioContext.createBuffer(numberOfChannels, length, sampleRate));
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
        return _audioContext.decodeAudioData(audioData)
            .then(function (audioBuffer) {
                return Promise.resolve(patchBuffer(audioBuffer));
            });
    }

    return new Promise (function (resolve, reject) {
        _audioContext.decodeAudioData(audioData, function (audioBuffer) {
            resolve(patchBuffer(audioBuffer));
        }, reject);
    });
};

module.exports = AudioContextService;
