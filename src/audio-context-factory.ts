import { AudioContext, IAudioContext, IAudioContextOptions } from 'standardized-audio-context';

export function audioContextFactory (latencyHint: IAudioContextOptions['latencyHint']): IAudioContext {
    return new AudioContext({ latencyHint });
}
