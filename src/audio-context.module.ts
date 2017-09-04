import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import {
    AudioContext,
    IAudioContext,
    IAudioContextOptions,
    isSupported as standardizedAudioContextModuleIsSupported
} from 'standardized-audio-context';

export { AudioContext, IAudioContext };

export function createAudioContextFactory (latencyHint: IAudioContextOptions['latencyHint']) {
    return function () {
        return new AudioContext({ latencyHint });
    };
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
        { provide: isSupported, useFactory: isSupportedFactory }
    ]
})
export class AudioContextModule {

    public static forRoot (latencyHint?: IAudioContextOptions['latencyHint']): ModuleWithProviders {
        return {
            ngModule: AudioContextModule,
            providers: [
                { provide: AudioContext, useFactory: createAudioContextFactory(latencyHint) }
            ]
        };
    }

    public static forChild (): ModuleWithProviders {
        return {
            ngModule: AudioContextModule
        };
    }

}
