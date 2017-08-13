import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { AudioContext, IAudioContext, isSupported as standardizedAudioContextModuleIsSupported } from 'standardized-audio-context';

export { AudioContext, IAudioContext };

export const isSupported = new InjectionToken<typeof standardizedAudioContextModuleIsSupported>('IS_SUPPORTED_PROMISE');

export function isSupportedFactory () {
    return standardizedAudioContextModuleIsSupported;
}

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AudioContext,
        { provide: isSupported, useFactory: isSupportedFactory }
    ]
})
export class AudioContextModule { }
