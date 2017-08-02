import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import {
    AudioContext as StandardizedAudioContextAudioContext,
    IAudioContext,
    IAudioContextConstructor,
    isSupported as standardizedAudioContextModuleIsSupported
} from 'standardized-audio-context';

export { IAudioContextConstructor };

export const AudioContext = new InjectionToken<typeof StandardizedAudioContextAudioContext>('AUDIO_CONTEXT_CONSTRUCTOR'); // tslint:disable-line:max-line-length variable-name

export function audioContextConstructorFactory (): IAudioContext {
    return new StandardizedAudioContextAudioContext();
}

export const isSupported = new InjectionToken<typeof standardizedAudioContextModuleIsSupported>('IS_SUPPORTED_PROMISE');

export function isSupportedFactory () {
    return standardizedAudioContextModuleIsSupported;
}

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        { provide: AudioContext, useFactory: audioContextConstructorFactory },
        { provide: isSupported, useFactory: isSupportedFactory }
    ]
})
export class AudioContextModule { }
