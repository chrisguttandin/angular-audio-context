import { InjectionToken } from '@angular/core';
import { IAudioContextOptions } from 'standardized-audio-context';

export const latencyHintToken = new InjectionToken<IAudioContextOptions['latencyHint']>('LATENCY_HINT');
