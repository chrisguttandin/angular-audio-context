import { Injector } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import {
    AudioContext as standardizedAudioContextAudioContext,
    IAudioContext,
    isSupported as standardizedAudioContextIsSupported
} from 'standardized-audio-context';
import { AudioContext, AudioContextModule, isSupported as audioContextModuleIsSupported } from '../../src/module';

describe('module', () => {
    describe('forRoot()', () => {
        let audioContext: IAudioContext;
        let isSupported: () => Promise<boolean>;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [AudioContextModule.forRoot('balanced')]
            });
        });

        beforeEach(inject([Injector], (injector: Injector) => {
            audioContext = injector.get<IAudioContext>(AudioContext);
            isSupported = injector.get<() => Promise<boolean>>(audioContextModuleIsSupported);
        }));

        it('should provide an instance of the AudioContext class from standardized-audio-context module', () => {
            expect(audioContext instanceof standardizedAudioContextAudioContext).toBe(true);
        });

        it('should provide the isSupported() function from standardized-audio-context module', () => {
            expect(isSupported).toBe(standardizedAudioContextIsSupported);
        });
    });

    describe('forChild()', () => {
        let isSupported: () => Promise<boolean>;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [AudioContextModule.forChild()]
            });
        });

        beforeEach(inject([Injector], (injector: Injector) => {
            isSupported = injector.get(audioContextModuleIsSupported);
        }));

        it('should provide the isSupported() function from standardized-audio-context module', () => {
            expect(isSupported).toBe(standardizedAudioContextIsSupported);
        });
    });
});
