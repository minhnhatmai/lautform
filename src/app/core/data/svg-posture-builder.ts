import { SvgKeyframes, SvgOrganPaths } from '../models/phoneme.model';

function combineLips(upperLip: string, lowerLip: string): string {
  return `${upperLip} ${lowerLip}`;
}

export const DEFAULT_NASAL_AIRFLOW_PATH =
  'M 230 410 C 218 338, 210 250, 214 188 C 222 140, 286 128, 368 138 C 428 148, 472 168, 514 182';

const VELUM_RAISED =
  'M 280 166 C 250 164, 218 172, 206 192 C 200 206, 208 220, 220 218 C 230 216, 236 202, 246 190 C 256 180, 268 178, 280 178 Z';

const VELUM_NEUTRAL =
  'M 280 166 C 254 168, 234 184, 226 208 C 222 222, 228 234, 238 232 C 248 230, 252 214, 258 200 C 264 186, 272 178, 280 178 Z';

const VELUM_LOWERED_NASAL =
  'M 280 166 C 260 176, 246 196, 242 224 C 240 238, 248 248, 258 242 C 266 236, 268 218, 272 204 C 276 190, 278 182, 280 178 Z';

const VELUM_UVULAR =
  'M 280 166 C 250 164, 220 174, 208 194 C 204 210, 220 226, 234 224 C 244 222, 244 206, 252 194 C 260 182, 270 178, 280 178 Z';

export type LipShapePreset =
  | 'neutral'
  | 'tight_rounded'
  | 'mid_rounded'
  | 'open_rounded'
  | 'spread'
  | 'open_wide'
  | 'bilabial_seal'
  | 'labiodental';

function getLipGeometry(shape: LipShapePreset): {
  upperLip: string;
  lowerLip: string;
  frontLipAperture: SvgOrganPaths['frontLipAperture'];
  isLabiodental?: boolean;
} {
  switch (shape) {
    case 'tight_rounded':
      return {
        upperLip: 'M 444 178 C 468 184, 490 204, 488 224 C 486 232, 452 226, 430 198 Z',
        lowerLip: 'M 426 266 C 450 242, 486 234, 488 244 C 490 264, 468 286, 442 294 Z',
        frontLipAperture: {
          rx: 11,
          ry: 7,
          lipThickness: 15,
          pucker: 0.94,
          teethVisible: 0.05,
          tongueTipY: 75
        }
      };
    case 'mid_rounded':
      return {
        upperLip: 'M 444 178 C 466 184, 484 202, 482 220 C 480 228, 450 224, 430 198 Z',
        lowerLip: 'M 426 266 C 448 246, 480 238, 482 248 C 484 266, 464 288, 442 294 Z',
        frontLipAperture: {
          rx: 15,
          ry: 11,
          lipThickness: 14,
          pucker: 0.8,
          teethVisible: 0.12,
          tongueTipY: 76
        }
      };
    case 'open_rounded':
      return {
        upperLip: 'M 444 178 C 464 184, 480 200, 478 218 C 476 226, 448 222, 430 198 Z',
        lowerLip: 'M 426 266 C 446 248, 476 240, 478 250 C 480 268, 462 288, 442 294 Z',
        frontLipAperture: {
          rx: 18,
          ry: 13,
          lipThickness: 13,
          pucker: 0.72,
          teethVisible: 0.2,
          tongueTipY: 77
        }
      };
    case 'spread':
      return {
        upperLip: 'M 444 178 C 454 182, 458 198, 456 214 C 454 222, 440 218, 430 198 Z',
        lowerLip: 'M 426 266 C 438 254, 454 248, 456 258 C 458 274, 452 288, 442 294 Z',
        frontLipAperture: {
          rx: 35,
          ry: 8,
          lipThickness: 9,
          pucker: 0.0,
          teethVisible: 0.75,
          tongueTipY: 75
        }
      };
    case 'open_wide':
      return {
        upperLip: 'M 444 178 C 456 182, 464 196, 462 210 C 460 218, 442 216, 430 198 Z',
        lowerLip: 'M 426 270 C 442 258, 462 254, 464 264 C 466 280, 456 292, 442 298 Z',
        frontLipAperture: {
          rx: 33,
          ry: 17,
          lipThickness: 9,
          pucker: 0.04,
          teethVisible: 0.68,
          tongueTipY: 82
        }
      };
    case 'bilabial_seal':
      return {
        upperLip: 'M 444 178 C 460 184, 468 206, 465 234 C 462 240, 444 232, 430 198 Z',
        lowerLip: 'M 426 266 C 442 240, 462 232, 465 238 C 468 264, 458 286, 442 294 Z',
        frontLipAperture: {
          rx: 26,
          ry: 0.8,
          lipThickness: 12,
          pucker: 0.15,
          teethVisible: 0.0,
          tongueTipY: 76
        }
      };
    case 'labiodental':
      return {
        upperLip: 'M 444 178 C 458 182, 466 196, 464 212 C 462 220, 444 216, 430 198 Z',
        lowerLip: 'M 422 260 C 424 238, 432 222, 442 226 C 452 242, 450 278, 438 292 Z',
        frontLipAperture: {
          rx: 28,
          ry: 4,
          lipThickness: 11,
          pucker: 0.08,
          teethVisible: 0.95,
          tongueTipY: 76
        },
        isLabiodental: true
      };
    case 'neutral':
    default:
      return {
        upperLip: 'M 444 178 C 458 182, 466 198, 464 216 C 462 224, 444 220, 430 198 Z',
        lowerLip: 'M 426 266 C 442 252, 462 246, 464 256 C 466 272, 456 288, 442 294 Z',
        frontLipAperture: {
          rx: 28,
          ry: 9,
          lipThickness: 11,
          pucker: 0.15,
          teethVisible: 0.35,
          tongueTipY: 76
        }
      };
  }
}

export interface TongueShapeParams {
  /** Điểm gốc lưỡi sau (x: 214..262, y: 204..265) */
  rootTopX: number;
  rootTopY: number;
  /** Đỉnh thân lưỡi (x: 270..350, y: 162..245) */
  dorsumX: number;
  dorsumY: number;
  /** Phần trước lưỡi / phiến lưỡi (x: 344..402, y: 166..236) */
  bladeX: number;
  bladeY: number;
  /** Đầu lưỡi (x: 386..418, y: 186..256) */
  tipX: number;
  tipY: number;
}

/**
 * Tạo đồng thời 5 đường dẫn SVG của lưỡi (`tongueMain`, `tongueRoot`, `tongueBody`, `tongueBlade`, `tongueTip`)
 * từ cùng một hệ tọa độ để đảm bảo số lượng điểm neo luôn khớp nhau 100% khi morph bằng GSAP.
 */
function buildTonguePaths(p: TongueShapeParams): {
  tongueMain: string;
  tongueRoot: string;
  tongueBody: string;
  tongueBlade: string;
  tongueTip: string;
} {
  const rx = p.rootTopX;
  const ry = p.rootTopY;
  const dx = p.dorsumX;
  const dy = p.dorsumY;
  const bx = p.bladeX;
  const by = p.bladeY;
  const tx = p.tipX;
  const ty = p.tipY;

  const baseRootX = Math.max(232, rx - 14);
  const midRootBodyX = Math.round((rx + dx) / 2);
  const midRootBodyY = Math.round((ry + dy) / 2) - 4;
  const midBodyBladeX = Math.round((dx + bx) / 2);
  const midBodyBladeY = Math.round((dy + by) / 2) - 3;
  const underTipX = Math.max(372, tx - 26);
  const underTipY = Math.min(272, Math.max(258, ty + 18));

  const tongueMain = `M ${baseRootX} 344 C ${baseRootX - 14} 304, ${rx - 20} ${ry + 32}, ${rx} ${ry} C ${midRootBodyX} ${midRootBodyY}, ${dx - 16} ${dy - 2}, ${dx} ${dy} C ${midBodyBladeX} ${midBodyBladeY}, ${bx - 12} ${by - 2}, ${bx} ${by} C ${bx + 18} ${by + 6}, ${tx - 4} ${ty - 8}, ${tx} ${ty} C ${tx - 2} ${ty + 10}, ${underTipX + 14} ${underTipY - 4}, ${underTipX} ${underTipY} C ${underTipX - 24} 276, ${baseRootX + 44} 324, ${baseRootX} 344 Z`;

  const tongueRoot = `M ${baseRootX} 344 C ${baseRootX - 14} 304, ${rx - 20} ${ry + 32}, ${rx} ${ry} C ${rx + 18} ${ry + 18}, ${baseRootX + 52} 280, 314 314 C 294 336, ${baseRootX + 20} 345, ${baseRootX} 344 Z`;

  const tongueBody = `M ${rx} ${ry} C ${midRootBodyX} ${midRootBodyY}, ${dx - 16} ${dy - 2}, ${dx} ${dy} C ${dx + 14} ${dy + 34}, 344 276, 314 314 C ${baseRootX + 52} 280, ${rx + 18} ${ry + 18}, ${rx} ${ry} Z`;

  const tongueBlade = `M ${dx} ${dy} C ${midBodyBladeX} ${midBodyBladeY}, ${bx - 12} ${by - 2}, ${bx} ${by} C ${bx - 2} ${by + 20}, ${underTipX - 8} ${underTipY - 4}, 356 274 C 348 250, ${dx + 8} ${dy + 22}, ${dx} ${dy} Z`;

  const tongueTip = `M ${bx} ${by} C ${bx + 18} ${by + 6}, ${tx - 4} ${ty - 8}, ${tx} ${ty} C ${tx - 2} ${ty + 10}, ${underTipX + 14} ${underTipY - 4}, ${underTipX} ${underTipY} C ${underTipX + 6} ${underTipY - 14}, ${bx - 2} ${by + 12}, ${bx} ${by} Z`;

  return { tongueMain, tongueRoot, tongueBody, tongueBlade, tongueTip };
}

export interface PostureSpec {
  lipShape: LipShapePreset;
  tongue: TongueShapeParams;
  velum?: 'raised' | 'neutral' | 'lowered' | 'uvular';
  airflowPath?: string;
  nasalAirflowOpacity?: number;
  oralAirflowOpacity?: number;
  isLateralAirflow?: boolean;
  turbulenceCenter?: [number, number, number];
  paperDeflectionAngle?: number;
  glottalAperture: number;
  topDownContactPath?: string;
  topDownTongueOutline?: string;
}

export function buildOrganPaths(spec: PostureSpec): SvgOrganPaths {
  const lips = getLipGeometry(spec.lipShape);
  const tongue = buildTonguePaths(spec.tongue);

  const velumMap = {
    raised: VELUM_RAISED,
    neutral: VELUM_NEUTRAL,
    lowered: VELUM_LOWERED_NASAL,
    uvular: VELUM_UVULAR
  };
  const softPalate = velumMap[spec.velum ?? 'raised'];

  const defaultAirflow =
    'M 230 410 C 224 348, 224 276, 250 226 C 282 178, 348 168, 406 202 C 444 224, 486 235, 544 235';

  return {
    upperLip: lips.upperLip,
    lowerLip: lips.lowerLip,
    lips: combineLips(lips.upperLip, lips.lowerLip),
    ...tongue,
    softPalate,
    airflowPath: spec.airflowPath ?? defaultAirflow,
    nasalAirflowPath: DEFAULT_NASAL_AIRFLOW_PATH,
    nasalAirflowOpacity: spec.nasalAirflowOpacity ?? 0,
    oralAirflowOpacity: spec.oralAirflowOpacity ?? 1,
    isLateralAirflow: spec.isLateralAirflow,
    isLabiodental: lips.isLabiodental,
    turbulenceCenter: spec.turbulenceCenter ?? [365, 184, 0],
    paperDeflectionAngle: spec.paperDeflectionAngle ?? 4,
    frontLipAperture: lips.frontLipAperture,
    topDownContactPath:
      spec.topDownContactPath ??
      'M 142 152 C 128 192, 130 254, 150 292 L 114 292 C 98 254, 98 192, 118 152 Z M 258 152 C 272 192, 270 254, 250 292 L 286 292 C 302 254, 302 192, 282 152 Z',
    topDownTongueOutline:
      spec.topDownTongueOutline ??
      'M 122 292 C 112 216, 138 114, 200 114 C 262 114, 288 216, 278 292 Z',
    glottalAperture: spec.glottalAperture
  };
}

export const NEUTRAL_REST_STATE: SvgOrganPaths = buildOrganPaths({
  lipShape: 'neutral',
  velum: 'neutral',
  tongue: {
    rootTopX: 262,
    rootTopY: 236,
    dorsumX: 332,
    dorsumY: 206,
    bladeX: 386,
    bladeY: 218,
    tipX: 412,
    tipY: 244
  },
  airflowPath:
    'M 230 410 C 222 350, 216 280, 238 236 C 266 192, 336 186, 398 214 C 436 230, 478 236, 535 236',
  oralAirflowOpacity: 0.45,
  paperDeflectionAngle: 2,
  glottalAperture: 0.55
});

export function buildKeyframes(
  targetSpec: PostureSpec,
  comparisonSpec: PostureSpec,
  releaseSpec?: PostureSpec
): SvgKeyframes {
  return {
    rest: NEUTRAL_REST_STATE,
    target: buildOrganPaths(targetSpec),
    release: releaseSpec ? buildOrganPaths(releaseSpec) : NEUTRAL_REST_STATE,
    comparisonTarget: buildOrganPaths(comparisonSpec)
  };
}

// ============================================================================
// REUSABLE POSTURE PRESETS FOR ALL GERMAN PLACE & MANNER COMBINATIONS
// ============================================================================

export const POSTURE_PRESETS = {
  // --- Vowels ---
  i_long: {
    lipShape: 'spread',
    tongue: { rootTopX: 284, rootTopY: 218, dorsumX: 348, dorsumY: 172, bladeX: 388, bladeY: 180, tipX: 416, tipY: 244 },
    glottalAperture: 0.1,
    paperDeflectionAngle: 4,
    topDownContactPath:
      'M 152 135 C 138 178, 138 248, 160 292 L 114 292 C 98 248, 98 178, 118 135 Z M 248 135 C 262 178, 262 248, 240 292 L 286 292 C 302 248, 302 178, 282 135 Z'
  },
  y_long: {
    lipShape: 'tight_rounded',
    tongue: { rootTopX: 284, rootTopY: 218, dorsumX: 348, dorsumY: 172, bladeX: 388, bladeY: 180, tipX: 416, tipY: 244 },
    glottalAperture: 0.1,
    paperDeflectionAngle: 4,
    topDownContactPath:
      'M 152 135 C 138 178, 138 248, 160 292 L 114 292 C 98 248, 98 178, 118 135 Z M 248 135 C 262 178, 262 248, 240 292 L 286 292 C 302 248, 302 178, 282 135 Z'
  },
  i_short: {
    lipShape: 'neutral',
    tongue: { rootTopX: 278, rootTopY: 222, dorsumX: 340, dorsumY: 182, bladeX: 382, bladeY: 192, tipX: 414, tipY: 245 },
    glottalAperture: 0.12,
    paperDeflectionAngle: 4
  },
  y_short: {
    lipShape: 'mid_rounded',
    tongue: { rootTopX: 278, rootTopY: 222, dorsumX: 340, dorsumY: 182, bladeX: 382, bladeY: 192, tipX: 414, tipY: 245 },
    glottalAperture: 0.12,
    paperDeflectionAngle: 4
  },
  e_long: {
    lipShape: 'spread',
    tongue: { rootTopX: 276, rootTopY: 226, dorsumX: 342, dorsumY: 188, bladeX: 384, bladeY: 198, tipX: 414, tipY: 246 },
    glottalAperture: 0.12,
    paperDeflectionAngle: 4
  },
  oe_long: {
    lipShape: 'mid_rounded',
    tongue: { rootTopX: 276, rootTopY: 226, dorsumX: 342, dorsumY: 188, bladeX: 384, bladeY: 198, tipX: 414, tipY: 246 },
    glottalAperture: 0.12,
    paperDeflectionAngle: 4
  },
  e_short: {
    lipShape: 'neutral',
    tongue: { rootTopX: 268, rootTopY: 234, dorsumX: 334, dorsumY: 204, bladeX: 380, bladeY: 214, tipX: 412, tipY: 248 },
    glottalAperture: 0.14,
    paperDeflectionAngle: 4
  },
  oe_short: {
    lipShape: 'open_rounded',
    tongue: { rootTopX: 268, rootTopY: 234, dorsumX: 334, dorsumY: 204, bladeX: 380, bladeY: 214, tipX: 412, tipY: 248 },
    glottalAperture: 0.14,
    paperDeflectionAngle: 4
  },
  ae_long: {
    lipShape: 'open_wide',
    tongue: { rootTopX: 264, rootTopY: 238, dorsumX: 330, dorsumY: 212, bladeX: 378, bladeY: 222, tipX: 410, tipY: 250 },
    glottalAperture: 0.14,
    paperDeflectionAngle: 5
  },
  schwa: {
    lipShape: 'neutral',
    tongue: { rootTopX: 262, rootTopY: 234, dorsumX: 320, dorsumY: 206, bladeX: 374, bladeY: 216, tipX: 408, tipY: 246 },
    glottalAperture: 0.14,
    paperDeflectionAngle: 3
  },
  tiefschwa: {
    lipShape: 'neutral',
    tongue: { rootTopX: 254, rootTopY: 242, dorsumX: 314, dorsumY: 220, bladeX: 368, bladeY: 228, tipX: 404, tipY: 250 },
    glottalAperture: 0.14,
    paperDeflectionAngle: 4
  },
  a_long: {
    lipShape: 'open_wide',
    tongue: { rootTopX: 244, rootTopY: 252, dorsumX: 306, dorsumY: 232, bladeX: 364, bladeY: 238, tipX: 402, tipY: 254 },
    glottalAperture: 0.14,
    paperDeflectionAngle: 5,
    topDownContactPath:
      'M 124 220 C 118 245, 122 272, 134 292 L 114 292 C 102 272, 102 245, 110 220 Z M 276 220 C 282 245, 278 272, 266 292 L 286 292 C 298 272, 298 245, 290 220 Z'
  },
  a_short: {
    lipShape: 'open_wide',
    tongue: { rootTopX: 252, rootTopY: 246, dorsumX: 316, dorsumY: 224, bladeX: 370, bladeY: 232, tipX: 406, tipY: 252 },
    glottalAperture: 0.14,
    paperDeflectionAngle: 5
  },
  u_long: {
    lipShape: 'tight_rounded',
    tongue: { rootTopX: 250, rootTopY: 204, dorsumX: 294, dorsumY: 176, bladeX: 348, bladeY: 206, tipX: 398, tipY: 248 },
    glottalAperture: 0.1,
    paperDeflectionAngle: 4,
    topDownContactPath:
      'M 150 200 C 142 228, 150 264, 170 292 L 114 292 C 102 262, 102 224, 120 200 Z M 250 200 C 258 228, 250 264, 230 292 L 286 292 C 298 262, 298 224, 280 200 Z'
  },
  u_short: {
    lipShape: 'mid_rounded',
    tongue: { rootTopX: 254, rootTopY: 214, dorsumX: 300, dorsumY: 188, bladeX: 354, bladeY: 212, tipX: 402, tipY: 248 },
    glottalAperture: 0.12,
    paperDeflectionAngle: 4
  },
  o_long: {
    lipShape: 'mid_rounded',
    tongue: { rootTopX: 252, rootTopY: 218, dorsumX: 296, dorsumY: 192, bladeX: 352, bladeY: 216, tipX: 402, tipY: 248 },
    glottalAperture: 0.12,
    paperDeflectionAngle: 4
  },
  o_short: {
    lipShape: 'open_rounded',
    tongue: { rootTopX: 256, rootTopY: 228, dorsumX: 304, dorsumY: 204, bladeX: 358, bladeY: 222, tipX: 406, tipY: 250 },
    glottalAperture: 0.14,
    paperDeflectionAngle: 4
  },

  // --- Consonants ---
  p_stop: {
    lipShape: 'bilabial_seal',
    tongue: { rootTopX: 260, rootTopY: 234, dorsumX: 326, dorsumY: 208, bladeX: 382, bladeY: 218, tipX: 410, tipY: 244 },
    oralAirflowOpacity: 0.0,
    glottalAperture: 0.85,
    paperDeflectionAngle: 0
  },
  p_release: {
    lipShape: 'neutral',
    tongue: { rootTopX: 260, rootTopY: 234, dorsumX: 326, dorsumY: 208, bladeX: 382, bladeY: 218, tipX: 410, tipY: 244 },
    oralAirflowOpacity: 1.0,
    turbulenceCenter: [472, 234, 0.9],
    glottalAperture: 0.88,
    paperDeflectionAngle: 44
  },
  b_stop: {
    lipShape: 'bilabial_seal',
    tongue: { rootTopX: 260, rootTopY: 234, dorsumX: 326, dorsumY: 208, bladeX: 382, bladeY: 218, tipX: 410, tipY: 244 },
    oralAirflowOpacity: 0.0,
    glottalAperture: 0.16,
    paperDeflectionAngle: 0
  },
  b_release: {
    lipShape: 'neutral',
    tongue: { rootTopX: 260, rootTopY: 234, dorsumX: 326, dorsumY: 208, bladeX: 382, bladeY: 218, tipX: 410, tipY: 244 },
    oralAirflowOpacity: 1.0,
    glottalAperture: 0.14,
    paperDeflectionAngle: 10
  },
  m_nasal: {
    lipShape: 'bilabial_seal',
    velum: 'lowered',
    tongue: { rootTopX: 260, rootTopY: 234, dorsumX: 326, dorsumY: 208, bladeX: 382, bladeY: 218, tipX: 410, tipY: 244 },
    oralAirflowOpacity: 0.0,
    nasalAirflowOpacity: 1.0,
    glottalAperture: 0.12,
    paperDeflectionAngle: 2
  },
  f_fricative: {
    lipShape: 'labiodental',
    tongue: { rootTopX: 260, rootTopY: 236, dorsumX: 324, dorsumY: 210, bladeX: 378, bladeY: 220, tipX: 406, tipY: 246 },
    airflowPath:
      'M 230 410 C 224 348, 224 276, 250 226 C 282 182, 348 180, 410 214 C 436 226, 476 232, 548 232',
    turbulenceCenter: [432, 224, 0.95],
    glottalAperture: 0.86,
    paperDeflectionAngle: 28
  },
  v_fricative: {
    lipShape: 'labiodental',
    tongue: { rootTopX: 260, rootTopY: 236, dorsumX: 324, dorsumY: 210, bladeX: 378, bladeY: 220, tipX: 406, tipY: 246 },
    airflowPath:
      'M 230 410 C 224 348, 224 276, 250 226 C 282 182, 348 180, 410 214 C 436 226, 476 232, 542 232',
    turbulenceCenter: [432, 224, 0.65],
    glottalAperture: 0.16,
    paperDeflectionAngle: 10
  },
  t_stop: {
    lipShape: 'neutral',
    tongue: { rootTopX: 268, rootTopY: 228, dorsumX: 338, dorsumY: 196, bladeX: 392, bladeY: 184, tipX: 414, tipY: 192 },
    oralAirflowOpacity: 0.0,
    glottalAperture: 0.85,
    paperDeflectionAngle: 0,
    topDownContactPath:
      'M 200 96 C 148 96, 118 158, 128 292 L 106 292 C 94 152, 134 80, 200 80 Z M 200 96 C 252 96, 282 158, 272 292 L 294 292 C 306 152, 266 80, 200 80 Z'
  },
  t_release: {
    lipShape: 'neutral',
    tongue: { rootTopX: 264, rootTopY: 232, dorsumX: 332, dorsumY: 204, bladeX: 386, bladeY: 206, tipX: 412, tipY: 222 },
    oralAirflowOpacity: 1.0,
    turbulenceCenter: [418, 198, 0.9],
    glottalAperture: 0.88,
    paperDeflectionAngle: 40
  },
  d_stop: {
    lipShape: 'neutral',
    tongue: { rootTopX: 268, rootTopY: 228, dorsumX: 338, dorsumY: 196, bladeX: 392, bladeY: 184, tipX: 414, tipY: 192 },
    oralAirflowOpacity: 0.0,
    glottalAperture: 0.16,
    paperDeflectionAngle: 0,
    topDownContactPath:
      'M 200 96 C 148 96, 118 158, 128 292 L 106 292 C 94 152, 134 80, 200 80 Z M 200 96 C 252 96, 282 158, 272 292 L 294 292 C 306 152, 266 80, 200 80 Z'
  },
  d_release: {
    lipShape: 'neutral',
    tongue: { rootTopX: 264, rootTopY: 232, dorsumX: 332, dorsumY: 204, bladeX: 386, bladeY: 206, tipX: 412, tipY: 222 },
    oralAirflowOpacity: 1.0,
    glottalAperture: 0.14,
    paperDeflectionAngle: 8
  },
  n_nasal: {
    lipShape: 'neutral',
    velum: 'lowered',
    tongue: { rootTopX: 268, rootTopY: 228, dorsumX: 338, dorsumY: 196, bladeX: 392, bladeY: 184, tipX: 414, tipY: 192 },
    oralAirflowOpacity: 0.0,
    nasalAirflowOpacity: 1.0,
    glottalAperture: 0.12,
    paperDeflectionAngle: 2,
    topDownContactPath:
      'M 200 96 C 148 96, 118 158, 128 292 L 106 292 C 94 152, 134 80, 200 80 Z M 200 96 C 252 96, 282 158, 272 292 L 294 292 C 306 152, 266 80, 200 80 Z'
  },
  s_fricative: {
    lipShape: 'spread',
    tongue: { rootTopX: 270, rootTopY: 226, dorsumX: 342, dorsumY: 192, bladeX: 394, bladeY: 186, tipX: 414, tipY: 202 },
    airflowPath:
      'M 230 410 C 226 348, 228 274, 256 222 C 292 174, 362 170, 412 196 C 446 216, 484 234, 550 234',
    turbulenceCenter: [414, 198, 1.0],
    glottalAperture: 0.88,
    paperDeflectionAngle: 24,
    topDownContactPath:
      'M 186 100 C 148 118, 136 196, 152 292 L 114 292 C 98 190, 122 100, 174 88 Z M 214 100 C 252 118, 264 196, 248 292 L 286 292 C 302 190, 278 100, 226 88 Z'
  },
  z_fricative: {
    lipShape: 'spread',
    tongue: { rootTopX: 270, rootTopY: 226, dorsumX: 342, dorsumY: 192, bladeX: 394, bladeY: 186, tipX: 414, tipY: 202 },
    airflowPath:
      'M 230 410 C 226 348, 228 274, 256 222 C 292 174, 362 170, 412 196 C 446 216, 484 234, 544 234',
    turbulenceCenter: [414, 198, 0.78],
    glottalAperture: 0.16,
    paperDeflectionAngle: 12,
    topDownContactPath:
      'M 186 100 C 148 118, 136 196, 152 292 L 114 292 C 98 190, 122 100, 174 88 Z M 214 100 C 252 118, 264 196, 248 292 L 286 292 C 302 190, 278 100, 226 88 Z'
  },
  l_lateral: {
    lipShape: 'neutral',
    tongue: { rootTopX: 266, rootTopY: 232, dorsumX: 326, dorsumY: 208, bladeX: 386, bladeY: 192, tipX: 414, tipY: 192 },
    isLateralAirflow: true,
    glottalAperture: 0.12,
    paperDeflectionAngle: 4,
    // Chỉ tiếp xúc ở chính giữa ổ răng trên (để luồng hơi rẽ 2 bên bờ lưỡi!)
    topDownContactPath:
      'M 176 92 C 188 86, 212 86, 224 92 L 218 124 C 206 120, 194 120, 182 124 Z M 192 98 C 198 96, 202 96, 208 98 L 206 112 C 202 110, 198 110, 194 112 Z'
  },
  sch_fricative: {
    lipShape: 'open_rounded',
    tongue: { rootTopX: 274, rootTopY: 224, dorsumX: 344, dorsumY: 184, bladeX: 388, bladeY: 178, tipX: 406, tipY: 204 },
    airflowPath:
      'M 230 410 C 226 346, 228 272, 258 220 C 292 170, 360 164, 410 198 C 446 220, 488 234, 550 234',
    turbulenceCenter: [396, 178, 1.0],
    glottalAperture: 0.88,
    paperDeflectionAngle: 26,
    topDownContactPath:
      'M 178 118 C 154 148, 148 212, 162 292 L 114 292 C 98 206, 114 134, 152 108 Z M 222 118 C 246 148, 252 212, 238 292 L 286 292 C 302 206, 286 134, 248 108 Z'
  },
  zh_fricative: {
    lipShape: 'open_rounded',
    tongue: { rootTopX: 274, rootTopY: 224, dorsumX: 344, dorsumY: 184, bladeX: 388, bladeY: 178, tipX: 406, tipY: 204 },
    airflowPath:
      'M 230 410 C 226 346, 228 272, 258 220 C 292 170, 360 164, 410 198 C 446 220, 488 234, 544 234',
    turbulenceCenter: [396, 178, 0.78],
    glottalAperture: 0.16,
    paperDeflectionAngle: 12
  },
  ch_ich: {
    lipShape: 'spread',
    tongue: { rootTopX: 286, rootTopY: 214, dorsumX: 352, dorsumY: 164, bladeX: 386, bladeY: 172, tipX: 416, tipY: 244 },
    airflowPath:
      'M 230 410 C 226 346, 228 272, 258 220 C 292 170, 356 156, 410 194 C 446 220, 484 234, 550 234',
    turbulenceCenter: [374, 164, 1.0],
    glottalAperture: 0.88,
    paperDeflectionAngle: 32,
    topDownContactPath:
      'M 164 128 C 150 172, 150 248, 170 292 L 114 292 C 98 248, 98 172, 118 128 Z M 236 128 C 250 172, 250 248, 230 292 L 286 292 C 302 248, 302 172, 282 128 Z'
  },
  j_approximant: {
    lipShape: 'spread',
    tongue: { rootTopX: 286, rootTopY: 214, dorsumX: 350, dorsumY: 168, bladeX: 386, bladeY: 176, tipX: 416, tipY: 244 },
    turbulenceCenter: [374, 168, 0.35],
    glottalAperture: 0.12,
    paperDeflectionAngle: 6,
    topDownContactPath:
      'M 160 132 C 146 175, 146 248, 166 292 L 114 292 C 98 248, 98 175, 118 132 Z M 240 132 C 254 175, 254 248, 234 292 L 286 292 C 302 248, 302 175, 282 132 Z'
  },
  k_stop: {
    lipShape: 'neutral',
    tongue: { rootTopX: 254, rootTopY: 202, dorsumX: 286, dorsumY: 162, bladeX: 348, bladeY: 198, tipX: 404, tipY: 248 },
    oralAirflowOpacity: 0.0,
    glottalAperture: 0.85,
    paperDeflectionAngle: 0,
    topDownContactPath:
      'M 200 184 C 164 186, 142 224, 168 292 L 114 292 C 102 242, 108 188, 138 170 Z M 200 184 C 236 186, 258 224, 232 292 L 286 292 C 298 242, 292 188, 262 170 Z'
  },
  k_release: {
    lipShape: 'neutral',
    tongue: { rootTopX: 256, rootTopY: 216, dorsumX: 304, dorsumY: 186, bladeX: 362, bladeY: 208, tipX: 408, tipY: 248 },
    oralAirflowOpacity: 1.0,
    turbulenceCenter: [286, 174, 0.9],
    glottalAperture: 0.88,
    paperDeflectionAngle: 38
  },
  g_stop: {
    lipShape: 'neutral',
    tongue: { rootTopX: 254, rootTopY: 202, dorsumX: 286, dorsumY: 162, bladeX: 348, bladeY: 198, tipX: 404, tipY: 248 },
    oralAirflowOpacity: 0.0,
    glottalAperture: 0.16,
    paperDeflectionAngle: 0,
    topDownContactPath:
      'M 200 184 C 164 186, 142 224, 168 292 L 114 292 C 102 242, 108 188, 138 170 Z M 200 184 C 236 186, 258 224, 232 292 L 286 292 C 298 242, 292 188, 262 170 Z'
  },
  g_release: {
    lipShape: 'neutral',
    tongue: { rootTopX: 256, rootTopY: 216, dorsumX: 304, dorsumY: 186, bladeX: 362, bladeY: 208, tipX: 408, tipY: 248 },
    oralAirflowOpacity: 1.0,
    glottalAperture: 0.14,
    paperDeflectionAngle: 8
  },
  ng_nasal: {
    lipShape: 'neutral',
    velum: 'lowered',
    tongue: { rootTopX: 256, rootTopY: 212, dorsumX: 274, dorsumY: 184, bladeX: 342, bladeY: 206, tipX: 404, tipY: 248 },
    oralAirflowOpacity: 0.0,
    nasalAirflowOpacity: 1.0,
    glottalAperture: 0.12,
    paperDeflectionAngle: 2,
    topDownContactPath:
      'M 200 198 C 164 200, 144 236, 168 292 L 114 292 C 102 248, 108 200, 138 184 Z M 200 198 C 236 200, 256 236, 232 292 L 286 292 C 298 248, 292 200, 262 184 Z'
  },
  ch_ach: {
    lipShape: 'neutral',
    tongue: { rootTopX: 254, rootTopY: 204, dorsumX: 288, dorsumY: 170, bladeX: 350, bladeY: 200, tipX: 404, tipY: 248 },
    airflowPath:
      'M 230 410 C 218 348, 212 276, 236 222 C 262 172, 326 178, 392 214 C 434 232, 478 236, 548 236',
    turbulenceCenter: [286, 174, 1.0],
    glottalAperture: 0.88,
    paperDeflectionAngle: 30,
    topDownContactPath:
      'M 155 205 C 145 230, 155 262, 175 292 L 114 292 C 102 260, 102 225, 120 205 Z M 245 205 C 255 230, 245 262, 225 292 L 286 292 C 298 260, 298 225, 280 205 Z'
  },
  r_uvular: {
    lipShape: 'neutral',
    velum: 'uvular',
    tongue: { rootTopX: 244, rootTopY: 204, dorsumX: 274, dorsumY: 180, bladeX: 344, bladeY: 206, tipX: 402, tipY: 248 },
    airflowPath:
      'M 230 410 C 216 348, 208 276, 232 224 C 256 178, 322 184, 390 216 C 434 232, 478 236, 542 236',
    turbulenceCenter: [248, 204, 0.85],
    glottalAperture: 0.16,
    paperDeflectionAngle: 8,
    topDownContactPath:
      'M 152 220 C 142 242, 152 268, 172 292 L 114 292 C 102 265, 102 235, 120 220 Z M 248 220 C 258 242, 248 268, 228 292 L 286 292 C 298 265, 298 235, 280 220 Z'
  },
  glottal_stop: {
    lipShape: 'neutral',
    tongue: { rootTopX: 262, rootTopY: 236, dorsumX: 332, dorsumY: 206, bladeX: 386, bladeY: 218, tipX: 412, tipY: 244 },
    oralAirflowOpacity: 0.0,
    glottalAperture: 0.0,
    paperDeflectionAngle: 0
  },
  glottal_release: {
    lipShape: 'open_wide',
    tongue: { rootTopX: 254, rootTopY: 242, dorsumX: 320, dorsumY: 216, bladeX: 374, bladeY: 226, tipX: 408, tipY: 248 },
    oralAirflowOpacity: 1.0,
    turbulenceCenter: [232, 376, 0.85],
    glottalAperture: 0.35,
    paperDeflectionAngle: 16
  },
  h_fricative: {
    lipShape: 'neutral',
    tongue: { rootTopX: 262, rootTopY: 236, dorsumX: 330, dorsumY: 210, bladeX: 384, bladeY: 220, tipX: 410, tipY: 246 },
    turbulenceCenter: [232, 376, 0.9],
    glottalAperture: 0.95,
    paperDeflectionAngle: 28
  }
} satisfies Record<string, PostureSpec>;
