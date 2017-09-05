import { isSupported as standardizedAudioContextModuleIsSupported } from 'standardized-audio-context';

export function isSupportedFactory () {
    return standardizedAudioContextModuleIsSupported;
}
