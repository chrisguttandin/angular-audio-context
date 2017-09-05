import { AudioContext, IAudioContextOptions } from 'standardized-audio-context';

export function audioContextFactory (latencyHint: IAudioContextOptions['latencyHint']) {
    return new AudioContext({ latencyHint });
}
