import { isSupported as standardizedAudioContextModuleIsSupported } from 'standardized-audio-context';

export function isSupportedFactory (): () => Promise<boolean> {
    return standardizedAudioContextModuleIsSupported;
}
