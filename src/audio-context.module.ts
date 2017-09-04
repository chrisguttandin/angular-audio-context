import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import {
    AudioContext,
    IAudioContext,
    IAudioContextOptions,
    isSupported as standardizedAudioContextModuleIsSupported
} from 'standardized-audio-context';

export { AudioContext, IAudioContext };

export function audioContextFactory (latencyHint: IAudioContextOptions['latencyHint']) {
    return new AudioContext({ latencyHint });
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
        const latencyHintToken = new InjectionToken<IAudioContextOptions['latencyHint']>('LATENCY_HINT');

        return {
            ngModule: AudioContextModule,
            providers: [
                { deps: [ latencyHintToken ], provide: AudioContext, useFactory: audioContextFactory },
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
