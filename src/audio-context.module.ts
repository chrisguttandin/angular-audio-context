import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { IAudioContext, IAudioContextOptions, isSupported as standardizedAudioContextModuleIsSupported } from 'standardized-audio-context';
import { audioContextFactory } from './audio-context-factory';
import { AudioContextProxy } from './audio-context-proxy';
import { isSupportedFactory } from './is-supported-factory';
import { latencyHintToken } from './latency-hint-token';

export { AudioContextProxy as AudioContext, IAudioContext, IAudioContextOptions };

export const isSupported = new InjectionToken<typeof standardizedAudioContextModuleIsSupported>('IS_SUPPORTED_PROMISE');

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
                { deps: [ latencyHintToken ], provide: AudioContextProxy, useFactory: audioContextFactory },
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
