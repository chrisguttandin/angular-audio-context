import { Injector } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import {
    AudioContext as standardizedAudioContextAudioContext,
    isSupported as standardizedAudioContextIsSupported
} from 'standardized-audio-context';
import { AudioContext, AudioContextModule, isSupported as audioContextModuleIsSupported } from '../../src/module';

describe('module', () => {

    let audioContext;
    let isSupported;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AudioContextModule
            ]
        });
    });

    beforeEach(inject([ Injector ], (injector) => {
        audioContext = injector.get(AudioContext);
        isSupported = injector.get(audioContextModuleIsSupported);
    }));

    it('should provide an instance of the AudioContext class from standardized-audio-context module', () => {
        expect(audioContext instanceof standardizedAudioContextAudioContext).toBe(true);
    });

    it('should provide the isSupported Promise from standardized-audio-context module', () => {
        expect(isSupported).toBe(standardizedAudioContextIsSupported);
    });

});
