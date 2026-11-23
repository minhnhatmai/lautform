import type { PhonemeLocalizedContent } from './ui-translations.data';

export const PHONEME_TRANSLATIONS_EN: Record<string, PhonemeLocalizedContent> = {
  // === 1. VOWELS: FRONT ROUNDED ===
  ue_long: {
    subCategory: 'Close front rounded vowel (long)',
    graphemes: 'ü, üh, y',
    comparisonNote:
      'The tongue body arches high and far forward toward the hard palate exactly like /iː/ ("ee" in "see"), but the lips are tightly rounded and protruded forward.',
    wordMeanings: { über: 'over, above, across', Bühne: 'stage (theater)', fühlen: 'to feel, to sense' },
    articulationSteps: [
      'Step 1 (Set tongue for /iː/): Rest the tongue tip gently behind the lower front teeth and arch the front tongue body high toward the hard palate, just as when saying "ee".',
      'Step 2 (Round & protrude lips): Freeze your tongue in that high front /iː/ posture, then tightly round and push both lips forward as if whistling.',
      'Step 3 (Seal velum & voice): Keep the soft palate raised to block nasal air and vibrate the vocal folds steadily.'
    ],
    mistakes: [
      {
        confusedWith: 'Diphthong /wi/ or back vowel /uː/ ("oo")',
        mistakeDescription: 'Learners often pull the tongue backward into "oo" (/uː/) or unround the lips mid-vowel.',
        correctionTip: 'Sustain a clear "eeee..." (/iː/), lock your tongue completely still, and slowly round your lips into a small circle!'
      },
      {
        confusedWith: 'Unrounded /iː/ (pronouncing "über" as "iber")',
        mistakeDescription: 'Dropping lip rounding merges minimal pairs like "lügen" (to lie) and "liegen" (to lie down).',
        correctionTip: 'Enable comparison with /iː/: the tongue contour stays identical while the lips protrude far forward.'
      }
    ],
    organRoles: {
      lips: 'Tightly rounded and protruded forward to lengthen the front oral resonator.',
      'tongue-tip': 'Rests low behind the lower central incisors.',
      'tongue-blade': 'Rises steeply toward the anterior hard palate (identical to /iː/).',
      'tongue-dorsum': 'Arches high and forward beneath the hard palate.',
      'tongue-root': 'Advanced forward, widening the pharyngeal cavity.',
      'soft-palate': 'Raised firmly against the posterior pharyngeal wall to seal off the nasal cavity.',
      'hard-palate': 'Upper landmark for the narrow front vowel channel.',
      'vocal-cords': 'Adducted and vibrating steadily (~165 Hz).'
    }
  },
  ue_short: {
    subCategory: 'Near-close near-front rounded vowel (short, lax)',
    graphemes: 'ü, y',
    comparisonNote:
      'Compared with tense /yː/, short /ʏ/ lowers and retracts the tongue slightly toward the center while keeping lip rounding looser.',
    wordMeanings: { Hütte: 'hut, cabin', fünf: 'five (5)', Glück: 'luck, happiness' },
    articulationSteps: [
      'Step 1 (Relax tongue from /yː/): Keep the tongue tip behind lower teeth and lower the body slightly to the /ɪ/ height.',
      'Step 2 (Soft lip rounding): Round the lips moderately without tight tension.',
      'Step 3 (Keep it short): Produce a quick, crisp voiced sound.'
    ],
    mistakes: [
      {
        confusedWith: 'Long /yː/ or back /ʊ/',
        mistakeDescription: 'Holding the vowel too long confuses "Hütte" with "Hüte", or pulling the tongue back turns it into /ʊ/.',
        correctionTip: 'Set your tongue for short English "i" in "sit" (/ɪ/) and lightly round your lips.'
      }
    ],
    organRoles: {
      lips: 'Moderately rounded with a wider opening than /yː/.',
      'tongue-tip': 'Behind lower incisors.',
      'tongue-blade': 'Near-close height, slightly lower than /yː/.',
      'tongue-dorsum': 'Slightly centralized.',
      'tongue-root': 'Relaxed forward.',
      'soft-palate': 'Raised to close nasal passage.',
      'hard-palate': 'Wider palatal gap than /yː/.',
      'vocal-cords': 'Short steady vibration (~162 Hz).'
    }
  },
  oe_long: {
    subCategory: 'Close-mid front rounded vowel (long)',
    graphemes: 'ö, öh, oe',
    comparisonNote:
      'The tongue body sits in a mid-high front position identical to German /eː/, while both lips are rounded and protruded forward.',
    wordMeanings: { schön: 'beautiful, nice, lovely', hören: 'to hear, to listen', Öl: 'oil (cooking or crude)' },
    articulationSteps: [
      'Step 1 (Set tongue for /eː/): Keep tongue tip behind lower teeth and raise front tongue to a close-mid height.',
      'Step 2 (Round the lips): Hold the /eː/ tongue position steady and round both lips forward.',
      'Step 3 (Steady voicing): Sustain without gliding.'
    ],
    mistakes: [
      {
        confusedWith: 'Unrounded central vowel /ɜː/ ("bird")',
        mistakeDescription: 'Pulling the tongue back and flattening the lips makes "schön" sound dull.',
        correctionTip: 'Sustain German /eː/, keep the tongue forward, and shape your lips as if saying "oh".'
      }
    ],
    organRoles: {
      lips: 'Rounded and protruded with a medium vertical opening.',
      'tongue-tip': 'Rests gently behind lower incisors.',
      'tongue-blade': 'Raised to close-mid height.',
      'tongue-dorsum': 'Positioned mid-high and forward, matching /eː/.',
      'tongue-root': 'Slightly advanced.',
      'soft-palate': 'Raised to block nasal passage.',
      'hard-palate': 'Wider gap above tongue than /yː/.',
      'vocal-cords': 'Adducted and vibrating (~160 Hz).'
    }
  },
  oe_short: {
    subCategory: 'Open-mid front rounded vowel (short)',
    graphemes: 'ö',
    comparisonNote:
      'Opens the jaw wider and lowers the tongue compared with /øː/ (tongue of /ɛ/ combined with lip rounding).',
    wordMeanings: { Götter: 'gods', öffnen: 'to open', zwölf: 'twelve (12)' },
    articulationSteps: [
      'Step 1 (Set tongue for /ɛ/): Lower the jaw to an open-mid position.',
      'Step 2 (Open lip rounding): Keep lips clearly rounded without pinching.',
      'Step 3 (Short crisp release): End cleanly into the following consonant.'
    ],
    mistakes: [
      {
        confusedWith: 'Unrounded /ɛ/ or /ɜː/',
        mistakeDescription: 'Forgetting lip rounding flattens the vowel quality.',
        correctionTip: 'Round your lips before starting voice, then articulate a short /ɛ/.'
      }
    ],
    organRoles: {
      lips: 'Openly rounded without tight pucker.',
      'tongue-tip': 'Low behind lower teeth.',
      'tongue-blade': 'Open-mid height.',
      'tongue-dorsum': 'Lower than /øː/.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Wide front oral cavity.',
      'vocal-cords': 'Short vibration (~156 Hz).'
    }
  },

  // === 2. VOWELS: FRONT UNROUNDED ===
  i_long: {
    subCategory: 'Close front unrounded vowel (long, tense)',
    graphemes: 'i, ie, ih, ieh',
    comparisonNote:
      'Higher, tenser, and wider at the lip corners than lax short /ɪ/.',
    wordMeanings: { ihr: 'you (pl.) / her / their', Liebe: 'love', wir: 'we' },
    articulationSteps: [
      'Step 1 (Spread lips): Gently retract lip corners into a slight smile.',
      'Step 2 (Arch front tongue high): Push front dorsum close to hard palate.',
      'Step 3 (Sustain purely): Hold steady without dipping.'
    ],
    mistakes: [
      {
        confusedWith: 'Short /ɪ/ ("Miete" vs. "Mitte")',
        mistakeDescription: 'Too short duration blurs minimal pairs.',
        correctionTip: 'Keep corners tense and hold at least twice as long as /ɪ/.'
      }
    ],
    organRoles: {
      lips: 'Spread horizontally.',
      'tongue-tip': 'Behind lower incisors.',
      'tongue-blade': 'Arched steeply toward hard palate.',
      'tongue-dorsum': 'High and forward.',
      'tongue-root': 'Strongly advanced.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Very narrow palatal channel (F2 ~2250 Hz).',
      'vocal-cords': 'Voiced (~170 Hz).'
    }
  },
  i_short: {
    subCategory: 'Near-close near-front unrounded vowel (short, lax)',
    graphemes: 'i',
    comparisonNote:
      'Lower, more central, and relaxed compared with tense /iː/; lips remain completely unspread.',
    wordMeanings: { ich: 'I', Mitte: 'middle, center', Kind: 'child' },
    articulationSteps: [
      'Step 1 (Relax cheeks & lips): Do not pull mouth corners wide.',
      'Step 2 (Slightly lower tongue): Place slightly lower and more central than /iː/.',
      'Step 3 (Cut short): Transition immediately into the next consonant.'
    ],
    mistakes: [
      {
        confusedWith: 'Tense /iː/',
        mistakeDescription: 'Over-tensing lips makes "ich" or "Kind" sound unnatural.',
        correctionTip: 'Keep facial muscles completely relaxed and make the vowel brief.'
      }
    ],
    organRoles: {
      lips: 'Neutral and relaxed.',
      'tongue-tip': 'Behind lower teeth.',
      'tongue-blade': 'Near-close height.',
      'tongue-dorsum': 'Slightly centralized.',
      'tongue-root': 'Relaxed.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Wider gap than /iː/.',
      'vocal-cords': 'Short vibration (~165 Hz).'
    }
  },
  e_long: {
    subCategory: 'Close-mid front unrounded vowel (long, tense)',
    graphemes: 'e, ee, eh',
    comparisonNote:
      'Higher and closer than short /ɛ/; unlike English /eɪ/, it is a pure steady monophthong without an upward glide.',
    wordMeanings: { See: 'lake / sea', gehen: 'to go, to walk', leben: 'to live' },
    articulationSteps: [
      'Step 1 (Slight lip spread): Keep jaw relatively close.',
      'Step 2 (Close-mid front tongue): Position midway between /iː/ and /ɛ/.',
      'Step 3 (No glide): Keep jaw and tongue completely motionless.'
    ],
    mistakes: [
      {
        confusedWith: 'English diphthong /eɪ/ ("say")',
        mistakeDescription: 'Raising the tongue at the end turns German /eː/ into a diphthong.',
        correctionTip: 'Lock your jaw steady from start to finish.'
      }
    ],
    organRoles: {
      lips: 'Slightly spread.',
      'tongue-tip': 'Behind lower teeth.',
      'tongue-blade': 'Close-mid height.',
      'tongue-dorsum': 'Tense mid-front.',
      'tongue-root': 'Slightly advanced.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Mid front cavity.',
      'vocal-cords': 'Steady voicing (~162 Hz).'
    }
  },
  e_short: {
    subCategory: 'Open-mid front unrounded vowel (short)',
    graphemes: 'e, ä',
    comparisonNote:
      'Lower tongue and wider jaw opening than /eː/, identical to English "e" in "bed".',
    wordMeanings: { Bett: 'bed', Männer: 'men', sprechen: 'to speak' },
    articulationSteps: [
      'Step 1 (Drop jaw slightly): Open jaw more than for /eː/.',
      'Step 2 (Front open-mid tongue): Keep tongue relaxed in front-mid position.',
      'Step 3 (Short crisp duration).'
    ],
    mistakes: [
      {
        confusedWith: 'Close-mid /eː/',
        mistakeDescription: 'Not opening the jaw enough confuses "Betten" and "beten".',
        correctionTip: 'Lower your chin visibly and keep the vowel short.'
      }
    ],
    organRoles: {
      lips: 'Naturally open.',
      'tongue-tip': 'Low behind lower incisors.',
      'tongue-blade': 'Open-mid height.',
      'tongue-dorsum': 'Front-mid relaxed.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Wider palatal distance.',
      'vocal-cords': 'Short vibration (~158 Hz).'
    }
  },
  ae_long: {
    subCategory: 'Open-mid front unrounded vowel (long)',
    graphemes: 'ä, äh',
    comparisonNote:
      'Shares the long duration of /eː/ but keeps the wide open jaw and low tongue posture of /ɛ/.',
    wordMeanings: { Käse: 'cheese', Mädchen: 'girl', wählen: 'to choose, to vote' },
    articulationSteps: [
      'Step 1 (Open jaw as for /ɛ/): Lower the chin clearly.',
      'Step 2 (Keep tongue low front): Do not raise toward /eː/.',
      'Step 3 (Hold long and steady).'
    ],
    mistakes: [
      {
        confusedWith: 'Merging into /eː/',
        mistakeDescription: 'Closing the jaw turns /ɛː/ into /eː/.',
        correctionTip: 'Drop your jaw noticeably lower than in "See".'
      }
    ],
    organRoles: {
      lips: 'Open, unrounded.',
      'tongue-tip': 'Behind lower teeth.',
      'tongue-blade': 'Low front.',
      'tongue-dorsum': 'Lowered open-mid.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Wide resonance chamber.',
      'vocal-cords': 'Sustained voicing (~156 Hz).'
    }
  },

  // === 3. VOWELS: CENTRAL & OPEN ===
  schwa: {
    subCategory: 'Unstressed mid central vowel (Schwa)',
    graphemes: 'e (unstressed syllables)',
    comparisonNote:
      'Positioned dead-center in the mouth (higher than vocalized-R /ɐ/); used in unstressed "-e" endings.',
    wordMeanings: { bitte: 'please / you are welcome', Name: 'name', gesehen: 'seen' },
    articulationSteps: [
      'Step 1 (Relax face & jaw completely).',
      'Step 2 (Center tongue): Neither front nor back.',
      'Step 3 (Voice very briefly and softly).'
    ],
    mistakes: [
      {
        confusedWith: 'Over-stressing unstressed "-e"',
        mistakeDescription: 'Pronouncing final "-e" too loudly or like /ɛ/.',
        correctionTip: 'Keep the final syllable soft, brief, and completely relaxed.'
      }
    ],
    organRoles: {
      lips: 'Completely neutral.',
      'tongue-tip': 'Resting on mouth floor.',
      'tongue-blade': 'Neutral mid height.',
      'tongue-dorsum': 'Dead-center in the vocal tract.',
      'tongue-root': 'Balanced.',
      'soft-palate': 'Closed.',
      'hard-palate': 'No constriction.',
      'vocal-cords': 'Brief soft voicing (~152 Hz).'
    }
  },
  tiefschwa: {
    subCategory: 'Near-open central vowel (Tiefschwa / vocalized R)',
    graphemes: '-er, r (after long vowels)',
    comparisonNote:
      'Lower and more open than /ə/, sounding like a relaxed short "a" — the standard German pronunciation of "-er".',
    wordMeanings: { Vater: 'father', Wasser: 'water', Bruder: 'brother' },
    articulationSteps: [
      'Step 1 (Open jaw slightly wider than /ə/).',
      'Step 2 (Keep tongue tip flat down): NEVER curl the tongue tip up like English "r"!',
      'Step 3 (Relaxed "a"-like central sound).'
    ],
    mistakes: [
      {
        confusedWith: 'Retroflex English /ɹ/ ("Vater" with a curled R)',
        mistakeDescription: 'Curling the tongue tip upward at the end of "-er" sounds strongly non-native.',
        correctionTip: 'Anchor your tongue tip behind your bottom teeth and relax into a soft central vowel.'
      }
    ],
    organRoles: {
      lips: 'Relaxed and slightly open.',
      'tongue-tip': 'Flat behind bottom teeth (NO curling!).',
      'tongue-blade': 'Low.',
      'tongue-dorsum': 'Near-open central.',
      'tongue-root': 'Slightly back.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Open oral space.',
      'vocal-cords': 'Voiced (~150 Hz).'
    }
  },
  a_long: {
    subCategory: 'Open central-back unrounded vowel (long)',
    graphemes: 'a, aa, ah',
    comparisonNote:
      'Longer and slightly deeper/darker than short bright /a/.',
    wordMeanings: { Tag: 'day', Bahn: 'railway / track', Staat: 'state, nation' },
    articulationSteps: [
      'Step 1 (Open jaw wide): Drop the lower jaw fully.',
      'Step 2 (Flatten tongue low): Spread tongue flat on the floor of the mouth.',
      'Step 3 (Sustain clearly).'
    ],
    mistakes: [
      {
        confusedWith: 'Short /a/ ("Staat" vs. "Stadt")',
        mistakeDescription: 'Clipping the vowel too short merges long/short minimal pairs.',
        correctionTip: 'Drop the chin wide and hold at least twice as long.'
      }
    ],
    organRoles: {
      lips: 'Wide open, unrounded.',
      'tongue-tip': 'Flat behind lower teeth.',
      'tongue-blade': 'Maximally lowered.',
      'tongue-dorsum': 'Low and slightly retracted.',
      'tongue-root': 'Slightly back.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Widest oral opening (F1 ~750 Hz).',
      'vocal-cords': 'Strong steady vibration (~154 Hz).'
    }
  },
  a_short: {
    subCategory: 'Open central unrounded vowel (short, bright)',
    graphemes: 'a',
    comparisonNote:
      'Slightly brighter/more central than /aː/ and cut short into the following consonant.',
    wordMeanings: { Mann: 'man', Stadt: 'city', Hand: 'hand' },
    articulationSteps: [
      'Step 1 (Open jaw moderately wide).',
      'Step 2 (Flat central tongue): Keep bright and crisp.',
      'Step 3 (Release briefly into following consonant).'
    ],
    mistakes: [
      {
        confusedWith: 'Long /aː/ ("Kamm" vs. "kam")',
        mistakeDescription: 'Over-lengthening changes word meaning.',
        correctionTip: 'Keep the sound bright and clip it cleanly.'
      }
    ],
    organRoles: {
      lips: 'Open, unrounded.',
      'tongue-tip': 'Low behind teeth.',
      'tongue-blade': 'Lowered.',
      'tongue-dorsum': 'Open central.',
      'tongue-root': 'Relaxed.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Wide oral cavity.',
      'vocal-cords': 'Short vibration (~156 Hz).'
    }
  },

  // === 4. VOWELS: BACK ROUNDED ===
  u_long: {
    subCategory: 'Close back rounded vowel (long, tense)',
    graphemes: 'u, uh',
    comparisonNote:
      'Shares the tight lip rounding of /yː/, but pulls the entire tongue body back toward the soft palate.',
    wordMeanings: { Buch: 'book', Uhr: 'clock / o’clock', gut: 'good' },
    articulationSteps: [
      'Step 1 (Retract and arch tongue back): Lift posterior dorsum toward soft palate.',
      'Step 2 (Tightly round and protrude lips).',
      'Step 3 (Sustain deep voiced tone).'
    ],
    mistakes: [
      {
        confusedWith: 'Short lax /ʊ/ or flat lips',
        mistakeDescription: 'Weak lip rounding makes /uː/ sound flat or too short.',
        correctionTip: 'Purse lips tightly like /yː/, while keeping the tongue bunched in the back.'
      }
    ],
    organRoles: {
      lips: 'Tightly rounded and protruded.',
      'tongue-tip': 'Pulled back from lower teeth.',
      'tongue-blade': 'Lowered.',
      'tongue-dorsum': 'Arched high toward soft palate.',
      'tongue-root': 'Retracted.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Large front oral cavity.',
      'vocal-cords': 'Deep steady voicing (~150 Hz).'
    }
  },
  u_short: {
    subCategory: 'Near-close near-back rounded vowel (short, lax)',
    graphemes: 'u',
    comparisonNote:
      'Lower, more central, and looser lip rounding than tense /uː/.',
    wordMeanings: { Hund: 'dog', Mutter: 'mother', und: 'and' },
    articulationSteps: [
      'Step 1 (Relaxed high-back tongue): Slightly lower and forward from /uː/.',
      'Step 2 (Gentle lip rounding).',
      'Step 3 (Short duration).'
    ],
    mistakes: [
      {
        confusedWith: 'Tense /uː/ ("Muss" vs. "Mus")',
        mistakeDescription: 'Over-tensing lips turns short /ʊ/ into /uː/.',
        correctionTip: 'Relax the lips and pronounce it briefly like English "oo" in "book".'
      }
    ],
    organRoles: {
      lips: 'Loosely rounded.',
      'tongue-tip': 'Slightly retracted.',
      'tongue-blade': 'Low.',
      'tongue-dorsum': 'Lower and more central than /uː/.',
      'tongue-root': 'Relaxed.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Wide front space.',
      'vocal-cords': 'Short vibration (~152 Hz).'
    }
  },
  o_long: {
    subCategory: 'Close-mid back rounded vowel (long, tense)',
    graphemes: 'o, oo, oh',
    comparisonNote:
      'Closer and tighter than /ɔ/; unlike English /oʊ/, it stays completely steady without gliding.',
    wordMeanings: { rot: 'red', Sohn: 'son', Boot: 'boat' },
    articulationSteps: [
      'Step 1 (Round lips into a neat circle).',
      'Step 2 (Raise back tongue to close-mid height).',
      'Step 3 (Hold pure and steady without gliding to /ʊ/).'
    ],
    mistakes: [
      {
        confusedWith: 'English diphthong /oʊ/ ("boat")',
        mistakeDescription: 'Closing the lips further at the end creates a glide.',
        correctionTip: 'Keep your lip circle completely frozen throughout the vowel.'
      }
    ],
    organRoles: {
      lips: 'Firmly rounded and slightly protruded.',
      'tongue-tip': 'Slightly retracted.',
      'tongue-blade': 'Low.',
      'tongue-dorsum': 'Close-mid back.',
      'tongue-root': 'Retracted.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Open front cavity.',
      'vocal-cords': 'Steady voicing (~148 Hz).'
    }
  },
  o_short: {
    subCategory: 'Open-mid back rounded vowel (short)',
    graphemes: 'o',
    comparisonNote:
      'Wider jaw drop and lower back tongue posture than /oː/.',
    wordMeanings: { Gott: 'God', Kopf: 'head', offen: 'open' },
    articulationSteps: [
      'Step 1 (Drop jaw to open-mid position with open rounding).',
      'Step 2 (Lower back tongue).',
      'Step 3 (Short crisp finish).'
    ],
    mistakes: [
      {
        confusedWith: 'Close-mid /oː/ ("offen" vs. "Ofen")',
        mistakeDescription: 'Not dropping the jaw makes /ɔ/ sound like /oː/.',
        correctionTip: 'Drop the chin clearly and clip the vowel short.'
      }
    ],
    organRoles: {
      lips: 'Openly rounded.',
      'tongue-tip': 'Low and back.',
      'tongue-blade': 'Low.',
      'tongue-dorsum': 'Open-mid back.',
      'tongue-root': 'Slightly back.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Wide oral cavity.',
      'vocal-cords': 'Short vibration (~150 Hz).'
    }
  },

  // === 5. DIPHTHONGS ===
  ai_diphthong: {
    subCategory: 'Falling diphthong [aɪ̯] (open to front near-close)',
    graphemes: 'ei, ai, ey, ay',
    comparisonNote: 'Starts with low open /a/ and glides rapidly up toward /ɪ/.',
    wordMeanings: { eins: 'one (1)', mein: 'my, mine', Zeit: 'time' },
    articulationSteps: [
      'Step 1 (Open jaw for /a/).',
      'Step 2 (Glide front tongue upward toward /ɪ/).',
      'Step 3 (Continuous smooth voicing).'
    ],
    mistakes: [
      {
        confusedWith: 'Reading "ei" as /eɪ/',
        mistakeDescription: 'Starting with the tongue too high when seeing "ei".',
        correctionTip: 'German "ei" always sounds like "eye" (/aɪ̯/), while "ie" sounds like "ee" (/iː/).'
      }
    ],
    organRoles: {
      lips: 'Open at start, narrowing slightly at end.',
      'tongue-tip': 'Behind lower incisors.',
      'tongue-blade': 'Rises steeply in second half.',
      'tongue-dorsum': 'Glides from low central to high front.',
      'tongue-root': 'Advances forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Guides upward glide.',
      'vocal-cords': 'Continuously voiced (~162 Hz).'
    }
  },
  au_diphthong: {
    subCategory: 'Falling diphthong [aʊ̯] (open to back rounded)',
    graphemes: 'au',
    comparisonNote: 'Glides from wide open /a/ backward and upward into rounded /ʊ/.',
    wordMeanings: { Haus: 'house', Auto: 'car', Frau: 'woman / Mrs.' },
    articulationSteps: [
      'Step 1 (Start with wide open /a/).',
      'Step 2 (Retract tongue toward /ʊ/ while rounding lips).'
    ],
    mistakes: [
      {
        confusedWith: 'Unrounded finish',
        mistakeDescription: 'Failing to round lips at the end flattens "Haus".',
        correctionTip: 'Visibly round your lips into a small circle at the end.'
      }
    ],
    organRoles: {
      lips: 'Wide open at start, rounding firmly at end.',
      'tongue-tip': 'Retracts slightly.',
      'tongue-blade': 'Low.',
      'tongue-dorsum': 'Glides from low central to high back.',
      'tongue-root': 'Moves slightly back.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Open front cavity.',
      'vocal-cords': 'Continuously voiced (~156 Hz).'
    }
  },
  oy_diphthong: {
    subCategory: 'Falling diphthong [ɔʏ̯] (back rounded to front rounded)',
    graphemes: 'eu, äu',
    comparisonNote: 'Glides smoothly from back rounded /ɔ/ forward and upward to front rounded /ʏ/.',
    wordMeanings: { Deutsch: 'German (language)', heute: 'today', Bäume: 'trees' },
    articulationSteps: [
      'Step 1 (Start at /ɔ/ with rounded lips).',
      'Step 2 (Glide tongue forward to /ʏ/ while keeping lips rounded).'
    ],
    mistakes: [
      {
        confusedWith: 'Spreading lips into flat /ɪ/',
        mistakeDescription: 'Flattening lip corners makes the end too bright.',
        correctionTip: 'Maintain gentle lip rounding all the way through the glide.'
      }
    ],
    organRoles: {
      lips: 'Remain rounded throughout the glide.',
      'tongue-tip': 'Advances behind lower teeth.',
      'tongue-blade': 'Rises during second half.',
      'tongue-dorsum': 'Glides from mid-back to high-front.',
      'tongue-root': 'Moves forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Target for rising blade.',
      'vocal-cords': 'Continuously voiced (~158 Hz).'
    }
  },

  // === 6. CONSONANTS: PLOSIVES ===
  p_voiceless: {
    subCategory: 'Voiceless bilabial plosive (aspirated [pʰ])',
    graphemes: 'p, pp, b (syllable-final)',
    comparisonNote: 'Same bilabial closure as /b/, but voiceless with a strong burst of aspiration [pʰ] on release.',
    wordMeanings: { Pass: 'passport', Papa: 'dad', Suppe: 'soup' },
    articulationSteps: [
      'Step 1 (Press lips tightly shut to build oral pressure).',
      'Step 2 (Keep vocal folds open — voiceless).',
      'Step 3 (Burst lips open with strong puff of air [pʰ]).'
    ],
    mistakes: [
      {
        confusedWith: 'Unaspirated /p/ (sounds like /b/)',
        mistakeDescription: 'Weak aspiration causes "Pass" to sound like "Bass".',
        correctionTip: 'Use the Paper Test: release must blow the paper strip visibly.'
      }
    ],
    organRoles: {
      lips: 'Seal tightly (30–50%), then burst open forcefully.',
      'tongue-tip': 'Neutral.',
      'tongue-blade': 'Neutral.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Raised to trap air pressure.',
      'hard-palate': 'Not involved.',
      'vocal-cords': 'Open (voiceless).'
    }
  },
  b_voiced: {
    subCategory: 'Voiced bilabial plosive',
    graphemes: 'b, bb',
    comparisonNote: 'Same bilabial closure as /p/, but voiced and unaspirated on release.',
    wordMeanings: { Buch: 'book', Brot: 'bread', abends: 'in the evening' },
    articulationSteps: [
      'Step 1 (Close lips gently).',
      'Step 2 (Vibrate vocal folds during closure).',
      'Step 3 (Release smoothly without heavy aspiration).'
    ],
    mistakes: [
      {
        confusedWith: 'Voicing final "b" (Auslautverhärtung)',
        mistakeDescription: 'Syllable-final "b" ("ab", "gelb") is always devoiced to /p/.',
        correctionTip: 'Voice /b/ only in syllable onsets before vowels/sonorants.'
      }
    ],
    organRoles: {
      lips: 'Gentle seal and smooth unaspirated release.',
      'tongue-tip': 'Neutral.',
      'tongue-blade': 'Neutral.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Not involved.',
      'vocal-cords': 'Adducted and vibrating (~140 Hz).'
    }
  },
  t_voiceless: {
    subCategory: 'Voiceless alveolar plosive (aspirated [tʰ])',
    graphemes: 't, tt, th, dt, d (syllable-final)',
    comparisonNote: 'Alveolar closure like /d/, but voiceless with strong aspiration [tʰ].',
    wordMeanings: { Tag: 'day', Tisch: 'table', Mutter: 'mother' },
    articulationSteps: [
      'Step 1 (Seal tongue tip firmly against upper alveolar ridge).',
      'Step 2 (Build pressure with open glottis).',
      'Step 3 (Release forcefully with puff of air [tʰ]).'
    ],
    mistakes: [
      {
        confusedWith: 'Unaspirated dental /t/',
        mistakeDescription: 'Without aspiration, initial "t" sounds like /d/.',
        correctionTip: 'Place tip cleanly on the alveolar ridge and release with strong breath.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Seals tightly on alveolar ridge, then releases rapidly.',
      'tongue-blade': 'Supports alveolar seal.',
      'tongue-dorsum': 'Slightly raised.',
      'tongue-root': 'Slightly forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Alveolar ridge acts as stop contact.',
      'vocal-cords': 'Wide open (voiceless).'
    }
  },
  d_voiced: {
    subCategory: 'Voiced alveolar plosive',
    graphemes: 'd, dd',
    comparisonNote: 'Alveolar stop like /t/, but voiced and unaspirated.',
    wordMeanings: { Deutsch: 'German', danke: 'thank you', Bruder: 'brother' },
    articulationSteps: [
      'Step 1 (Touch tongue tip to alveolar ridge).',
      'Step 2 (Engage vocal fold vibration).',
      'Step 3 (Release smoothly without puff).'
    ],
    mistakes: [
      {
        confusedWith: 'Implosive /ɗ/ or forgetting final devoicing ("Hund")',
        mistakeDescription: 'Final "d" in German is pronounced /t/.',
        correctionTip: 'Touch alveolar ridge lightly; always devoice final "d" to /t/.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Light alveolar seal.',
      'tongue-blade': 'Slightly lifted.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Slightly forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Alveolar ridge.',
      'vocal-cords': 'Voiced (~145 Hz).'
    }
  },
  k_voiceless: {
    subCategory: 'Voiceless velar plosive (aspirated [kʰ])',
    graphemes: 'k, ck, g (syllable-final), ch (before s)',
    comparisonNote: 'Velar closure like /ɡ/, but voiceless with strong aspiration [kʰ].',
    wordMeanings: { Kind: 'child', Kaffee: 'coffee', Musik: 'music' },
    articulationSteps: [
      'Step 1 (Press back of tongue firmly against soft palate).',
      'Step 2 (Trap air with open glottis).',
      'Step 3 (Release with audible puff [kʰ]).'
    ],
    mistakes: [
      {
        confusedWith: 'Unaspirated /k/',
        mistakeDescription: 'Weak aspiration blurs "k" and "g" in initial position.',
        correctionTip: 'Add a clear breath puff after releasing "Kind" or "Kaffee".'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Low behind bottom teeth.',
      'tongue-blade': 'Low.',
      'tongue-dorsum': 'Seals firmly against soft palate, then drops briskly.',
      'tongue-root': 'Lifts back of tongue.',
      'soft-palate': 'Closure site and nasal seal.',
      'hard-palate': 'Not involved.',
      'vocal-cords': 'Open (voiceless).'
    }
  },
  g_voiced: {
    subCategory: 'Voiced velar plosive',
    graphemes: 'g, gg',
    comparisonNote: 'Same velar closure as /k/, but voiced and unaspirated.',
    wordMeanings: { gut: 'good', gehen: 'to go', Auge: 'eye' },
    articulationSteps: [
      'Step 1 (Touch back of tongue to soft palate).',
      'Step 2 (Engage vocal fold vibration).',
      'Step 3 (Release softly).'
    ],
    mistakes: [
      {
        confusedWith: 'Fricative /ɣ/ or failing to devoice final "-g" ("Tag")',
        mistakeDescription: 'Final "-g" is pronounced /k/ (except "-ig" = /ɪç/).',
        correctionTip: 'Make a full stop contact; devoice final "-g" to /k/.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Low.',
      'tongue-blade': 'Low.',
      'tongue-dorsum': 'Touches soft palate cleanly and drops smoothly.',
      'tongue-root': 'Slightly back.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Not involved.',
      'vocal-cords': 'Voiced (~140 Hz).'
    }
  },
  glottal_stop: {
    subCategory: 'Voiceless glottal plosive (Knacklaut)',
    graphemes: '(before any initial vowel)',
    comparisonNote:
      'Complete glottal closure before vowel onset — the opposite of wide-open /h/.',
    wordMeanings: { Apfel: 'apple', Einheit: 'unity / unit', beachten: 'to pay attention to' },
    articulationSteps: [
      'Step 1 (Close vocal folds tightly for ~50ms).',
      'Step 2 (Pre-shape mouth for upcoming vowel).',
      'Step 3 (Pop glottis open cleanly at vowel onset).'
    ],
    mistakes: [
      {
        confusedWith: 'Slurring words together (English-style liaison)',
        mistakeDescription: 'Blending "ein Apfel" or "be-achten" removes the crisp German separation.',
        correctionTip: 'Always add a tiny glottal catch before stressed initial vowels.'
      }
    ],
    organRoles: {
      lips: 'Pre-shaped for following vowel.',
      'tongue-tip': 'Neutral.',
      'tongue-blade': 'Neutral.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Not involved.',
      'vocal-cords': 'Seal shut completely (glottis = 0), then pop open.'
    }
  },

  // === 7. CONSONANTS: FRICATIVES ===
  f_voiceless: {
    subCategory: 'Voiceless labiodental fricative',
    graphemes: 'f, ff, v (Vater), ph',
    comparisonNote: 'Same upper-teeth-on-lower-lip contact as /v/, but voiceless with strong airflow.',
    wordMeanings: { Fisch: 'fish', Vater: 'father', schlafen: 'to sleep' },
    articulationSteps: [
      'Step 1 (Rest upper incisors lightly on lower lip).',
      'Step 2 (Blow steady voiceless air through the narrow gap).'
    ],
    mistakes: [
      {
        confusedWith: 'Pronouncing German "v" as /v/',
        mistakeDescription: 'Native German words with "v" ("Vater", "viel", "vier") use voiceless /f/.',
        correctionTip: 'Pronounce native German "v" words as /f/.'
      }
    ],
    organRoles: {
      lips: 'Lower lip tucked gently against upper incisor edge.',
      'tongue-tip': 'Relaxed.',
      'tongue-blade': 'Relaxed.',
      'tongue-dorsum': 'Relaxed.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Upper teeth form the constriction.',
      'vocal-cords': 'Open (voiceless).'
    }
  },
  v_voiced: {
    subCategory: 'Voiced labiodental fricative',
    graphemes: 'w, v (loanwords: Vase, Klavier)',
    comparisonNote: 'Same labiodental contact as /f/, but voiced with continuous vocal fold vibration.',
    wordMeanings: { Wasser: 'water', Welt: 'world', Vase: 'vase' },
    articulationSteps: [
      'Step 1 (Touch upper teeth lightly to lower lip).',
      'Step 2 (Vibrate vocal folds steadily).'
    ],
    mistakes: [
      {
        confusedWith: 'English rounded /w/ ("water")',
        mistakeDescription: 'German "w" is NEVER bilabial /w/; it always involves upper teeth touching lower lip.',
        correctionTip: 'Always bite lower lip lightly for German "w".'
      }
    ],
    organRoles: {
      lips: 'Lower lip touches upper incisors (never rounded like /w/).',
      'tongue-tip': 'Relaxed.',
      'tongue-blade': 'Relaxed.',
      'tongue-dorsum': 'Relaxed.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Upper teeth contact.',
      'vocal-cords': 'Voiced (~145 Hz).'
    }
  },
  s_voiceless: {
    subCategory: 'Voiceless alveolar fricative',
    graphemes: 'ß, ss, s (syllable-final)',
    comparisonNote: 'Same narrow alveolar groove as /z/, but voiceless and sharp.',
    wordMeanings: { Straße: 'street', Eis: 'ice / ice cream', essen: 'to eat' },
    articulationSteps: [
      'Step 1 (Create a narrow central groove near alveolar ridge).',
      'Step 2 (Push crisp voiceless airflow through teeth).'
    ],
    mistakes: [
      {
        confusedWith: 'Voiced /z/',
        mistakeDescription: 'Confusing initial "s" (/z/) with "ss/ß" (/s/).',
        correctionTip: '"ss" and "ß" are always voiceless /s/.'
      }
    ],
    organRoles: {
      lips: 'Slightly spread.',
      'tongue-tip': 'Grooved near upper alveolar ridge.',
      'tongue-blade': 'Lateral edges sealed against upper molars.',
      'tongue-dorsum': 'Slightly lifted.',
      'tongue-root': 'Slightly forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Alveolar friction site (~5600 Hz).',
      'vocal-cords': 'Open (voiceless).'
    }
  },
  z_voiced: {
    subCategory: 'Voiced alveolar fricative',
    graphemes: 's (initial before vowel)',
    comparisonNote: 'Same tongue groove as /s/, with vocal folds buzzing continuously.',
    wordMeanings: { Sonne: 'sun', reisen: 'to travel', Musik: 'music' },
    articulationSteps: [
      'Step 1 (Set tongue near alveolar ridge like /s/).',
      'Step 2 (Turn on throat vibration like a buzzing bee).'
    ],
    mistakes: [
      {
        confusedWith: 'Voiceless /s/',
        mistakeDescription: 'Pronouncing initial "Sonne" or "sie" without voicing.',
        correctionTip: 'Feel your throat vibrate whenever "s" precedes a vowel.'
      }
    ],
    organRoles: {
      lips: 'Slightly spread.',
      'tongue-tip': 'Narrow groove at alveolar ridge.',
      'tongue-blade': 'Sealed laterally.',
      'tongue-dorsum': 'Slightly lifted.',
      'tongue-root': 'Slightly forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Alveolar ridge.',
      'vocal-cords': 'Voiced (~145 Hz).'
    }
  },
  sch_voiceless: {
    subCategory: 'Voiceless postalveolar fricative (rounded)',
    graphemes: 'sch, s (in sp-, st- onsets)',
    comparisonNote: 'Unlike palatal /ç/, /ʃ/ lifts the tongue blade forward to the postalveolar zone with protruded rounded lips.',
    wordMeanings: { Schule: 'school', Tisch: 'table', Stadt: 'city' },
    articulationSteps: [
      'Step 1 (Round and protrude lips).',
      'Step 2 (Dome tongue blade just behind alveolar ridge).',
      'Step 3 (Push broad voiceless airflow).'
    ],
    mistakes: [
      {
        confusedWith: '/s/ in "sp-" and "st-"',
        mistakeDescription: 'Saying /st/ instead of /ʃt/ in "Stadt" or "Straße".',
        correctionTip: 'Initial "sp-" and "st-" in German are always /ʃp-/ and /ʃt-/.'
      }
    ],
    organRoles: {
      lips: 'Protruded and rounded.',
      'tongue-tip': 'Slightly lifted behind alveolar ridge.',
      'tongue-blade': 'Arched toward postalveolar roof.',
      'tongue-dorsum': 'Raised in support.',
      'tongue-root': 'Slightly forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Postalveolar friction zone.',
      'vocal-cords': 'Open (voiceless).'
    }
  },
  zh_voiced: {
    subCategory: 'Voiced postalveolar fricative',
    graphemes: 'g, j (loanwords: Garage, Journalist)',
    comparisonNote: 'Same lip-rounded postalveolar posture as /ʃ/, but voiced.',
    wordMeanings: { Garage: 'garage', Journalist: 'journalist', Orange: 'orange' },
    articulationSteps: [
      'Step 1 (Shape lips and tongue as for /ʃ/).',
      'Step 2 (Engage steady vocal fold vibration).'
    ],
    mistakes: [
      {
        confusedWith: 'English affricate /d͡ʒ/',
        mistakeDescription: 'Adding a /d/ stop before the fricative.',
        correctionTip: 'Keep the tongue off the roof so it flows smoothly like the "s" in "measure".'
      }
    ],
    organRoles: {
      lips: 'Slightly rounded.',
      'tongue-tip': 'Lifted behind alveolar ridge (no stop).',
      'tongue-blade': 'Postalveolar arch.',
      'tongue-dorsum': 'Raised.',
      'tongue-root': 'Forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Postalveolar zone.',
      'vocal-cords': 'Voiced (~140 Hz).'
    }
  },
  ch_ich: {
    subCategory: 'Voiceless palatal fricative (Ich-Laut)',
    graphemes: 'ch (after i, e, ä, ö, ü, ei, eu, l, n, r), -ig',
    comparisonNote:
      'Unlike velar /x/ at the soft palate, /ç/ arches the anterior tongue blade/body high against the hard palate.',
    wordMeanings: { ich: 'I', Milch: 'milk', lächeln: 'to smile' },
    articulationSteps: [
      'Step 1 (Anchor tongue tip behind lower front teeth).',
      'Step 2 (Arch front tongue high toward hard palate leaving a ~2mm gap).',
      'Step 3 (Push voiceless air through the narrow palatal channel).'
    ],
    mistakes: [
      {
        confusedWith: '/ʃ/ ("sh") or /tʃ/ ("ch")',
        mistakeDescription: 'Lifting the tip or rounding the lips turns "ich" into "ish".',
        correctionTip: 'Prepare to say "yes", lock tongue tip behind bottom teeth, and whisper strong air.'
      }
    ],
    organRoles: {
      lips: 'Naturally open and slightly spread (never rounded).',
      'tongue-tip': 'Anchored low behind lower incisors.',
      'tongue-blade': 'Raised high against hard palate.',
      'tongue-dorsum': 'Supports palatal constriction.',
      'tongue-root': 'Advanced forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Primary friction site (~3000 Hz).',
      'vocal-cords': 'Wide V-shaped open glottis (voiceless).'
    }
  },
  ch_ach: {
    subCategory: 'Voiceless velar fricative (Ach-Laut)',
    graphemes: 'ch (after a, o, u, au)',
    comparisonNote:
      'Whereas /ç/ arches forward under the hard palate, /x/ raises the back of the tongue against the soft palate (velum).',
    wordMeanings: { Buch: 'book', machen: 'to make, to do', Nacht: 'night' },
    articulationSteps: [
      'Step 1 (Keep tongue tip low on floor of mouth).',
      'Step 2 (Lift back of tongue near soft palate without sealing).',
      'Step 3 (Push voiceless air smoothly through velar gap).'
    ],
    mistakes: [
      {
        confusedWith: 'Stop /k/ ("Buk" instead of "Buch")',
        mistakeDescription: 'Sealing the tongue completely against the velum cuts off the fricative.',
        correctionTip: 'Keep the narrow velar gap open and hiss softly for ~0.3s at word endings.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Low and slightly retracted.',
      'tongue-blade': 'Lowered.',
      'tongue-dorsum': 'Raised high toward soft palate.',
      'tongue-root': 'Slightly retracted.',
      'soft-palate': 'Seals nasal passage and forms upper friction surface.',
      'hard-palate': 'No contact.',
      'vocal-cords': 'Open (voiceless).'
    }
  },
  r_uvular: {
    subCategory: 'Voiced uvular fricative / approximant',
    graphemes: 'r, rr, rh (syllable-initial)',
    comparisonNote:
      'Articulated further back than /x/: tongue root/dorsum approaches the uvula while vocal folds vibrate.',
    wordMeanings: { rot: 'red', reisen: 'to travel', Bruder: 'brother' },
    articulationSteps: [
      'Step 1 (Keep tongue tip relaxed behind bottom teeth).',
      'Step 2 (Lift back of tongue gently toward uvula).',
      'Step 3 (Engage vocal fold vibration with soft uvular friction).'
    ],
    mistakes: [
      {
        confusedWith: 'Alveolar tap/trill /r/ or harsh voiceless scraping',
        mistakeDescription: 'Curling the tip or forcing voiceless throat pressure.',
        correctionTip: 'Start from soft /x/, cut air pressure in half, and vibrate your throat.'
      }
    ],
    organRoles: {
      lips: 'Slightly rounded.',
      'tongue-tip': 'Passive and low.',
      'tongue-blade': 'Low.',
      'tongue-dorsum': 'Raised back toward uvula.',
      'tongue-root': 'Approaches upper pharynx and uvula.',
      'soft-palate': 'Uvula approximates/trills gently against tongue back.',
      'hard-palate': 'Open front cavity.',
      'vocal-cords': 'Voiced (~135 Hz).'
    }
  },
  h_glottal: {
    subCategory: 'Voiceless glottal fricative',
    graphemes: 'h (syllable-initial)',
    comparisonNote: 'Wide-open glottis letting breath flow freely, opposite of closed /ʔ/.',
    wordMeanings: { Haus: 'house', heute: 'today', Hand: 'hand' },
    articulationSteps: [
      'Step 1 (Pre-shape mouth for following vowel).',
      'Step 2 (Breathe voiceless air through open glottis).'
    ],
    mistakes: [
      {
        confusedWith: 'Silent lengthening "h" ("sehen", "gehen")',
        mistakeDescription: 'Post-vocalic "h" only marks vowel length and is silent.',
        correctionTip: 'Only pronounce /h/ at word or root onsets.'
      }
    ],
    organRoles: {
      lips: 'Pre-shaped for vowel.',
      'tongue-tip': 'Relaxed.',
      'tongue-blade': 'Relaxed.',
      'tongue-dorsum': 'Relaxed.',
      'tongue-root': 'Open pharynx.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Open.',
      'vocal-cords': 'Wide open glottis (0.95).'
    }
  },

  // === 8. CONSONANTS: AFFRICATES ===
  pf_affricate: {
    subCategory: 'Voiceless labial affricate',
    graphemes: 'pf',
    comparisonNote: 'Two-stage release: bilabial stop /p/ (30–50%) releasing directly into labiodental /f/ (50–75%).',
    wordMeanings: { Pferd: 'horse', Apfel: 'apple', Kopf: 'head' },
    articulationSteps: [
      'Step 1 (Seal lips tightly like /p/).',
      'Step 2 (Slide lower lip under upper teeth directly into /f/ frication).'
    ],
    mistakes: [
      {
        confusedWith: 'Dropping /p/ ("Ferd")',
        mistakeDescription: 'Omitting the initial lip stop in "Pferd" or "Pfeffer".',
        correctionTip: 'Press lips shut cleanly before letting /f/ hiss out.'
      }
    ],
    organRoles: {
      lips: 'Stage 1 bilabial seal (/p/), Stage 2 labiodental contact (/f/).',
      'tongue-tip': 'Relaxed.',
      'tongue-blade': 'Neutral.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Upper teeth meet lower lip in Stage 2.',
      'vocal-cords': 'Open (voiceless).'
    }
  },
  ts_affricate: {
    subCategory: 'Voiceless alveolar affricate',
    graphemes: 'z, tz, ts, c (before e, i)',
    comparisonNote: 'Combines alveolar stop /t/ with sharp alveolar fricative /s/ — never voiced /z/.',
    wordMeanings: { Zeit: 'time', Zug: 'train', Katze: 'cat' },
    articulationSteps: [
      'Step 1 (Seal tongue tip on alveolar ridge like /t/).',
      'Step 2 (Open center groove directly into crisp /s/).'
    ],
    mistakes: [
      {
        confusedWith: 'Voiced /z/ ("zoo")',
        mistakeDescription: 'Reading German "z" like English "z".',
        correctionTip: 'German "z" is ALWAYS voiceless /t͡s/ (like "ts" in "cats").'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Stage 1 alveolar stop (/t/), Stage 2 narrow /s/ groove.',
      'tongue-blade': 'Seals laterally.',
      'tongue-dorsum': 'Slightly raised.',
      'tongue-root': 'Forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Alveolar ridge.',
      'vocal-cords': 'Open (voiceless).'
    }
  },
  tsch_affricate: {
    subCategory: 'Voiceless postalveolar affricate',
    graphemes: 'tsch',
    comparisonNote: 'Combines alveolar closure /t/ with lip-rounded fricative /ʃ/.',
    wordMeanings: { Deutsch: 'German', tschüss: 'bye', Kutsche: 'carriage' },
    articulationSteps: [
      'Step 1 (Round lips and close tongue tip against ridge).',
      'Step 2 (Release into full rounded /ʃ/).'
    ],
    mistakes: [
      {
        confusedWith: 'Unrounded /tɕ/',
        mistakeDescription: 'Forgetting lip rounding softens the sound.',
        correctionTip: 'Protrude and round lips like /ʃ/ throughout.'
      }
    ],
    organRoles: {
      lips: 'Rounded forward.',
      'tongue-tip': 'Stop closure releasing into postalveolar frication.',
      'tongue-blade': 'Arched behind alveolar ridge.',
      'tongue-dorsum': 'Raised.',
      'tongue-root': 'Forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Postalveolar region.',
      'vocal-cords': 'Open (voiceless).'
    }
  },

  // === 9. CONSONANTS: NASALS ===
  m_nasal: {
    subCategory: 'Voiced bilabial nasal',
    graphemes: 'm, mm',
    comparisonNote: 'Same bilabial seal as /b/, with lowered soft palate diverting voiced airflow through the nose.',
    wordMeanings: { mein: 'my, mine', Mann: 'man', Name: 'name' },
    articulationSteps: [
      'Step 1 (Close both lips gently).',
      'Step 2 (Lower soft palate to open nasal port).',
      'Step 3 (Hum voiced tone through nose).'
    ],
    mistakes: [
      {
        confusedWith: 'Incomplete lip closure at word endings',
        mistakeDescription: 'Opening lips early on words like "Baum" or "am".',
        correctionTip: 'Bring both lips firmly together at the end.'
      }
    ],
    organRoles: {
      lips: 'Sealed shut, blocking oral exit.',
      'tongue-tip': 'Relaxed.',
      'tongue-blade': 'Relaxed.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'LOWERED to open the velopharyngeal port into the nasal cavity!',
      'hard-palate': 'Not involved.',
      'vocal-cords': 'Voiced (~145 Hz).'
    }
  },
  n_nasal: {
    subCategory: 'Voiced alveolar nasal',
    graphemes: 'n, nn',
    comparisonNote: 'Same alveolar tongue seal as /d/, with lowered velum sending airflow out the nose.',
    wordMeanings: { Nacht: 'night', Name: 'name', Sonne: 'sun' },
    articulationSteps: [
      'Step 1 (Seal tongue tip and edges against upper alveolar ridge).',
      'Step 2 (Lower soft palate).',
      'Step 3 (Hum voiced airflow out through nose).'
    ],
    mistakes: [
      {
        confusedWith: 'Nasalizing preceding vowel without tongue tip seal',
        mistakeDescription: 'Leaving tip down at syllable ends.',
        correctionTip: 'Touch tongue tip cleanly to the ridge.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Seals tightly at upper alveolar ridge.',
      'tongue-blade': 'Seals laterally around dental arch.',
      'tongue-dorsum': 'Slightly lifted.',
      'tongue-root': 'Forward.',
      'soft-palate': 'LOWERED to route airflow through nasal cavity.',
      'hard-palate': 'Alveolar ridge seals oral tract.',
      'vocal-cords': 'Voiced (~145 Hz).'
    }
  },
  ng_nasal: {
    subCategory: 'Voiced velar nasal',
    graphemes: 'ng, n (before k)',
    comparisonNote: 'Unlike alveolar /n/, the tongue tip rests low while the back dorsum seals against the lowered velum.',
    wordMeanings: { singen: 'to sing', Finger: 'finger', danke: 'thank you' },
    articulationSteps: [
      'Step 1 (Keep tongue tip low behind bottom teeth).',
      'Step 2 (Raise back dorsum against lowered soft palate).',
      'Step 3 (Voice smoothly through nose — NO /ɡ/ release!).'
    ],
    mistakes: [
      {
        confusedWith: 'Adding an audible /ɡ/ after "ng" ("sing-gen")',
        mistakeDescription: 'Seeing letter "g" tempts learners to release a /ɡ/ stop.',
        correctionTip: 'German "ng" ("singen", "lang") is a single pure nasal /ŋ/ with NO /ɡ/!'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Low behind lower teeth.',
      'tongue-blade': 'Low.',
      'tongue-dorsum': 'Seals against lowered soft palate.',
      'tongue-root': 'Retracted.',
      'soft-palate': 'LOWERED against tongue dorsum to open nasal airway.',
      'hard-palate': 'Not involved.',
      'vocal-cords': 'Voiced (~140 Hz).'
    }
  },

  // === 10. CONSONANTS: APPROXIMANTS & LATERAL ===
  l_lateral: {
    subCategory: 'Voiced alveolar lateral approximant',
    graphemes: 'l, ll',
    comparisonNote: 'Central alveolar contact like /n/, but velum stays closed and side edges drop so air splits laterally around the tongue.',
    wordMeanings: { Liebe: 'love', lächeln: 'to smile', Öl: 'oil' },
    articulationSteps: [
      'Step 1 (Touch center of tongue tip to alveolar ridge).',
      'Step 2 (Lower both lateral tongue edges so air flows around the sides).',
      'Step 3 (Keep it a "clear/light L" even at word endings).'
    ],
    mistakes: [
      {
        confusedWith: 'English "dark L" (/ɫ/) at word endings ("Öl", "viel")',
        mistakeDescription: 'Retracting the tongue back makes German final "-l" sound heavy.',
        correctionTip: 'German /l/ is always a bright, clear L with a flat front tongue.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Touches center of alveolar ridge.',
      'tongue-blade': 'Side edges drop to open bilateral airflow channels.',
      'tongue-dorsum': 'Flat and forward (clear L).',
      'tongue-root': 'Forward.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Central alveolar contact only (see Top-Down view).',
      'vocal-cords': 'Voiced (~150 Hz).'
    }
  },
  j_palatal: {
    subCategory: 'Voiced palatal approximant',
    graphemes: 'j, y',
    comparisonNote: 'High palatal tongue arch like /ç/, but slightly wider and actively voiced.',
    wordMeanings: { ja: 'yes', Jahr: 'year', jung: 'young' },
    articulationSteps: [
      'Step 1 (Place tongue tip behind lower teeth).',
      'Step 2 (Arch front dorsum near hard palate).',
      'Step 3 (Glide smoothly with voice into next vowel).'
    ],
    mistakes: [
      {
        confusedWith: 'English /d͡ʒ/ ("jet")',
        mistakeDescription: 'Adding an alveolar stop before "j" in "Jahr" or "jung".',
        correctionTip: 'Pronounce German "j" like English "y" in "yes".'
      }
    ],
    organRoles: {
      lips: 'Neutral or slightly spread.',
      'tongue-tip': 'Behind lower teeth.',
      'tongue-blade': 'Arched close to hard palate.',
      'tongue-dorsum': 'High and forward.',
      'tongue-root': 'Advanced.',
      'soft-palate': 'Closed.',
      'hard-palate': 'Approximated cleanly.',
      'vocal-cords': 'Voiced (~160 Hz).'
    }
  }
};
