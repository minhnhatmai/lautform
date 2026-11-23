import { GermanPhoneme } from '../models/phoneme.model';
import { NEUTRAL_REST_STATE } from './svg-posture-builder';
import { GERMAN_VOWELS_AND_DIPHTHONGS_DATA } from './german-vowels.data';
import { GERMAN_CONSONANTS_DATA } from './german-consonants.data';

export { NEUTRAL_REST_STATE };

/**
 * Toàn bộ 45 âm vị IPA chuẩn tiếng Đức (Standarddeutsch):
 * - 17 Nguyên âm đơn (Vokale)
 * - 3 Nguyên âm đôi (Diphthonge)
 * - 25 Phụ âm (Konsonanten: Plosive, Frikative, Affrikaten, Nasale, Approximanten)
 */
export const GERMAN_PHONEMES_DATA: GermanPhoneme[] = [
  ...GERMAN_VOWELS_AND_DIPHTHONGS_DATA,
  ...GERMAN_CONSONANTS_DATA
];
