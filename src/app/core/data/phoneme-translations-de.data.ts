import type { PhonemeLocalizedContent } from './ui-translations.data';

export const PHONEME_TRANSLATIONS_DE: Record<string, PhonemeLocalizedContent> = {
  // === 1. VOWELS: FRONT ROUNDED ===
  ue_long: {
    subCategory: 'Geschlossener gerundeter Vorderzungenvokal (lang)',
    graphemes: 'ü, üh, y',
    comparisonNote:
      'Der Zungenrücken ist wie beim /iː/ hoch vorne gegen den harten Gaumen gewölbt, aber die Lippen sind stark gerundet und nach vorne gestülpt.',
    wordMeanings: {
      über: 'über, oberhalb, jenseits',
      Bühne: 'Theaterbühne, Podium',
      fühlen: 'etwas empfinden oder spüren'
    },
    articulationSteps: [
      '1. Zungenposition wie bei /iː/: Zungenspitze leicht hinter die unteren Schneidezähne legen, vorderen Zungenrücken hoch zum harten Gaumen wölben.',
      '2. Starke Lippenrundung: Die Zunge exakt in der /iː/-Position halten und beide Lippen kräftig rund nach vorne stülpen.',
      '3. Stimmton aktivieren: Gaumensegel verschließt den Nasenraum, Stimmlippen schwingen kontinuierlich.'
    ],
    mistakes: [
      {
        confusedWith: 'Diphthong /wi/ oder Hinterzungenvokal /uː/',
        mistakeDescription: 'Lernende ziehen oft die Zunge nach hinten (/uː/) oder bewegen die Lippen während des Lautes.',
        correctionTip: 'Sprechen Sie ein langes „iiii…“ und runden Sie dann nur die Lippen nach vorne, ohne die Zunge zu bewegen!'
      },
      {
        confusedWith: 'Ungerundetes /iː/ („über“ klingt wie „iber“)',
        mistakeDescription: 'Fehlende Lippenrundung führt zu Verwechslungen (z. B. „lügen“ vs. „liegen“).',
        correctionTip: 'Vergleich mit /iː/ aktivieren: Die Lippen ragen beim /yː/ deutlich weiter nach vorne.'
      }
    ],
    organRoles: {
      lips: 'Stark gerundet und nach vorne gestülpt zur Verlängerung des vorderen Resonanzraums.',
      'tongue-tip': 'Ruht entspannt hinter den unteren Schneidezähnen.',
      'tongue-blade': 'Hebt sich steil zum vorderen harten Gaumen (identisch mit /iː/).',
      'tongue-dorsum': 'Wölbt sich hoch nach vorne unter das Gaumendach.',
      'tongue-root': 'Nach vorne verlagert; der Rachenraum ist weit geöffnet.',
      'soft-palate': 'Angehoben gegen die Rachenhinterwand (Nasenraum verschlossen).',
      'hard-palate': 'Oberer Bezugspunkt für die hohe Vorderzungenwölbung.',
      'vocal-cords': 'Eng geschlossen und periodisch schwingend (~165 Hz).'
    }
  },
  ue_short: {
    subCategory: 'Fast geschlossener gerundeter Vorderzungenvokal (kurz)',
    graphemes: 'ü, y',
    comparisonNote:
      'Im Vergleich zum langen gespannten /yː/ liegt die Zunge beim kurzen /ʏ/ etwas tiefer und zentraler; die Lippen sind lockerer gerundet.',
    wordMeanings: {
      Hütte: 'kleines Holzhaus, Schutzhütte',
      fünf: 'Zahlwort 5',
      Glück: 'positives Schicksal, Freude'
    },
    articulationSteps: [
      '1. Zunge leicht senken: Wie beim kurzen /ɪ/ etwas tiefer und entspannter als /yː/ lagern.',
      '2. Lockere Lippenrundung: Lippen rund formen, ohne sie zu stark anzuspannen.',
      '3. Kurz artikulieren: Stimmton zügig und prägnant ausführen.'
    ],
    mistakes: [
      {
        confusedWith: 'Langes /yː/ oder Hinterzungenvokal /ʊ/',
        mistakeDescription: 'Zu lange Dauer verwechselt „Hütte“ mit „Hüte“, oder die Zunge rutscht zu weit nach hinten.',
        correctionTip: 'Zunge in /ɪ/-Position vorne lassen, leicht runden und sehr kurz sprechen.'
      }
    ],
    organRoles: {
      lips: 'Locker gerundet mit etwas größerer Öffnung als bei /yː/.',
      'tongue-tip': 'Ruht hinter den unteren Schneidezähnen.',
      'tongue-blade': 'Auf fast geschlossener Höhe, leicht abgesenkt.',
      'tongue-dorsum': 'Leicht Richtung Mundmitte zurückgenommen.',
      'tongue-root': 'Entspannt nach vorne gerichtet.',
      'soft-palate': 'Verschließt die Nasenhöhle.',
      'hard-palate': 'Etwas breiterer Spalt als bei /yː/.',
      'vocal-cords': 'Kurze stimmhafte Schwingung (~162 Hz).'
    }
  },
  oe_long: {
    subCategory: 'Halbgeschlossener gerundeter Vorderzungenvokal (lang)',
    graphemes: 'ö, öh, oe',
    comparisonNote:
      'Die Zunge liegt halbhoch vorne exakt wie beim deutschen /eː/, während die Lippen gleichzeitig rund nach vorne geschoben werden.',
    wordMeanings: {
      schön: 'ästhetisch, angenehm, gut',
      hören: 'akustisch wahrnehmen, zuhören',
      Öl: 'Speiseöl oder Erdöl'
    },
    articulationSteps: [
      '1. Zungenstellung wie bei /eː/: Zungenspitze an den unteren Schneidezähnen, vorderen Zungenrücken auf mittlere Höhe heben.',
      '2. Mittlere Lippenrundung: Zunge vorne fixieren und Lippen rund nach vorne wölben.',
      '3. Gleichmäßige Phonation: Gaumensegel geschlossen halten, warmen Stimmton erzeugen.'
    ],
    mistakes: [
      {
        confusedWith: 'Ungerundeter Mittelzungenvokal /ɤː/ oder /ə/',
        mistakeDescription: 'Zunge wird oft zu weit nach hinten gezogen und die Lippen bleiben flach.',
        correctionTip: 'Ein klares langes „eeee…“ halten und mit den Lippen ein rundes „o“ formen.'
      }
    ],
    organRoles: {
      lips: 'Gerundet und vorgeschoben mit mittlerer vertikaler Öffnung.',
      'tongue-tip': 'Liegt locker hinter den unteren Schneidezähnen.',
      'tongue-blade': 'Auf halbgeschlossener Höhe Richtung harter Gaumen angehoben.',
      'tongue-dorsum': 'Vorderer Zungenrücken mittelhoch (wie /eː/).',
      'tongue-root': 'Leicht nach vorne gezogen.',
      'soft-palate': 'Verschließt den Durchgang zur Nasenhöhle.',
      'hard-palate': 'Größerer Abstand zum Zungenrücken als bei /yː/.',
      'vocal-cords': 'Schwingen regelmäßig (~160 Hz).'
    }
  },
  oe_short: {
    subCategory: 'Halboffener gerundeter Vorderzungenvokal (kurz)',
    graphemes: 'ö',
    comparisonNote:
      'Gegenüber /øː/ öffnet sich der Kiefer stärker und die Zunge liegt tiefer (Zungenstellung wie /ɛ/ mit Lippenrundung).',
    wordMeanings: {
      Götter: 'Plural von Gott',
      öffnen: 'aufmachen',
      zwölf: 'Zahlwort 12'
    },
    articulationSteps: [
      '1. Zungenlage wie /ɛ/: Kiefer halboffen absenken, Vorderzunge mittel-tief.',
      '2. Offene Lippenrundung: Lippen deutlich runden, aber nicht zu eng pressen.',
      '3. Kurzer Laut: Kurz und bestimmt artikulieren.'
    ],
    mistakes: [
      {
        confusedWith: 'Ungerundetes /ɛ/ oder /ə/',
        mistakeDescription: 'Fehlende Lippenrundung lässt „öffnen“ flach klingen.',
        correctionTip: 'Lippen bereits vor Stimmeinsatz rund formen und dann ein kurzes /ɛ/ sprechen.'
      }
    ],
    organRoles: {
      lips: 'Weit gerundet ohne Spannung.',
      'tongue-tip': 'Tief hinter den unteren Zähnen.',
      'tongue-blade': 'Halboffene Höhe.',
      'tongue-dorsum': 'Tiefer als bei /øː/.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Weiter Resonanzraum vorne.',
      'vocal-cords': 'Kurze Schwingung (~156 Hz).'
    }
  },

  // === 2. VOWELS: FRONT UNROUNDED ===
  i_long: {
    subCategory: 'Geschlossener ungerundeter Vorderzungenvokal (lang)',
    graphemes: 'i, ie, ih, ieh',
    comparisonNote:
      'Gespannter und deutlich höher gewölbt als /ɪ/, mit leicht gespreizten Lippen.',
    wordMeanings: {
      ihr: 'Personal- oder Possessivpronomen',
      Liebe: 'tiefe Zuneigung',
      wir: 'Personalpronomen 1. Person Plural'
    },
    articulationSteps: [
      '1. Lippen leicht spreizen: Mundwinkel sanft zur Seite ziehen.',
      '2. Vorderzunge maximal heben: Dicht unter den harten Gaumen wölben.',
      '3. Lang und rein halten: Ohne Gleitbewegung aushalten.'
    ],
    mistakes: [
      {
        confusedWith: 'Kurzes /ɪ/ („Miete“ vs. „Mitte“)',
        mistakeDescription: 'Zu kurze Aussprache führt zu Bedeutungsverwechslungen.',
        correctionTip: 'Mundwinkel gespannt halten und die Vokaldauer deutlich dehnen.'
      }
    ],
    organRoles: {
      lips: 'Leicht gespreizt und flach.',
      'tongue-tip': 'Hinter den unteren Schneidezähnen.',
      'tongue-blade': 'Steil an den harten Gaumen gewölbt.',
      'tongue-dorsum': 'Hoch nach vorne verlagert.',
      'tongue-root': 'Weit vorgeschoben.',
      'soft-palate': 'Nasenraum geschlossen.',
      'hard-palate': 'Sehr enger Spalt zur Zunge (hoher F2 ~2250 Hz).',
      'vocal-cords': 'Stimmhaft (~170 Hz).'
    }
  },
  i_short: {
    subCategory: 'Fast geschlossener ungerundeter Vorderzungenvokal (kurz)',
    graphemes: 'i',
    comparisonNote:
      'Tiefer, zentraler und entspannter als /iː/; die Lippen werden nicht gespreizt.',
    wordMeanings: {
      ich: 'Personalpronomen 1. Person Singular',
      Mitte: 'Zentrum, mittlerer Bereich',
      Kind: 'junger Mensch'
    },
    articulationSteps: [
      '1. Lippen entspannen: Keine Spannung an den Mundwinkeln.',
      '2. Zunge leicht senken: Etwas tiefer und mittiger als bei /iː/.',
      '3. Kurz aussprechen: Schnell durch den folgenden Konsonanten schließen.'
    ],
    mistakes: [
      {
        confusedWith: 'Gespanntes /iː/',
        mistakeDescription: 'Zu viel Lippenspannung lässt „ich“ oder „Kind“ überdehnt klingen.',
        correctionTip: 'Kiefer und Lippen komplett locker lassen und sehr kurz sprechen.'
      }
    ],
    organRoles: {
      lips: 'Neutral und völlig entspannt.',
      'tongue-tip': 'Hinter den unteren Schneidezähnen.',
      'tongue-blade': 'Fast geschlossen, leicht gesenkt.',
      'tongue-dorsum': 'Leicht zentralisiert.',
      'tongue-root': 'Entspannt.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Breiterer Abstand zur Zunge als bei /iː/.',
      'vocal-cords': 'Kurze Schwingung (~165 Hz).'
    }
  },
  e_long: {
    subCategory: 'Halbgeschlossener ungerundeter Vorderzungenvokal (lang)',
    graphemes: 'e, ee, eh',
    comparisonNote:
      'Deutlich geschlossener und höher als das kurze /ɛ/; darf nicht wie englisches [eɪ] gleiten.',
    wordMeanings: {
      See: 'Binnengewässer oder Meer',
      gehen: 'zu Fuß fortbewegen',
      leben: 'existieren, wohnen'
    },
    articulationSteps: [
      '1. Lippen leicht spreizen: Kiefer nur wenig öffnen.',
      '2. Zunge halbhoch vorne: Zwischen /iː/ und /ɛ/.',
      '3. Monophthong rein halten: Zunge während der gesamten Dauer nicht nach oben bewegen.'
    ],
    mistakes: [
      {
        confusedWith: 'Englischer Diphthong /eɪ/',
        mistakeDescription: 'Am Ende des Vokals gleitet die Zunge oft fälschlich zu /ɪ/.',
        correctionTip: 'Unterkiefer und Zunge während des gesamten Vokals absolut ruhig halten.'
      }
    ],
    organRoles: {
      lips: 'Leicht gespreizt.',
      'tongue-tip': 'Hinter den unteren Zähnen.',
      'tongue-blade': 'Halbgeschlossene Höhe.',
      'tongue-dorsum': 'Gespannt vorne-mitte.',
      'tongue-root': 'Leicht vorgeschoben.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Mittlerer Resonanzraum.',
      'vocal-cords': 'Stimmhaft (~162 Hz).'
    }
  },
  e_short: {
    subCategory: 'Halboffener ungerundeter Vorderzungenvokal (kurz)',
    graphemes: 'e, ä',
    comparisonNote:
      'Kiefer deutlich weiter geöffnet als bei /eː/, Zunge tiefer und kürzer artikuliert.',
    wordMeanings: {
      Bett: 'Schlafmöbel',
      Männer: 'Plural von Mann',
      sprechen: 'Worte äußern, reden'
    },
    articulationSteps: [
      '1. Kiefer halboffen absenken.',
      '2. Vorderzunge entspannt auf mittlere Tiefe bringen.',
      '3. Kurz und prägnant aussprechen.'
    ],
    mistakes: [
      {
        confusedWith: 'Geschlossenes /eː/',
        mistakeDescription: 'Verwechslung von „Betten“ und „beten“ bei ungenügender Kieferöffnung.',
        correctionTip: 'Kiefer sichtbar senken und den Laut kurz abschließen.'
      }
    ],
    organRoles: {
      lips: 'Neutral geöffnet.',
      'tongue-tip': 'Tief hinter den unteren Schneidezähnen.',
      'tongue-blade': 'Halboffen.',
      'tongue-dorsum': 'Entspannt vorne-tief.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Weiter Abstand.',
      'vocal-cords': 'Kurze Schwingung (~158 Hz).'
    }
  },
  ae_long: {
    subCategory: 'Halboffener ungerundeter Vorderzungenvokal (lang)',
    graphemes: 'ä, äh',
    comparisonNote:
      'Hat die volle Länge von /eː/, aber die weite Kieferöffnung von /ɛ/ (unterscheidet „Bären“ von „Beeren“).',
    wordMeanings: {
      Käse: 'Milchprodukt',
      Mädchen: 'weibliches Kind',
      wählen: 'sich entscheiden, abstimmen'
    },
    articulationSteps: [
      '1. Kiefer halboffen wie beim /ɛ/ absenken.',
      '2. Vorderzunge tief vorne halten.',
      '3. Mit voller Vokallänge gleichmäßig aushalten.'
    ],
    mistakes: [
      {
        confusedWith: 'Zusammenfall mit /eː/',
        mistakeDescription: 'In der Umgangssprache wird /ɛː/ oft durch /eː/ ersetzt.',
        correctionTip: 'Kiefer deutlich tiefer senken als bei „See“.'
      }
    ],
    organRoles: {
      lips: 'Weit geöffnet, ungerundet.',
      'tongue-tip': 'Hinter den unteren Zähnen.',
      'tongue-blade': 'Tief im vorderen Bereich.',
      'tongue-dorsum': 'Halboffen gesenkt.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Weiter Resonanzraum.',
      'vocal-cords': 'Langanhaltende Schwingung (~156 Hz).'
    }
  },

  // === 3. VOWELS: CENTRAL & OPEN ===
  schwa: {
    subCategory: 'Unbetonter mittlerer Zentralvokal (Schwa)',
    graphemes: 'e (in unbetonten Silben)',
    comparisonNote:
      'Die Zunge liegt beim Schwa /ə/ genau in der Mundmitte (etwas höher als beim vokalisierten R /ɐ/).',
    wordMeanings: {
      bitte: 'Höflichkeitsformel',
      Name: 'Bezeichnung einer Person',
      gesehen: 'Partizip II von sehen'
    },
    articulationSteps: [
      '1. Gesichtsmuskeln und Lippen völlig entspannen.',
      '2. Zunge neutral in der Mitte des Mundraums belassen.',
      '3. Sehr kurz und unbetont sprechen.'
    ],
    mistakes: [
      {
        confusedWith: 'Betontes /ɛ/ oder zu starkes /øː/',
        mistakeDescription: 'Endungen wie „-e“ werden von Lernenden oft zu stark betont.',
        correctionTip: 'Unbetonte Endsilben ganz leise und kurz ausklingen lassen.'
      }
    ],
    organRoles: {
      lips: 'Völlig entspannt.',
      'tongue-tip': 'Neutral am Mundboden.',
      'tongue-blade': 'Mittlere Ruhehöhe.',
      'tongue-dorsum': 'Genau zentral im Mundraum.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Keine Verengung.',
      'vocal-cords': 'Kurze weiche Schwingung (~152 Hz).'
    }
  },
  tiefschwa: {
    subCategory: 'Fast offener Zentralvokal (Tiefschwa / vokalisiertes R)',
    graphemes: '-er, r (nach langem Vokal)',
    comparisonNote:
      'Tiefer und offener als /ə/, klingt wie ein entspanntes kurzes „a“ — Standardsprache für unbetontes „-er“.',
    wordMeanings: {
      Vater: 'männlicher Elternteil',
      Wasser: 'klare Flüssigkeit (H₂O)',
      Bruder: 'männliches Geschwisterteil'
    },
    articulationSteps: [
      '1. Kiefer leicht weiter öffnen als bei /ə/.',
      '2. Zungenspitze flach unten lassen — NIEMALS nach oben rollen!',
      '3. Kurzen, entspannten zentralen a-ähnlichen Laut bilden.'
    ],
    mistakes: [
      {
        confusedWith: 'Englisches retroflexes R (/ɹ/)',
        mistakeDescription: 'Lernende biegen am Wortende bei „Vater“ oft die Zungenspitze nach oben.',
        correctionTip: 'Zungenspitze bleibt hinter den unteren Zähnen; „-er“ wird als weiches /ɐ/ vokalisiert.'
      }
    ],
    organRoles: {
      lips: 'Locker leicht geöffnet.',
      'tongue-tip': 'Bleibt flach unten (keine Retroflexion!).',
      'tongue-blade': 'Abgesenkt.',
      'tongue-dorsum': 'Zentral-tief Richtung /a/.',
      'tongue-root': 'Leicht zurück.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Offener Mundraum.',
      'vocal-cords': 'Stimmhaft (~150 Hz).'
    }
  },
  a_long: {
    subCategory: 'Langer ungerundeter offener Zentralvokal',
    graphemes: 'a, aa, ah',
    comparisonNote:
      'Deutlich länger und leicht dunkler/tiefer gelagert als das kurze helle /a/.',
    wordMeanings: {
      Tag: 'Zeitraum von 24 Stunden / Tageszeit',
      Bahn: 'Eisenbahn, Strecke',
      Staat: 'politisches Gemeinwesen'
    },
    articulationSteps: [
      '1. Unterkiefer weit nach unten öffnen.',
      '2. Zunge flach am Mundboden ausbreiten.',
      '3. Gleichmäßig und klangvoll dehnen.'
    ],
    mistakes: [
      {
        confusedWith: 'Kurzes /a/ („Staat“ vs. „Stadt“)',
        mistakeDescription: 'Unzureichende Vokallänge verwischt Minimalpaare.',
        correctionTip: 'Kiefer tief senken und die Dauer mindestens verdoppeln.'
      }
    ],
    organRoles: {
      lips: 'Weit geöffnet, ungerundet.',
      'tongue-tip': 'Flach hinter den unteren Zähnen.',
      'tongue-blade': 'Maximal abgesenkt.',
      'tongue-dorsum': 'Flach und leicht rückverlagert.',
      'tongue-root': 'Leicht nach hinten.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Größte Mundöffnung (F1 ~750 Hz).',
      'vocal-cords': 'Starke regelmäßige Schwingung (~154 Hz).'
    }
  },
  a_short: {
    subCategory: 'Kurzer ungerundeter offener Zentralvokal',
    graphemes: 'a',
    comparisonNote:
      'Etwas heller und zentraler als /aː/ und deutlich kürzer vor dem Folgekonsonanten.',
    wordMeanings: {
      Mann: 'erwachsene männliche Person',
      Stadt: 'große Siedlung',
      Hand: 'Greiforgan am Armende'
    },
    articulationSteps: [
      '1. Kiefer mittelweit bis weit öffnen.',
      '2. Zunge flach im zentralen Mundraum halten.',
      '3. Kurz und hell aussprechen.'
    ],
    mistakes: [
      {
        confusedWith: 'Langes /aː/ („Kamm“ vs. „kam“)',
        mistakeDescription: 'Zu langes Aushalten verändert die Wortbedeutung.',
        correctionTip: 'Klar und hell ansetzen, dann sofort durch den Konsonanten beenden.'
      }
    ],
    organRoles: {
      lips: 'Offen und ungerundet.',
      'tongue-tip': 'Tief unten.',
      'tongue-blade': 'Flach abgesenkt.',
      'tongue-dorsum': 'Offen zentral.',
      'tongue-root': 'Entspannt.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Offener Resonanzraum.',
      'vocal-cords': 'Kurze Schwingung (~156 Hz).'
    }
  },

  // === 4. VOWELS: BACK ROUNDED ===
  u_long: {
    subCategory: 'Langer geschlossener gerundeter Hinterzungenvokal',
    graphemes: 'u, uh',
    comparisonNote:
      'Hat dieselbe enge Lippenrundung wie /yː/, zieht den Zungenrücken jedoch ganz nach hinten zum weichen Gaumen.',
    wordMeanings: {
      Buch: 'gebundenes Druckwerk',
      Uhr: 'Zeitmessgerät / Stunde',
      gut: 'positiv, von hoher Qualität'
    },
    articulationSteps: [
      '1. Hinterzunge hoch zum weichen Gaumen ziehen.',
      '2. Lippen eng runden und stark vorstülpen.',
      '3. Langen, dunklen Stimmton halten.'
    ],
    mistakes: [
      {
        confusedWith: 'Kurzes /ʊ/ oder ungerundetes „u“',
        mistakeDescription: 'Zu geringe Lippenrundung verflacht den Klang.',
        correctionTip: 'Lippen eng wie für /yː/ runden, die Zunge aber hinten am Gaumensegel halten.'
      }
    ],
    organRoles: {
      lips: 'Eng gerundet und weit nach vorne gestülpt.',
      'tongue-tip': 'Von den unteren Zähnen zurückgezogen.',
      'tongue-blade': 'Abgesenkt.',
      'tongue-dorsum': 'Hoch hinten unter dem weichen Gaumen gewölbt.',
      'tongue-root': 'Nach hinten verlagert.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Großer vorderer Hohlraum.',
      'vocal-cords': 'Tiefe gleichmäßige Schwingung (~150 Hz).'
    }
  },
  u_short: {
    subCategory: 'Kurzer fast geschlossener gerundeter Hinterzungenvokal',
    graphemes: 'u',
    comparisonNote:
      'Tiefer, weiter vorne und deutlich entspannter als das lange /uː/.',
    wordMeanings: {
      Hund: 'Haustier (Canis)',
      Mutter: 'weiblicher Elternteil',
      und: 'Konjunktion'
    },
    articulationSteps: [
      '1. Hinterzunge locker halbhoch-hoch lagern.',
      '2. Lippen leicht und entspannt runden.',
      '3. Kurz und bündig sprechen.'
    ],
    mistakes: [
      {
        confusedWith: 'Langes /uː/ („Muss“ vs. „Mus“)',
        mistakeDescription: 'Zu gespannte Lippen machen den kurzen Vokal zu lang.',
        correctionTip: 'Lippen entspannt halten und Vokal sehr kurz abschließen.'
      }
    ],
    organRoles: {
      lips: 'Locker gerundet.',
      'tongue-tip': 'Leicht zurückgezogen.',
      'tongue-blade': 'Tief.',
      'tongue-dorsum': 'Tiefer und zentraler als /uː/.',
      'tongue-root': 'Entspannt.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Weiter Vorderraum.',
      'vocal-cords': 'Kurze Schwingung (~152 Hz).'
    }
  },
  o_long: {
    subCategory: 'Langer halbgeschlossener gerundeter Hinterzungenvokal',
    graphemes: 'o, oo, oh',
    comparisonNote:
      'Geschlossener und enger gerundet als /ɔ/; darf im Gegensatz zum Englischen nicht zu [oʊ] gleiten.',
    wordMeanings: {
      rot: 'Farbe Rot',
      Sohn: 'männliches Kind',
      Boot: 'kleines Wasserfahrzeug'
    },
    articulationSteps: [
      '1. Lippen zu einem kleinen, festen O runden.',
      '2. Hinterzunge halbhoch Richtung Gaumensegel heben.',
      '3. Rein und ohne Gleitbewegung dehnen.'
    ],
    mistakes: [
      {
        confusedWith: 'Englischer Diphthong /oʊ/',
        mistakeDescription: 'Lernende verengen am Ende die Lippen zu einem /u/-Gleitlaut.',
        correctionTip: 'Lippenöffnung vom Anfang bis zum Ende absolut konstant halten.'
      }
    ],
    organRoles: {
      lips: 'Deutlich gerundet und vorgeschoben.',
      'tongue-tip': 'Leicht zurückgezogen.',
      'tongue-blade': 'Abgesenkt.',
      'tongue-dorsum': 'Halbgeschlossen hinten.',
      'tongue-root': 'Zurückverlagert.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Offener vorderer Raum.',
      'vocal-cords': 'Gleichmäßige Schwingung (~148 Hz).'
    }
  },
  o_short: {
    subCategory: 'Kurzer halboffener gerundeter Hinterzungenvokal',
    graphemes: 'o',
    comparisonNote:
      'Kiefer deutlich weiter geöffnet und Zunge tiefer als beim langen /oː/.',
    wordMeanings: {
      Gott: 'höheres Wesen, Schöpfer',
      Kopf: 'oberer Körperteil',
      offen: 'nicht geschlossen'
    },
    articulationSteps: [
      '1. Kiefer halboffen absenken mit weiter Lippenrundung.',
      '2. Hinterzunge auf halboffene Tiefe senken.',
      '3. Kurz und klar artikulieren.'
    ],
    mistakes: [
      {
        confusedWith: 'Geschlossenes /oː/ („offen“ vs. „Ofen“)',
        mistakeDescription: 'Zu enger Kieferwinkel lässt kurzes „o“ wie geschlossenes „o“ klingen.',
        correctionTip: 'Kiefer klar absenken und kurz abbrechen.'
      }
    ],
    organRoles: {
      lips: 'Weit gerundet.',
      'tongue-tip': 'Tief und zurückgezogen.',
      'tongue-blade': 'Abgesenkt.',
      'tongue-dorsum': 'Halboffen hinten.',
      'tongue-root': 'Leicht zurück.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Offener Mundraum.',
      'vocal-cords': 'Kurze Schwingung (~150 Hz).'
    }
  },

  // === 5. DIPHTHONGS ===
  ai_diphthong: {
    subCategory: 'Fallender Diphthong [aɪ̯] (offen nach vorne-halbgeschlossen)',
    graphemes: 'ei, ai, ey, ay',
    comparisonNote:
      'Beginnt beim tiefen offenen /a/ und gleitet zügig nach vorne-oben in Richtung /ɪ/.',
    wordMeanings: {
      eins: 'Grundzahl 1',
      mein: 'Possessivpronomen 1. Person',
      Zeit: 'Ablauf von Stunden und Tagen'
    },
    articulationSteps: [
      '1. Offener Start bei /a/: Unterkiefer senken, Zunge flach.',
      '2. Aufwärtsgleiten zu /ɪ/: Vorderen Zungenrücken rasch Richtung harter Gaumen heben.',
      '3. Durchgehend stimmhaft abschließen.'
    ],
    mistakes: [
      {
        confusedWith: 'Schriftbild-Aussprache „e-i“',
        mistakeDescription: 'Anfänger beginnen „ei“ oft zu geschlossen.',
        correctionTip: '„ei“ wird im Deutschen immer mit offenem „a“ als [aɪ̯] gesprochen, „ie“ als [iː].'
      }
    ],
    organRoles: {
      lips: 'Erst weit geöffnet, am Ende leicht flach.',
      'tongue-tip': 'Hinter den unteren Schneidezähnen.',
      'tongue-blade': 'Steigt in der zweiten Phase steil nach oben.',
      'tongue-dorsum': 'Gleitet von tief-zentral nach vorne-oben.',
      'tongue-root': 'Bewegt sich nach vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Zielregion für das Gleitende.',
      'vocal-cords': 'Stimmhaft (~162 Hz).'
    }
  },
  au_diphthong: {
    subCategory: 'Fallender Diphthong [aʊ̯] (offen nach hinten-gerundet)',
    graphemes: 'au',
    comparisonNote:
      'Gleitet vom tiefen offenen /a/ nach hinten-oben zum gerundeten /ʊ/.',
    wordMeanings: {
      Haus: 'Wohngebäude',
      Auto: 'Kraftfahrzeug',
      Frau: 'erwachsene weibliche Person'
    },
    articulationSteps: [
      '1. Start mit weit offenem /a/.',
      '2. Zunge nach hinten-oben Richtung /ʊ/ zurückziehen.',
      '3. Lippen am Ende deutlich runden.'
    ],
    mistakes: [
      {
        confusedWith: 'Fehlende Lippenrundung am Ende',
        mistakeDescription: 'Bleiben die Lippen flach, klingt „Haus“ undeutlich.',
        correctionTip: 'Am Ende von „au“ die Lippen sichtbar zu einem runden „u“ formen.'
      }
    ],
    organRoles: {
      lips: 'Erst weit offen, dann rund nach vorne gestülpt.',
      'tongue-tip': 'Zieht sich leicht zurück.',
      'tongue-blade': 'Senkt sich ab.',
      'tongue-dorsum': 'Gleitet von unten-mitte nach hinten-oben.',
      'tongue-root': 'Bewegt sich leicht nach hinten.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Weit offen.',
      'vocal-cords': 'Stimmhaft (~156 Hz).'
    }
  },
  oy_diphthong: {
    subCategory: 'Fallender Diphthong [ɔʏ̯] (hinten-gerundet nach vorne-gerundet)',
    graphemes: 'eu, äu',
    comparisonNote:
      'Gleitet vom halboffenen hinteren /ɔ/ kontinuierlich nach vorne-oben zur gerundeten /ʏ/-Position.',
    wordMeanings: {
      Deutsch: 'deutsche Sprache',
      heute: 'am gegenwärtigen Tag',
      Bäume: 'Plural von Baum'
    },
    articulationSteps: [
      '1. Start bei halboffenem /ɔ/ mit runden Lippen.',
      '2. Gleitbewegung der Zunge nach vorne-oben zu /ʏ/.',
      '3. Lippenrundung bis zum Ende beibehalten.'
    ],
    mistakes: [
      {
        confusedWith: 'Gespreiztes Ende wie „oi“',
        mistakeDescription: 'Mundwinkel werden oft breit gezogen statt rund zu bleiben.',
        correctionTip: 'Lippen während des gesamten Diphthongs leicht gerundet halten.'
      }
    ],
    organRoles: {
      lips: 'Durchgehend gerundet.',
      'tongue-tip': 'Gleitet nach vorne.',
      'tongue-blade': 'Hebt sich im zweiten Teil.',
      'tongue-dorsum': 'Gleitet von hinten-mitte nach vorne-oben.',
      'tongue-root': 'Bewegt sich nach vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Zielbereich für die Vorderzunge.',
      'vocal-cords': 'Stimmhaft (~158 Hz).'
    }
  },

  // === 6. CONSONANTS: PLOSIVES ===
  p_voiceless: {
    subCategory: 'Stimmloser bilabialer Plosiv (behaucht [pʰ])',
    graphemes: 'p, pp, b (im Auslaut)',
    comparisonNote:
      'Gleicher Lippenverschluss wie /b/, aber stimmlos und mit kräftiger Aspiration [pʰ] bei der Lösung.',
    wordMeanings: {
      Pass: 'Reisepass',
      Papa: 'Vater (familiär)',
      Suppe: 'flüssige Speise'
    },
    articulationSteps: [
      '1. Lippen fest verschließen und Luftdruck im Mund stauen.',
      '2. Stimmlippen geöffnet lassen (stimmlos).',
      '3. Lippen explosionsartig mit deutlichem Hauch [pʰ] öffnen.'
    ],
    mistakes: [
      {
        confusedWith: 'Unbehauchtes /p/ (klingt für Deutsche wie /b/)',
        mistakeDescription: 'Fehlende Behauchung führt zur Verwechslung von „Pass“ und „Bass“.',
        correctionTip: 'Papiertest nutzen: Beim /p/ muss ein deutlicher Luftstoß das Papier bewegen.'
      }
    ],
    organRoles: {
      lips: 'Pressen sich fest zusammen (Verschluss) und sprengen mit Hauchstoß auf.',
      'tongue-tip': 'Neutral.',
      'tongue-blade': 'Neutral.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Geschlossen zum Druckaufbau.',
      'hard-palate': 'Keine Beteiligung.',
      'vocal-cords': 'Weit geöffnet (stimmlos).'
    }
  },
  b_voiced: {
    subCategory: 'Stimmhafter bilabialer Plosiv',
    graphemes: 'b, bb',
    comparisonNote:
      'Gleicher Lippenverschluss wie /p/, aber stimmhaft und ohne starke Aspiration beim Öffnen.',
    wordMeanings: {
      Buch: 'gebundenes Druckwerk',
      Brot: 'Backware aus Mehl',
      abends: 'am Abend'
    },
    articulationSteps: [
      '1. Beide Lippen locker schließen.',
      '2. Stimmlippen während des Verschlusses schwingen lassen.',
      '3. Sanft ohne Hauchstoß öffnen.'
    ],
    mistakes: [
      {
        confusedWith: 'Auslautverhärtung vergessen („ab“ als [ab] statt [ap])',
        mistakeDescription: 'Am Silbenende wird „b“ im Deutschen immer stimmlos als /p/ gesprochen.',
        correctionTip: 'Nur vor Vokal/Sonorant im Anlaut stimmhaft als /b/ sprechen.'
      }
    ],
    organRoles: {
      lips: 'Sanfter Verschluss und unbehauchte Lösung.',
      'tongue-tip': 'Neutral.',
      'tongue-blade': 'Neutral.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Keine Beteiligung.',
      'vocal-cords': 'Stimmhaft schwingend (~140 Hz).'
    }
  },
  t_voiceless: {
    subCategory: 'Stimmloser alveolarer Plosiv (behaucht [tʰ])',
    graphemes: 't, tt, th, dt, d (im Auslaut)',
    comparisonNote:
      'Verschluss am Zahndamm wie /d/, jedoch stimmlos und mit starker Aspiration [tʰ] im betonten Anlaut.',
    wordMeanings: {
      Tag: 'Tageszeit / 24 Stunden',
      Tisch: 'Möbelstück mit Platte',
      Mutter: 'weiblicher Elternteil'
    },
    articulationSteps: [
      '1. Zungenspitze fest an den oberen Zahndamm (Alveolen) pressen.',
      '2. Luftdruck bei geöffneten Stimmlippen aufbauen.',
      '3. Zungenspitze schnell mit Hauchstoß lösen.'
    ],
    mistakes: [
      {
        confusedWith: 'Unbehauchtes dentales /t/',
        mistakeDescription: 'Ohne Aspiration klingt „Tag“ fast wie „Dag“.',
        correctionTip: 'Zungenspitze etwas höher am Zahndamm ansetzen und kräftig behauchen.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Bildet dichten Verschluss am Zahndamm und löst sich sprengend.',
      'tongue-blade': 'Stützt den alveolaren Verschluss.',
      'tongue-dorsum': 'Leicht angehoben.',
      'tongue-root': 'Leicht vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Vorderer Zahndamm dient als Verschlussstelle.',
      'vocal-cords': 'Weit geöffnet (stimmlos).'
    }
  },
  d_voiced: {
    subCategory: 'Stimmhafter alveolarer Plosiv',
    graphemes: 'd, dd',
    comparisonNote:
      'Gleiche alveolare Zungenposition wie /t/, aber stimmhaft und ohne Aspiration.',
    wordMeanings: {
      Deutsch: 'deutsche Sprache',
      danke: 'Ausdruck des Dankes',
      Bruder: 'männliches Geschwisterteil'
    },
    articulationSteps: [
      '1. Zungenspitze leicht an den oberen Zahndamm legen.',
      '2. Stimmlippen weich schwingen lassen.',
      '3. Ohne Luftstoß lösen.'
    ],
    mistakes: [
      {
        confusedWith: 'Implosives vietnamesisches /ɗ/ oder fehlende Auslautverhärtung',
        mistakeDescription: 'Am Wortende („Hund“, „Kind“) wird „d“ zu stimmlosem /t/.',
        correctionTip: 'Weich am Zahndamm lösen; im Silbenauslaut stets /t/ sprechen.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Sanfter Verschluss am Zahndamm.',
      'tongue-blade': 'Leicht angehoben.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Leicht vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Alveolarrücken.',
      'vocal-cords': 'Stimmhaft (~145 Hz).'
    }
  },
  k_voiceless: {
    subCategory: 'Stimmloser velarer Plosiv (behaucht [kʰ])',
    graphemes: 'k, ck, g (im Auslaut), ch (vor s)',
    comparisonNote:
      'Velarer Verschluss wie /ɡ/, jedoch stimmlos mit deutlicher Behauchung [kʰ].',
    wordMeanings: {
      Kind: 'junger Mensch',
      Kaffee: 'Heißgetränk aus gerösteten Bohnen',
      Musik: 'Tonkunst'
    },
    articulationSteps: [
      '1. Hinteren Zungenrücken fest gegen den weichen Gaumen (Velum) drücken.',
      '2. Druck bei offener Glottis stauen.',
      '3. Verschluss mit kräftigem Hauch [kʰ] lösen.'
    ],
    mistakes: [
      {
        confusedWith: 'Unbehauchtes /k/',
        mistakeDescription: 'Im Anlaut ohne Hauch verwechselbar mit /ɡ/.',
        correctionTip: 'Bei „Kind“ und „Kaffee“ hörbaren Atemstoß mitsprechen.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Tief im vorderen Mundraum.',
      'tongue-blade': 'Abgesenkt.',
      'tongue-dorsum': 'Verschließt das Gaumensegel fest und löst sich sprengend.',
      'tongue-root': 'Hebt den Zungenrücken.',
      'soft-palate': 'Verschlussstelle und Nasenabdichtung.',
      'hard-palate': 'Unbeteiligt.',
      'vocal-cords': 'Stimmlos geöffnet.'
    }
  },
  g_voiced: {
    subCategory: 'Stimmhafter velarer Plosiv',
    graphemes: 'g, gg',
    comparisonNote:
      'Gleicher velarer Verschluss wie /k/, jedoch stimmhaft und unbehaucht.',
    wordMeanings: {
      gut: 'positiv',
      gehen: 'zu Fuß laufen',
      Auge: 'Sehorgan'
    },
    articulationSteps: [
      '1. Hinterzunge an den weichen Gaumen anlegen.',
      '2. Stimmton im Kehlkopf aktivieren.',
      '3. Sanft ohne Hauch öffnen.'
    ],
    mistakes: [
      {
        confusedWith: 'Frikatives /ɣ/ oder fehlende Auslautverhärtung („Tag“)',
        mistakeDescription: 'Im Auslaut („Tag“) wird „g“ als /k/ gesprochen (Ausnahme: „-ig“ = /ɪç/).',
        correctionTip: 'Sauberen Verschluss bilden; am Wortende zu /k/ verhärten.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Tief.',
      'tongue-blade': 'Tief.',
      'tongue-dorsum': 'Berührt den weichen Gaumen fest und löst sich sanft.',
      'tongue-root': 'Leicht zurück.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Unbeteiligt.',
      'vocal-cords': 'Stimmhaft (~140 Hz).'
    }
  },
  glottal_stop: {
    subCategory: 'Stimmloser glottaler Plosiv (Knacklaut)',
    graphemes: '(vor jedem anlautenden Vokal)',
    comparisonNote:
      'Vollständiger Verschluss der Stimmlippen vor dem Vokaleinsatz — Gegenstück zum weit geöffneten /h/.',
    wordMeanings: {
      Apfel: 'Kernobst',
      Einheit: 'zusammengehöriges Ganzes',
      beachten: 'aufmerksam wahrnehmen'
    },
    articulationSteps: [
      '1. Stimmlippen kurz vollständig schließen.',
      '2. Mundraum für den folgenden Vokal vorbereiten.',
      '3. Glottis abrupt mit klarem Einsatz öffnen.'
    ],
    mistakes: [
      {
        confusedWith: 'Vokalverschleifung / Liaison',
        mistakeDescription: 'Wörter wie „be-achten“ oder „ein Apfel“ werden oft ohne Trennung verbunden.',
        correctionTip: 'Vor jedem betonten Wort- oder Stammanlaut mit Vokal kurz absetzen.'
      }
    ],
    organRoles: {
      lips: 'Bereit für den Folgevokal.',
      'tongue-tip': 'Neutral.',
      'tongue-blade': 'Neutral.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Unbeteiligt.',
      'vocal-cords': 'Schließen komplett (Glottis = 0) und öffnen sich sprengend.'
    }
  },

  // === 7. CONSONANTS: FRICATIVES ===
  f_voiceless: {
    subCategory: 'Stimmloser labiodentaler Frikativ',
    graphemes: 'f, ff, v (Vater), ph',
    comparisonNote: 'Gleiche Lippen-Zahn-Enge wie /v/, aber stimmlos mit starkem Reibestrom.',
    wordMeanings: { Fisch: 'Wassertier', Vater: 'männlicher Elternteil', schlafen: 'ruhen, träumen' },
    articulationSteps: [
      '1. Obere Schneidezähne leicht auf die Unterlippe setzen.',
      '2. Stimmlose Luft durch den schmalen Spalt blasen.'
    ],
    mistakes: [
      {
        confusedWith: 'Aussprache von deutschem „v“ als /v/',
        mistakeDescription: 'In deutschen Erbwörtern (Vater, vier, viel) wird „v“ als /f/ gesprochen.',
        correctionTip: 'Bei deutschen Stammwörtern „v“ konsequent stimmlos wie /f/ sprechen.'
      }
    ],
    organRoles: {
      lips: 'Unterlippe berührt die oberen Schneidezähne.',
      'tongue-tip': 'Entspannt.',
      'tongue-blade': 'Entspannt.',
      'tongue-dorsum': 'Entspannt.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Obere Zähne bilden die Reibeenge.',
      'vocal-cords': 'Stimmlos geöffnet.'
    }
  },
  v_voiced: {
    subCategory: 'Stimmhafter labiodentaler Frikativ',
    graphemes: 'w, v (Vase, Klavier)',
    comparisonNote: 'Gleiche Position wie /f/, aber mit aktiver Stimmbandvibration.',
    wordMeanings: { Wasser: 'Flüssigkeit H₂O', Welt: 'Erde, Gesamtheit', Vase: 'Blumengefäß' },
    articulationSteps: [
      '1. Obere Zähne sanft an die Unterlippe legen.',
      '2. Stimmlippen schwingen lassen.'
    ],
    mistakes: [
      {
        confusedWith: 'Englisches bilabiales /w/',
        mistakeDescription: 'Deutsches „w“ wird niemals mit gerundeten Lippen ohne Zahnkontakt gesprochen.',
        correctionTip: 'Immer Zahn-Lippen-Kontakt herstellen.'
      }
    ],
    organRoles: {
      lips: 'Unterlippe an oberen Zähnen (nicht gerundet).',
      'tongue-tip': 'Entspannt.',
      'tongue-blade': 'Entspannt.',
      'tongue-dorsum': 'Entspannt.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Zahn-Lippen-Kontakt.',
      'vocal-cords': 'Stimmhaft (~145 Hz).'
    }
  },
  s_voiceless: {
    subCategory: 'Stimmloser alveolarer Frikativ',
    graphemes: 'ß, ss, s (im Auslaut)',
    comparisonNote: 'Gleiche Rillenbildung wie /z/, jedoch stimmlos und scharf zischend.',
    wordMeanings: { Straße: 'Verkehrsweg', Eis: 'gefrorenes Wasser / Speiseeis', essen: 'Nahrung aufnehmen' },
    articulationSteps: [
      '1. Zungenblatt mit schmaler Mittelrille zum Zahndamm heben.',
      '2. Stimmlose Luft scharf durch die Zähne zischen lassen.'
    ],
    mistakes: [
      {
        confusedWith: 'Stimmhaftes /z/',
        mistakeDescription: 'Im Anlaut vor Vokal ist „s“ stimmhaft (/z/), nach Vokal als „ss/ß“ stimmlos (/s/).',
        correctionTip: '„ss“ und „ß“ immer scharf und ohne Stimme sprechen.'
      }
    ],
    organRoles: {
      lips: 'Leicht geöffnet.',
      'tongue-tip': 'Bildet eine enge Rille am Zahndamm.',
      'tongue-blade': 'Seitlich abgedichtet.',
      'tongue-dorsum': 'Leicht gehoben.',
      'tongue-root': 'Leicht vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Alveolare Reibeenge (~5600 Hz).',
      'vocal-cords': 'Stimmlos geöffnet.'
    }
  },
  z_voiced: {
    subCategory: 'Stimmhafter alveolarer Frikativ',
    graphemes: 's (im Anlaut vor Vokal)',
    comparisonNote: 'Alveolare Reibeenge wie /s/, aber durchgehend stimmhaft summend.',
    wordMeanings: { Sonne: 'Zentralgestirn', reisen: 'unterwegs sein', Musik: 'Tonkunst' },
    articulationSteps: [
      '1. Zunge wie bei /s/ am Zahndamm positionieren.',
      '2. Stimmton (Summen im Kehlkopf) hinzuschalten.'
    ],
    mistakes: [
      {
        confusedWith: 'Stimmloses /s/',
        mistakeDescription: '„Sonne“ wird oft stimmlos wie „Xonne“ ausgesprochen.',
        correctionTip: 'Vibration am Hals prüfen: Bei s + Vokal muss die Stimme schwingen.'
      }
    ],
    organRoles: {
      lips: 'Leicht geöffnet.',
      'tongue-tip': 'Enge Rille am Zahndamm.',
      'tongue-blade': 'Seitlich abgedichtet.',
      'tongue-dorsum': 'Leicht gehoben.',
      'tongue-root': 'Leicht vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Alveolare Enge.',
      'vocal-cords': 'Stimmhaft (~145 Hz).'
    }
  },
  sch_voiceless: {
    subCategory: 'Stimmloser postalveolarer Frikativ',
    graphemes: 'sch, s (in sp-, st-)',
    comparisonNote: 'Gegenüber /ç/ hebt sich die Zunge weiter vorne am Postalveolarbereich bei runden Lippen.',
    wordMeanings: { Schule: 'Bildungseinrichtung', Tisch: 'Möbelstück', Stadt: 'große Siedlung' },
    articulationSteps: [
      '1. Lippen deutlich nach vorne runden.',
      '2. Zungenblatt hinter dem Zahndamm wölben.',
      '3. Stimmlose Luft breit hindurchströmen lassen.'
    ],
    mistakes: [
      {
        confusedWith: '/s/ bei „sp-“ und „st-“',
        mistakeDescription: '„Stadt“ wird fälschlich mit /s/ statt /ʃ/ begonnen.',
        correctionTip: '„sp-“ und „st-“ im Silbenanlaut stets als /ʃp/, /ʃt/ sprechen.'
      }
    ],
    organRoles: {
      lips: 'Stark gerundet und vorgeschoben.',
      'tongue-tip': 'Hinter dem Zahndamm gehoben.',
      'tongue-blade': 'Postalveolar gewölbt.',
      'tongue-dorsum': 'Unterstützend gehoben.',
      'tongue-root': 'Leicht vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Postalveolare Reibeenge.',
      'vocal-cords': 'Stimmlos geöffnet.'
    }
  },
  zh_voiced: {
    subCategory: 'Stimmhafter postalveolarer Frikativ',
    graphemes: 'g, j (in Fremdwörtern: Garage, Journalist)',
    comparisonNote: 'Gleiche gerundete Zischstellung wie /ʃ/, jedoch stimmhaft.',
    wordMeanings: { Garage: 'Autoabstellraum', Journalist: 'Pressemitarbeiter', Orange: 'Zitrusfrucht' },
    articulationSteps: [
      '1. Lippen und Zunge wie bei /ʃ/ einstellen.',
      '2. Stimme weich hinzuschalten.'
    ],
    mistakes: [
      {
        confusedWith: 'Affrikate /d͡ʒ/',
        mistakeDescription: 'Kein vorangehender /d/-Verschluss wie im Englischen.',
        correctionTip: 'Weich fließend ohne Plosiv-Anstoß reiben.'
      }
    ],
    organRoles: {
      lips: 'Leicht gerundet.',
      'tongue-tip': 'Hinter dem Zahndamm (kein Verschluss).',
      'tongue-blade': 'Postalveolar gewölbt.',
      'tongue-dorsum': 'Gehoben.',
      'tongue-root': 'Vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Postalveolare Enge.',
      'vocal-cords': 'Stimmhaft (~140 Hz).'
    }
  },
  ch_ich: {
    subCategory: 'Stimmloser palataler Frikativ (Ich-Laut)',
    graphemes: 'ch (nach i, e, ä, ö, ü, ei, eu, l, n, r), -ig',
    comparisonNote:
      'Im Gegensatz zum velaren /x/ wölbt sich beim /ç/ das vordere Zungenblatt hoch an den harten Gaumen.',
    wordMeanings: { ich: 'Personalpronomen 1. Pers. Sg.', Milch: 'Nährflüssigkeit', lächeln: 'freundlich lächeln' },
    articulationSteps: [
      '1. Zungenspitze fest hinter den unteren Schneidezähnen halten.',
      '2. Vorderen Zungenrücken dicht unter den harten Gaumen wölben.',
      '3. Stimmlose Luft fein durch die Engstelle strömen lassen.'
    ],
    mistakes: [
      {
        confusedWith: 'Affrikate /tɕ/ oder /ʃ/',
        mistakeDescription: 'Zungenspitze wird angehoben oder Lippen werden gerundet.',
        correctionTip: 'Wie ein stimmlos geflüstertes „j“ mit Zungenspitze unten aussprechen.'
      }
    ],
    organRoles: {
      lips: 'Natürlich geöffnet (nicht gerundet).',
      'tongue-tip': 'Unten hinter den unteren Schneidezähnen fixiert.',
      'tongue-blade': 'Hoch gegen den harten Gaumen gehoben.',
      'tongue-dorsum': 'Stützt die palatale Enge.',
      'tongue-root': 'Vorverlagert.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Ort der hohen palatalen Turbulenz (~3000 Hz).',
      'vocal-cords': 'Stimmlos geöffnet.'
    }
  },
  ch_ach: {
    subCategory: 'Stimmloser velarer Frikativ (Ach-Laut)',
    graphemes: 'ch (nach a, o, u, au)',
    comparisonNote:
      'Während /ç/ vorne am harten Gaumen gebildet wird, hebt sich beim /x/ der hintere Zungenrücken zum weichen Gaumen.',
    wordMeanings: { Buch: 'Druckwerk', machen: 'tun, herstellen', Nacht: 'Dunkelheit' },
    articulationSteps: [
      '1. Zungenspitze tief am Mundboden halten.',
      '2. Hinteren Zungenrücken dicht ans Gaumensegel heben.',
      '3. Stimmlose Luft gleichmäßig reibend ausströmen lassen.'
    ],
    mistakes: [
      {
        confusedWith: 'Plosiv /k/ am Wortende',
        mistakeDescription: 'Zungenrücken verschließt den Luftweg komplett statt einen Spalt offenzuhalten.',
        correctionTip: 'Reibelaut am Wortende ca. 0,3 Sekunden hörbar ausströmen lassen.'
      }
    ],
    organRoles: {
      lips: 'Neutral geöffnet.',
      'tongue-tip': 'Tief im vorderen Mundraum.',
      'tongue-blade': 'Abgesenkt.',
      'tongue-dorsum': 'Hoch zum weichen Gaumen gewölbt.',
      'tongue-root': 'Nach hinten verlagert.',
      'soft-palate': 'Bildet die obere Reibefläche und dichtet den Nasenraum ab.',
      'hard-palate': 'Kein Kontakt.',
      'vocal-cords': 'Stimmlos geöffnet.'
    }
  },
  r_uvular: {
    subCategory: 'Stimmhafter uvularer Frikativ / Approximant',
    graphemes: 'r, rr, rh (im Silbenanlaut)',
    comparisonNote:
      'Ähnlich weit hinten wie /x/, jedoch nähert sich die Zungenwurzel dem Zäpfchen bei aktiver Stimmbandvibration.',
    wordMeanings: { rot: 'Farbe Rot', reisen: 'unterwegs sein', Bruder: 'männliches Geschwisterteil' },
    articulationSteps: [
      '1. Zungenspitze ruhig hinter den unteren Zähnen belassen.',
      '2. Hinterzunge sanft Richtung Zäpfchen (Uvula) anheben.',
      '3. Stimmton einschalten und weichen Reibeklang erzeugen.'
    ],
    mistakes: [
      {
        confusedWith: 'Zungenspitzen-R (/r/) oder hartes stimmloses Kratzen',
        mistakeDescription: 'Zungenspitze wird gerollt oder im Rachen zu stark ohne Stimme gepresst.',
        correctionTip: 'Sanft vom /x/ ausgehen, Druck halbieren und Stimme einschalten.'
      }
    ],
    organRoles: {
      lips: 'Leicht gerundet vor Folgevokalen.',
      'tongue-tip': 'Passiv unten.',
      'tongue-blade': 'Tief.',
      'tongue-dorsum': 'Richtung Uvula gehoben.',
      'tongue-root': 'Nähert sich Zäpfchen und Rachen.',
      'soft-palate': 'Nasenraum geschlossen; Uvula schwingt leicht.',
      'hard-palate': 'Weit offen.',
      'vocal-cords': 'Stimmhaft schwingend (~135 Hz).'
    }
  },
  h_glottal: {
    subCategory: 'Stimmloser glottaler Frikativ (Hauchlaut)',
    graphemes: 'h (im Silbenanlaut)',
    comparisonNote:
      'Weit geöffnete Glottis für freien Hauchlaut, im Gegensatz zum geschlossenen Knacklaut /ʔ/.',
    wordMeanings: { Haus: 'Wohngebäude', heute: 'an diesem Tag', Hand: 'Greiforgan' },
    articulationSteps: [
      '1. Mundraum bereits für den folgenden Vokal einstellen.',
      '2. Warme Atemluft frei durch die offene Glottis hauchen.'
    ],
    mistakes: [
      {
        confusedWith: 'Stummes Dehnungs-h („sehen“, „gehen“)',
        mistakeDescription: 'Nach Vokal zeigt „h“ nur die Vokallänge an und wird nicht gesprochen.',
        correctionTip: 'Nur im Wort- oder Stammanlaut als Hauchlaut /h/ sprechen.'
      }
    ],
    organRoles: {
      lips: 'Vorbereitet für Folgevokal.',
      'tongue-tip': 'Entspannt.',
      'tongue-blade': 'Entspannt.',
      'tongue-dorsum': 'Entspannt.',
      'tongue-root': 'Offener Rachen.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Offen.',
      'vocal-cords': 'Weit geöffnet für Hauchlaut.'
    }
  },

  // === 8. CONSONANTS: AFFRICATES ===
  pf_affricate: {
    subCategory: 'Stimmlose labiale Affrikate',
    graphemes: 'pf',
    comparisonNote:
      'Zweiphasig: Erst Lippenverschluss wie /p/ (30–50%), dann direkter Übergang in die labiodentale Enge /f/ (50–75%).',
    wordMeanings: { Pferd: 'Reittier', Apfel: 'Kernobst', Kopf: 'oberster Körperteil' },
    articulationSteps: [
      '1. Phase 1: Lippen wie bei /p/ fest schließen.',
      '2. Phase 2: Direkt in den labiodentalen Reibestrom /f/ überleiten.',
      '3. Stimmlos in einem einzigen Atemstoß verbinden.'
    ],
    mistakes: [
      {
        confusedWith: 'Einfaches /f/ („Ferd“ statt „Pferd“)',
        mistakeDescription: 'Der bilabiale Verschluss am Anfang wird oft weggelassen.',
        correctionTip: 'Lippen vor dem /f/ kurz fest aufeinanderpressen.'
      }
    ],
    organRoles: {
      lips: 'Erst bilabial geschlossen (/p/), dann Unterlippe an oberen Zähnen (/f/).',
      'tongue-tip': 'Entspannt.',
      'tongue-blade': 'Neutral.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Obere Zähne bilden Phase 2.',
      'vocal-cords': 'Stimmlos geöffnet.'
    }
  },
  ts_affricate: {
    subCategory: 'Stimmlose alveolare Affrikate',
    graphemes: 'z, tz, ts, c (vor e, i)',
    comparisonNote:
      'Deutsches „z“ kombiniert alveolaren Verschluss /t/ mit scharfem Reibelaut /s/ — niemals stimmhaft wie englisches /z/.',
    wordMeanings: { Zeit: 'Dauer, Uhrzeit', Zug: 'Eisenbahn', Katze: 'Haustier' },
    articulationSteps: [
      '1. Phase 1: Zungenspitze an den Zahndamm wie bei /t/.',
      '2. Phase 2: Sofort in ein scharfes /s/ übergehen.',
      '3. Ohne Stimmton ausführen.'
    ],
    mistakes: [
      {
        confusedWith: 'Stimmhaftes /z/ („zoo“)',
        mistakeDescription: 'Deutsches „z“ wird fälschlich weich wie /z/ gelesen.',
        correctionTip: 'Deutsches „z“ = stets hartes /t͡s/ wie in „Pizza“.'
      }
    ],
    organRoles: {
      lips: 'Leicht flach.',
      'tongue-tip': 'Erst Verschluss am Zahndamm (/t/), dann enge Zischrille (/s/).',
      'tongue-blade': 'Dichtet seitlich ab.',
      'tongue-dorsum': 'Leicht gehoben.',
      'tongue-root': 'Vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Alveolarrücken.',
      'vocal-cords': 'Stimmlos.'
    }
  },
  tsch_affricate: {
    subCategory: 'Stimmlose postalveolare Affrikate',
    graphemes: 'tsch',
    comparisonNote:
      'Verbindet alveolaren Verschluss /t/ direkt mit gerundetem postalveolarem /ʃ/.',
    wordMeanings: { Deutsch: 'deutsche Sprache', tschüss: 'informeller Abschiedsgruß', Kutsche: 'Pferdewagen' },
    articulationSteps: [
      '1. Lippen runden und Zunge am Zahndamm schließen.',
      '2. Kräftig in das Reibegeräusch /ʃ/ lösen.'
    ],
    mistakes: [
      {
        confusedWith: 'Ungerundetes /tɕ/',
        mistakeDescription: 'Ohne Lippenrundung klingt „tsch“ zu dünn.',
        correctionTip: 'Lippen wie bei /ʃ/ vorstülpen.'
      }
    ],
    organRoles: {
      lips: 'Nach vorne gerundet.',
      'tongue-tip': 'Verschluss und anschließende Lösung.',
      'tongue-blade': 'Postalveolar gewölbt.',
      'tongue-dorsum': 'Gehoben.',
      'tongue-root': 'Vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Postalveolarer Bereich.',
      'vocal-cords': 'Stimmlos.'
    }
  },

  // === 9. CONSONANTS: NASALS ===
  m_nasal: {
    subCategory: 'Stimmhafter bilabialer Nasal',
    graphemes: 'm, mm',
    comparisonNote:
      'Gleicher Lippenverschluss wie /b/, jedoch ist das Gaumensegel abgesenkt, sodass die Luft durch die Nase entweicht.',
    wordMeanings: { mein: 'Possessivpronomen', Mann: 'männliche Person', Name: 'Benennung' },
    articulationSteps: [
      '1. Lippen locker schließen.',
      '2. Gaumensegel senken (Nasenweg öffnen).',
      '3. Stimmhaft durch die Nase summen.'
    ],
    mistakes: [
      {
        confusedWith: 'Ungenügender Lippenschluss am Wortende',
        mistakeDescription: 'Bei „Baum“ oder „am“ werden die Lippen manchmal nicht ganz geschlossen.',
        correctionTip: 'Lippen zum Schluss fest zusammenführen.'
      }
    ],
    organRoles: {
      lips: 'Vollständig geschlossen.',
      'tongue-tip': 'Entspannt.',
      'tongue-blade': 'Entspannt.',
      'tongue-dorsum': 'Neutral.',
      'tongue-root': 'Neutral.',
      'soft-palate': 'ABGESENKT: Öffnet den Luftweg in die Nasenhöhle.',
      'hard-palate': 'Unbeteiligt.',
      'vocal-cords': 'Stimmhaft (~145 Hz).'
    }
  },
  n_nasal: {
    subCategory: 'Stimmhafter alveolarer Nasal',
    graphemes: 'n, nn',
    comparisonNote:
      'Alveolarer Zungenverschluss wie /d/, aber mit gesenktem Gaumensegel für freien Nasalluftstrom.',
    wordMeanings: { Nacht: 'Dunkelheit', Name: 'Bezeichnung', Sonne: 'Gestirn' },
    articulationSteps: [
      '1. Zungenspitze komplett an den oberen Zahndamm legen.',
      '2. Gaumensegel senken.',
      '3. Stimmton durch die Nase strömen lassen.'
    ],
    mistakes: [
      {
        confusedWith: 'Nasalierung des vorangehenden Vokals ohne Zungenschluss',
        mistakeDescription: 'Im Auslaut bleibt die Zungenspitze teils unten.',
        correctionTip: 'Zungenspitze sauber bis zum Zahndamm führen.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Dichtet am Zahndamm den Mundweg ab.',
      'tongue-blade': 'Seitlich geschlossen.',
      'tongue-dorsum': 'Leicht gehoben.',
      'tongue-root': 'Vorne.',
      'soft-palate': 'ABGESENKT für freien Nasenstrom.',
      'hard-palate': 'Zahndamm dient als Mundverschluss.',
      'vocal-cords': 'Stimmhaft (~145 Hz).'
    }
  },
  ng_nasal: {
    subCategory: 'Stimmhafter velarer Nasal',
    graphemes: 'ng, n (vor k)',
    comparisonNote:
      'Im Gegensatz zu /n/ senkt sich die Zungenspitze ab und der hintere Zungenrücken schließt am gesenkten Velum.',
    wordMeanings: { singen: 'Melodien mit der Stimme erzeugen', Finger: 'Glied der Hand', danke: 'Dankwort' },
    articulationSteps: [
      '1. Zungenspitze tief hinter den unteren Zähnen halten.',
      '2. Hinteren Zungenrücken an das gesenkte Gaumensegel heben.',
      '3. Ohne nachfolgendes /ɡ/ rein nasal ausklingen lassen.'
    ],
    mistakes: [
      {
        confusedWith: 'Hörbares /ɡ/ oder /k/ nach „ng“ („sing-gen“)',
        mistakeDescription: 'Schriftbild „g“ verleitet dazu, am Ende ein /ɡ/ zu sprengen.',
        correctionTip: '„ng“ in „singen“ oder „lang“ ist nur EIN einziger Nasallaut /ŋ/ ohne /ɡ/!'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Entspannt am Mundboden.',
      'tongue-blade': 'Abgesenkt.',
      'tongue-dorsum': 'Berührt das gesenkte Gaumensegel.',
      'tongue-root': 'Zurückgezogen.',
      'soft-palate': 'ABGESENKT und berührt den Zungenrücken.',
      'hard-palate': 'Unbeteiligt.',
      'vocal-cords': 'Stimmhaft (~140 Hz).'
    }
  },

  // === 10. CONSONANTS: APPROXIMANTS & LATERAL ===
  l_lateral: {
    subCategory: 'Stimmhafter alveolarer Lateral',
    graphemes: 'l, ll',
    comparisonNote:
      'Mittelkontakt am Zahndamm wie /n/, aber das Gaumensegel bleibt geschlossen und die Luft strömt seitlich an der Zunge vorbei.',
    wordMeanings: { Liebe: 'Zuneigung', lächeln: 'lächelnd blicken', Öl: 'Flüssigfett' },
    articulationSteps: [
      '1. Zungenspitze zentral am oberen Zahndamm ansetzen.',
      '2. Beide Zungenränder absenken (seitlicher Luftstrom in der Gaumenansicht).',
      '3. Stimmhaft als helles L (auch am Wortende) sprechen.'
    ],
    mistakes: [
      {
        confusedWith: 'Englisches „dark L“ (/ɫ/) am Silbenende',
        mistakeDescription: 'Zurückziehen der Hinterzunge lässt „Öl“ oder „viel“ dumpf klingen.',
        correctionTip: 'Deutsches /l/ ist immer ein helles L mit flacher, vorderer Zunge.'
      }
    ],
    organRoles: {
      lips: 'Neutral.',
      'tongue-tip': 'Zentraler Kontakt am Zahndamm.',
      'tongue-blade': 'Ränder abgesenkt für seitlichen Luftaustritt.',
      'tongue-dorsum': 'Flach und vorne gehalten (helles L).',
      'tongue-root': 'Vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Nur zentral am Zahndamm berührt.',
      'vocal-cords': 'Stimmhaft (~150 Hz).'
    }
  },
  j_palatal: {
    subCategory: 'Stimmhafter palataler Approximant',
    graphemes: 'j, y',
    comparisonNote:
      'Ähnliche palatale Zungenwölbung wie /ç/, aber etwas weiter geöffnet und durchgehend stimmhaft.',
    wordMeanings: { ja: 'Zustimmung', Jahr: 'Zeitraum von 12 Monaten', jung: 'nicht alt' },
    articulationSteps: [
      '1. Zungenspitze hinter die unteren Schneidezähne legen.',
      '2. Vorderzunge nahe an den harten Gaumen wölben.',
      '3. Stimmhaft weich in den Folgevokal gleiten.'
    ],
    mistakes: [
      {
        confusedWith: 'Englisches /d͡ʒ/ („jet“)',
        mistakeDescription: 'Deutsches „j“ hat keinen plosiven d-Anstoß.',
        correctionTip: 'Wie englisches „y“ in „yes“ ohne Verschluss aussprechen.'
      }
    ],
    organRoles: {
      lips: 'Leicht geöffnet.',
      'tongue-tip': 'Hinter den unteren Schneidezähnen.',
      'tongue-blade': 'Hoch Richtung harten Gaumen.',
      'tongue-dorsum': 'Vorne hoch gewölbt.',
      'tongue-root': 'Vorne.',
      'soft-palate': 'Geschlossen.',
      'hard-palate': 'Annäherung ohne starke Turbulenz.',
      'vocal-cords': 'Stimmhaft (~160 Hz).'
    }
  }
};
