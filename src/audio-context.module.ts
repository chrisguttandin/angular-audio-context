import { NgModule, OpaqueToken } from '@angular/core';
import {
    AudioContext as StandardizedAudioContextAudioContext,
    IAudioContext,
    isSupported as standardizedAudioContextModuleIsSupported
} from 'standardized-audio-context';

export const AudioContext = new OpaqueToken('AUDIO_CONTEXT_CONSTRUCTOR'); // tslint:disable-line:variable-name

export function audioContextConstructorFactory (): IAudioContext {
    return new StandardizedAudioContextAudioContext();
}

export const isSupported = new OpaqueToken('IS_SUPPORTED_PROMISE');

export function isSupportedFactory () {
    return standardizedAudioContextModuleIsSupported;
}

@NgModule({
    providers: [
        { provide: AudioContext, useFactory: audioContextConstructorFactory },
        { provide: isSupported, useFactory: isSupportedFactory }
    ]
})
export class AudioContextModule { }
