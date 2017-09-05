import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import {
    AudioContext,
    IAudioContext,
    IAudioContextOptions,
    isSupported as standardizedAudioContextModuleIsSupported
} from 'standardized-audio-context';

export { AudioContext, IAudioContext, IAudioContextOptions };

// @todo This export is only necessary for AoT.
export function _audioContextFactory (latencyHint: IAudioContextOptions['latencyHint']) {
    return new AudioContext({ latencyHint });
}

export const isSupported = new InjectionToken<typeof standardizedAudioContextModuleIsSupported>('IS_SUPPORTED_PROMISE');

// @todo This export is only necessary for AoT.
export function _isSupportedFactory () {
    return standardizedAudioContextModuleIsSupported;
}

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        { provide: isSupported, useFactory: _isSupportedFactory }
    ]
})
export class AudioContextModule {

    public static forRoot (latencyHint?: IAudioContextOptions['latencyHint']): ModuleWithProviders {
        const latencyHintToken = new InjectionToken<IAudioContextOptions['latencyHint']>('LATENCY_HINT');

        return {
            ngModule: AudioContextModule,
            providers: [
                { deps: [ latencyHintToken ], provide: AudioContext, useFactory: _audioContextFactory },
                { provide: latencyHintToken, useValue: latencyHint }
            ]
        };
    }

    public static forChild (): ModuleWithProviders {
        return {
            ngModule: AudioContextModule
        };
    }

}
