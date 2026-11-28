import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
  computed,
  effect,
  inject,
  input,
  signal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';
import { PhonemeDataService } from '../../core/services/phoneme-data.service';
import { AudioSyncService } from '../../core/services/audio-sync.service';
import { TimelineControlsComponent } from './timeline-controls.component';
import { AnatomicalRegionId } from '../../core/models/phoneme.model';

@Component({
  selector: 'app-anatomy-viewer',
  standalone: true,
  imports: [CommonModule, FormsModule, TimelineControlsComponent],
  template: `
    <section
      class="flex flex-col dark:bg-slate-950 bg-slate-50 p-2.5 sm:p-3 lg:p-3.5 gap-2.5 select-none"
      [ngClass]="naturalHeight() ? 'h-auto' : 'h-full overflow-y-auto'"
    >
      <!-- ================================================================== -->
      <!-- 1. TOP BAR: 3 VIEW TABS + 4 LAYER CHECKBOXES                       -->
      <!-- ================================================================== -->
      <div
        class="flex flex-wrap items-center justify-between gap-2 p-2 sm:p-2.5 rounded-2xl dark:bg-slate-900/95 bg-white border dark:border-slate-800/90 border-slate-200 shadow-sm shrink-0"
      >
        <!-- 3 Switchable Anatomical Tabs -->
        <div
          class="inline-flex items-center p-1 rounded-xl dark:bg-slate-950 bg-slate-100 border dark:border-slate-800 border-slate-200 overflow-x-auto max-w-full"
        >
          <button
            type="button"
            (click)="phonemeService.setViewTab('sagittal')"
            class="px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap"
            [ngClass]="
              phonemeService.activeViewTab() === 'sagittal'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
            "
          >
            <span>{{ phonemeService.ui().viewer.tabSagittal }}</span>
          </button>

          <button
            type="button"
            (click)="phonemeService.setViewTab('top-down')"
            class="px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap"
            [ngClass]="
              phonemeService.activeViewTab() === 'top-down'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
            "
          >
            <span>{{ phonemeService.ui().viewer.tabTopDown }}</span>
          </button>

          <button
            type="button"
            (click)="phonemeService.setViewTab('larynx')"
            class="px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap"
            [ngClass]="
              phonemeService.activeViewTab() === 'larynx'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-slate-200'
            "
          >
            <span>{{ phonemeService.ui().viewer.tabLarynx }}</span>
          </button>
        </div>

        <!-- 4 Layer Checkboxes -->
        <div class="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs px-1">
          <label class="inline-flex items-center gap-1.5 cursor-pointer">
            <input
              id="layer-all-labels"
              name="layerAllLabels"
              type="checkbox"
              [ngModel]="phonemeService.showAllLabels()"
              (ngModelChange)="phonemeService.toggleLabels($event)"
              class="rounded border-slate-300 dark:border-slate-700 text-rose-500 focus:ring-rose-500/30 bg-white dark:bg-slate-900"
            />
            <span class="dark:text-slate-300 text-slate-700 font-medium">
              {{ phonemeService.ui().viewer.layerAllLabels }}
            </span>
          </label>

          <label class="inline-flex items-center gap-1.5 cursor-pointer">
            <input
              id="layer-airflow"
              name="layerAirflow"
              type="checkbox"
              [ngModel]="phonemeService.showAirflow()"
              (ngModelChange)="phonemeService.toggleAirflow($event)"
              class="rounded border-slate-300 dark:border-slate-700 text-sky-500 focus:ring-sky-400/30 bg-white dark:bg-slate-900"
            />
            <span class="dark:text-slate-300 text-slate-700 font-medium">
              {{ phonemeService.ui().viewer.layerAirflow }}
            </span>
          </label>

          <label class="inline-flex items-center gap-1.5 cursor-pointer">
            <input
              id="layer-paper-test"
              name="layerPaperTest"
              type="checkbox"
              [ngModel]="phonemeService.showPaperTest()"
              (ngModelChange)="phonemeService.togglePaperTest($event)"
              class="rounded border-slate-300 dark:border-slate-700 text-amber-500 focus:ring-amber-400/30 bg-white dark:bg-slate-900"
            />
            <span class="dark:text-slate-300 text-slate-700 font-medium">
              {{ phonemeService.ui().viewer.layerPaperTest }}
            </span>
          </label>

          <div class="inline-flex items-center gap-1.5">
            <label class="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                id="layer-compare"
                name="layerCompare"
                type="checkbox"
                [ngModel]="phonemeService.showComparison()"
                (ngModelChange)="phonemeService.toggleComparison($event)"
                class="rounded border-slate-300 dark:border-slate-700 text-amber-500 focus:ring-amber-400/30 bg-white dark:bg-slate-900"
              />
              <span class="dark:text-slate-300 text-slate-700 font-medium">
                {{ phonemeService.ui().viewer.layerCompareWith }}
              </span>
            </label>

            <select
              id="comparison-phoneme-select"
              name="comparisonPhoneme"
              [value]="phonemeService.comparisonPhoneme()?.id ?? ''"
              (change)="onComparisonSelectChange($event)"
              [title]="phonemeService.ui().viewer.compareSelectTitle"
              [attr.aria-label]="phonemeService.ui().viewer.compareSelectTitle"
              class="font-mono text-[11px] font-semibold px-1.5 py-0.5 rounded-md dark:bg-slate-950 bg-slate-100 border dark:border-slate-700 border-slate-300 text-amber-700 dark:text-amber-400 focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              @for (p of phonemeService.allPhonemes(); track p.id) {
                <option [value]="p.id" class="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200">
                  {{ p.symbol }}
                </option>
              }
            </select>

            @if (phonemeService.customComparisonPhonemeId()) {
              <button
                type="button"
                (click)="phonemeService.setComparisonPhoneme(null)"
                [title]="phonemeService.ui().viewer.resetCompareTitle"
                class="text-[11px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-amber-800 dark:text-amber-300 transition-colors"
              >
                ↺
              </button>
            }
          </div>
        </div>
      </div>

      <!-- ================================================================== -->
      <!-- 2. MAIN ANATOMICAL VIEWPORT (Sagittal / Top-Down / Larynx)         -->
      <!-- ================================================================== -->
      <div
        class="relative grow shrink-0 basis-auto rounded-2xl bg-[#F8FAFC] dark:bg-[#12161F] border border-slate-200/90 dark:border-slate-800/90 shadow-sm dark:shadow-inner overflow-hidden flex flex-col"
      >
        <!-- Docked Top Header Strip inside Viewport Card (Zero Overlap with SVG) -->
        <div
          class="relative z-10 px-2.5 sm:px-3 py-2 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-[#171B24]/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-2 shrink-0"
        >
          <!-- Left: Active Phoneme Badge + Flow/Compare Pills -->
          <div class="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <div
              class="px-2.5 py-1 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 flex items-center gap-2 shadow-sm"
            >
              <span class="font-mono text-lg sm:text-xl font-bold text-[#E11D48] dark:text-[#E05368]">
                {{ phonemeService.selectedPhoneme().symbol }}
              </span>
              <div class="text-[11px] leading-tight">
                <div class="text-slate-900 dark:text-slate-100 font-semibold">
                  {{ phonemeService.selectedExampleWord().word }}
                  <span class="font-mono text-rose-600 dark:text-rose-300">
                    {{ phonemeService.selectedExampleWord().ipa }}
                  </span>
                </div>
                <div class="text-slate-500 dark:text-slate-400">
                  "{{ phonemeService.selectedExampleWord().meaning }}"
                </div>
              </div>
            </div>

            @if (phonemeService.showComparison()) {
              <div
                class="px-2 py-1 rounded-xl bg-amber-50 dark:bg-amber-500/15 border border-amber-300 dark:border-amber-400/40 text-[10.5px] sm:text-[11px] text-amber-800 dark:text-amber-300 flex items-center gap-1.5"
              >
                <span class="w-3 border-b-2 border-dashed border-[#D97706] dark:border-[#FBBF24]"></span>
                <span>
                  {{ phonemeService.ui().viewer.dashedLabel }}
                  <strong class="font-mono">{{
                    phonemeService.activeComparisonSymbol()
                  }}</strong>
                </span>
              </div>
            }

            @if (currentPaths().nasalAirflowOpacity > 0.3) {
              <div
                class="px-2 py-1 rounded-xl bg-sky-50 dark:bg-sky-500/15 border border-sky-300 dark:border-sky-400/40 text-[10.5px] text-sky-700 dark:text-sky-300 font-medium"
              >
                {{ phonemeService.ui().viewer.nasalFlowBadge }}
              </div>
            }

            @if (currentPaths().isLateralAirflow) {
              <div
                class="px-2 py-1 rounded-xl bg-cyan-50 dark:bg-cyan-500/15 border border-cyan-300 dark:border-cyan-400/40 text-[10.5px] text-cyan-700 dark:text-cyan-300 font-medium"
              >
                {{ phonemeService.ui().viewer.lateralFlowBadge }}
              </div>
            }

            @if (currentPaths().isLabiodental) {
              <div
                class="px-2 py-1 rounded-xl bg-rose-50 dark:bg-rose-500/15 border border-rose-300 dark:border-rose-400/40 text-[10.5px] text-rose-700 dark:text-rose-300 font-medium"
              >
                {{ phonemeService.ui().viewer.labiodentalBadge }}
              </div>
            }
          </div>

          <!-- Right: Collapsible Organ Hint & Listen Button -->
          <div class="flex items-center gap-1.5 sm:gap-2 ml-auto">
            <button
              type="button"
              (click)="toggleOrganHint()"
              class="inline-flex items-center gap-1 text-[10px] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900/90 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-lg transition-all cursor-pointer"
              [title]="phonemeService.ui().viewer.clickOrganHint"
            >
              @if (showOrganHint()) {
                <span class="hidden sm:inline">{{ phonemeService.ui().viewer.clickOrganHint }}</span>
                <span class="sm:hidden">💡</span>
                <span class="text-slate-400 dark:text-slate-500 ml-0.5">✕</span>
              } @else {
                <span>💡</span>
              }
            </button>

            <button
              type="button"
              (click)="audioService.playIsolatedPhoneme()"
              class="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-[#171B24]/95 hover:bg-rose-600 text-slate-800 dark:text-slate-200 hover:text-white border border-slate-200 dark:border-slate-700/80 hover:border-rose-500 text-xs font-medium transition-all shadow-sm"
            >
              <svg class="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                />
              </svg>
              <span>
                {{ phonemeService.ui().viewer.listenBtn }}
                {{ phonemeService.selectedPhoneme().symbol }}
              </span>
            </button>
          </div>
        </div>

        <!-- Main SVG Canvas Stage -->
        <div class="relative flex-1 flex flex-col items-center justify-center p-2 sm:p-3 min-h-[280px] sm:min-h-[360px]">
          <!-- Subtle Clinical Grid Overlay -->
          <div
            class="absolute inset-0 pointer-events-none"
            [ngClass]="isDark() ? 'opacity-15' : 'opacity-40'"
            [style.background-image]="
              isDark()
                ? 'radial-gradient(#334155 1px, transparent 1px)'
                : 'radial-gradient(#CBD5E1 1px, transparent 1px)'
            "
            style="background-size: 20px 20px;"
          ></div>

          <!-- ================================================================ -->
          <!-- VIEW 1: SAGITTAL CROSS-SECTION (Mặt bên — viewBox="8 20 584 462") -->
          <!-- ================================================================ -->
          @if (phonemeService.activeViewTab() === 'sagittal') {
            <svg
              id="sagittal-svg"
              viewBox="8 20 584 462"
              preserveAspectRatio="xMidYMid meet"
              class="w-full h-auto max-h-[340px] sm:max-h-[410px] xl:max-h-[450px] block select-none relative z-[1]"
              xmlns="http://www.w3.org/2000/svg"
            >
            <defs>
              <linearGradient id="palateTissueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#B56576" />
                <stop offset="100%" stop-color="#C97A8B" />
              </linearGradient>

              <linearGradient id="tongueMainGrad" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stop-color="#EB657A" />
                <stop offset="55%" stop-color="#E05368" />
                <stop offset="100%" stop-color="#C43E52" />
              </linearGradient>

              <linearGradient id="velumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#E598A8" />
                <stop offset="100%" stop-color="#D88396" />
              </linearGradient>

              <linearGradient id="toothGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#CBD2D9" />
                <stop offset="35%" stop-color="#F4F6F9" />
                <stop offset="100%" stop-color="#FFFFFF" />
              </linearGradient>

              <filter id="airflowGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <marker
                id="airflowArrowHead"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" [attr.fill]="isDark() ? '#56CCF2' : '#0284C7'" />
              </marker>
            </defs>

            <!-- 1. #static-head-outline -->
            <g id="static-head-outline">
              <path
                d="M 135 465 L 135 280 C 115 210, 120 110, 185 62 C 245 22, 345 24, 412 64 C 435 78, 444 98, 452 116 C 468 138, 492 154, 494 166 C 496 176, 466 180, 448 180 L 444 292 C 458 308, 462 332, 446 348 C 424 368, 355 366, 305 372 L 305 465 Z"
                [attr.fill]="isDark() ? '#262B38' : '#E2E8F0'"
                [attr.stroke]="isDark() ? '#374151' : '#94A3B8'"
                stroke-width="2"
              />
              <path
                d="M 196 460 L 196 142 C 196 112, 228 96, 285 96 C 350 96, 405 114, 438 158 L 448 176 L 444 290 C 395 335, 325 352, 276 365 L 272 460 Z"
                [attr.fill]="isDark() ? '#171B24' : '#F1F5F9'"
              />
              <path
                d="M 225 136 C 258 112, 325 110, 385 132 C 408 142, 426 156, 438 168 C 415 168, 392 162, 365 162 C 325 162, 265 164, 225 148 Z"
                [attr.fill]="isDark() ? '#1E2430' : '#FCE7F3'"
                [attr.stroke]="isDark() ? '#B56576' : '#DB2777'"
                [attr.stroke-opacity]="isDark() ? '0.45' : '0.35'"
                stroke-width="1.5"
              />
              <path
                d="M 262 128 C 305 120, 355 125, 388 142 M 258 144 C 302 138, 348 142, 382 154"
                fill="none"
                [attr.stroke]="isDark() ? '#B56576' : '#DB2777'"
                [attr.stroke-opacity]="isDark() ? '0.35' : '0.28'"
                stroke-width="2.5"
                stroke-linecap="round"
              />
              <ellipse
                cx="222"
                cy="118"
                rx="18"
                ry="12"
                [attr.fill]="isDark() ? '#141820' : '#CBD5E1'"
                [attr.stroke]="isDark() ? '#334155' : '#94A3B8'"
                stroke-width="1.2"
              />
              <path
                d="M 188 136 C 198 136, 202 145, 202 165 L 202 455 L 186 455 L 186 145 C 186 138, 187 136, 188 136 Z"
                fill="url(#palateTissueGrad)"
              />
            </g>

            <!-- 2. #hard-palate-teeth -->
            <g
              id="hard-palate-teeth"
              class="cursor-pointer"
              (click)="selectRegion('hard-palate')"
            >
              <path
                d="M 278 166 C 318 152, 368 154, 402 176 C 414 184, 422 194, 432 196 L 444 178 C 425 168, 398 146, 355 142 C 318 138, 292 148, 278 154 Z"
                fill="url(#palateTissueGrad)"
                [attr.stroke]="selectedRegion() === 'hard-palate' ? (isDark() ? '#FBBF24' : '#D97706') : '#D88396'"
                [attr.stroke-width]="selectedRegion() === 'hard-palate' ? '2.8' : '1.5'"
              />
              <path
                d="M 420 190 L 431 192 L 431 224 C 427 226, 423 224, 421 218 Z"
                fill="url(#toothGrad)"
                [attr.stroke]="isDark() ? '#CBD2D9' : '#94A3B8'"
                stroke-width="1.2"
              />
              <path
                d="M 420 248 C 423 245, 427 245, 429 249 L 428 274 L 418 272 Z"
                fill="url(#toothGrad)"
                [attr.stroke]="isDark() ? '#CBD2D9' : '#94A3B8'"
                stroke-width="1.2"
              />
              <path
                d="M 414 268 L 430 268 C 434 282, 432 308, 418 320 C 404 330, 386 322, 388 302 C 390 286, 404 274, 414 268 Z"
                fill="#B56576"
                stroke="#C97A8B"
                stroke-width="1.2"
              />
            </g>

            <!-- 3. #soft-palate-group -->
            <g
              id="soft-palate-group"
              class="cursor-pointer"
              (click)="selectRegion('soft-palate')"
            >
              <path
                #velumPathEl
                id="velum-path"
                [attr.d]="currentPaths().softPalate"
                fill="url(#velumGrad)"
                [attr.stroke]="selectedRegion() === 'soft-palate' ? '#FBBF24' : '#F3B6C4'"
                [attr.stroke-width]="selectedRegion() === 'soft-palate' ? '3' : '1.8'"
              />
              <path id="soft-palate" [attr.d]="currentPaths().softPalate" fill="none" />
            </g>

            <!-- 4. #tongue-group -->
            <g id="tongue-group">
              <path
                #tongueMainEl
                id="tongue-main-path"
                [attr.d]="currentPaths().tongueMain"
                fill="url(#tongueMainGrad)"
                stroke="#F48FB1"
                stroke-width="2"
              />
              <path
                #tongueRootEl
                id="tongue-root"
                [attr.d]="currentPaths().tongueRoot"
                fill="#C43E52"
                fill-opacity="0.75"
                [attr.stroke]="selectedRegion() === 'tongue-root' ? '#FBBF24' : 'none'"
                stroke-width="2.5"
                class="cursor-pointer hover:opacity-90 transition-opacity"
                (click)="selectRegion('tongue-root')"
              />
              <path
                #tongueBodyEl
                id="tongue-body"
                [attr.d]="currentPaths().tongueBody"
                fill="#E05368"
                fill-opacity="0.65"
                [attr.stroke]="selectedRegion() === 'tongue-dorsum' ? '#FBBF24' : 'none'"
                stroke-width="2.5"
                class="cursor-pointer hover:opacity-90 transition-opacity"
                (click)="selectRegion('tongue-dorsum')"
              />
              <path id="tongue-dorsum" [attr.d]="currentPaths().tongueBody" fill="none" />
              <path
                #tongueBladeEl
                id="tongue-blade"
                [attr.d]="currentPaths().tongueBlade"
                fill="#E86075"
                fill-opacity="0.65"
                [attr.stroke]="selectedRegion() === 'tongue-blade' ? '#FBBF24' : 'none'"
                stroke-width="2.5"
                class="cursor-pointer hover:opacity-90 transition-opacity"
                (click)="selectRegion('tongue-blade')"
              />
              <path
                #tongueTipEl
                id="tongue-tip"
                [attr.d]="currentPaths().tongueTip"
                fill="#F07185"
                fill-opacity="0.85"
                [attr.stroke]="selectedRegion() === 'tongue-tip' ? '#FBBF24' : '#FBCFE8'"
                [attr.stroke-width]="selectedRegion() === 'tongue-tip' ? '2.8' : '1.2'"
                class="cursor-pointer hover:opacity-95 transition-opacity"
                (click)="selectRegion('tongue-tip')"
              />
              <path
                d="M 275 325 C 295 275, 338 255, 382 260"
                fill="none"
                stroke="#9F1239"
                stroke-opacity="0.35"
                stroke-width="1.5"
                stroke-dasharray="4 3"
                pointer-events="none"
              />
            </g>

            <!-- 5. #lips-group -->
            <g
              id="lips-group"
              class="cursor-pointer"
              (click)="selectRegion('lips')"
            >
              <path
                #upperLipEl
                id="upper-lip"
                [attr.d]="currentPaths().upperLip"
                fill="#D16677"
                [attr.stroke]="selectedRegion() === 'lips' ? '#FBBF24' : '#F3A6B4'"
                [attr.stroke-width]="selectedRegion() === 'lips' ? '2.8' : '1.8'"
              />
              <path
                #lowerLipEl
                id="lower-lip"
                [attr.d]="currentPaths().lowerLip"
                fill="#D16677"
                [attr.stroke]="selectedRegion() === 'lips' ? '#FBBF24' : '#F3A6B4'"
                [attr.stroke-width]="selectedRegion() === 'lips' ? '2.8' : '1.8'"
              />
              <path id="lips" [attr.d]="currentPaths().lips" fill="none" />
            </g>

            <!-- 6. #larynx-trachea-group -->
            <g
              id="larynx-trachea-group"
              class="cursor-pointer"
              (click)="selectRegion('vocal-cords')"
            >
              <path
                d="M 244 344 C 234 322, 224 302, 230 294 C 236 288, 244 306, 252 336 Z"
                fill="#8C5868"
                stroke="#B56576"
                stroke-width="1.4"
              />
              <g fill="#8C5868" opacity="0.6">
                <rect x="206" y="416" width="52" height="6" rx="3" />
                <rect x="206" y="430" width="52" height="6" rx="3" />
                <rect x="206" y="444" width="52" height="6" rx="3" />
              </g>

              <g
                id="vocal-cords-indicator"
                transform="translate(232, 390)"
              >
                <g id="vocal-cords">
                  <rect
                    x="-28"
                    y="-16"
                    width="56"
                    height="32"
                    rx="9"
                    [attr.fill]="isDark() ? '#171B24' : '#FFFFFF'"
                    [attr.stroke]="
                      selectedRegion() === 'vocal-cords'
                        ? (isDark() ? '#FBBF24' : '#D97706')
                        : phonemeService.selectedPhoneme().isVoiced
                          ? (isDark() ? '#6FCF97' : '#059669')
                          : (isDark() ? '#56CCF2' : '#0284C7')
                    "
                    stroke-width="2"
                  />

                  @if (phonemeService.selectedPhoneme().isVoiced) {
                    <g [class.vocal-vibrating]="isVocalVibrating()">
                      <path
                        d="M -20 0 Q -14 -10, -8 0 T 4 0 T 16 0 L 20 0"
                        fill="none"
                        [attr.stroke]="isDark() ? '#6FCF97' : '#059669'"
                        stroke-width="2.6"
                        stroke-linecap="round"
                      />
                      <circle cx="0" cy="0" r="3.5" [attr.fill]="isDark() ? '#F2C94C' : '#D97706'" />
                    </g>
                  } @else {
                    <polygon
                      points="-12,-8 12,-8 0,9"
                      [attr.fill]="isDark() ? '#56CCF2' : '#0284C7'"
                      fill-opacity="0.22"
                      [attr.stroke]="isDark() ? '#56CCF2' : '#0284C7'"
                      stroke-width="1.8"
                    />
                  }
                </g>
              </g>
            </g>

            <!-- 7. #airflow-layer (Oral & Nasal Airflows + Fricative Turbulence) -->
            @if (phonemeService.showAirflow()) {
              <g id="airflow-layer" [attr.filter]="isDark() ? 'url(#airflowGlow)' : null" pointer-events="none">
                <!-- 7a. Oral Airflow Streamline -->
                @if (currentPaths().oralAirflowOpacity > 0.08) {
                  <g [attr.opacity]="currentPaths().oralAirflowOpacity">
                    <path
                      id="airflow-path"
                      [attr.d]="currentPaths().airflowPath"
                      fill="none"
                      [attr.stroke]="isDark() ? '#56CCF2' : '#0284C7'"
                      [attr.stroke-width]="
                        phonemeService.selectedPhoneme().hasAspiration ? '3.2' : '2.4'
                      "
                      stroke-linecap="round"
                      marker-end="url(#airflowArrowHead)"
                      [ngClass]="
                        audioService.isSlowMotion() ? 'animate-airflow-slow' : 'animate-airflow'
                      "
                    />

                    <circle r="3.2" [attr.fill]="isDark() ? '#56CCF2' : '#0284C7'">
                      <animateMotion
                        [attr.dur]="audioService.isSlowMotion() ? '1.8s' : '0.9s'"
                        repeatCount="indefinite"
                        [attr.path]="currentPaths().airflowPath"
                      />
                    </circle>
                    <circle r="2.6" [attr.fill]="isDark() ? '#BAE6FD' : '#0EA5E9'">
                      <animateMotion
                        [attr.dur]="audioService.isSlowMotion() ? '1.8s' : '0.9s'"
                        begin="0.45s"
                        repeatCount="indefinite"
                        [attr.path]="currentPaths().airflowPath"
                      />
                    </circle>
                  </g>
                }

                <!-- 7b. Nasal Airflow Streamline (#nasal-airflow-path for /m, n, ŋ/) -->
                @if (currentPaths().nasalAirflowOpacity > 0.08) {
                  <g [attr.opacity]="currentPaths().nasalAirflowOpacity">
                    <path
                      id="nasal-airflow-path"
                      [attr.d]="currentPaths().nasalAirflowPath"
                      fill="none"
                      [attr.stroke]="isDark() ? '#38BDF8' : '#0369A1'"
                      stroke-width="2.8"
                      stroke-linecap="round"
                      marker-end="url(#airflowArrowHead)"
                      [ngClass]="
                        audioService.isSlowMotion() ? 'animate-airflow-slow' : 'animate-airflow'
                      "
                    />
                    <circle r="3.2" [attr.fill]="isDark() ? '#38BDF8' : '#0369A1'">
                      <animateMotion
                        [attr.dur]="audioService.isSlowMotion() ? '1.8s' : '0.9s'"
                        repeatCount="indefinite"
                        [attr.path]="currentPaths().nasalAirflowPath"
                      />
                    </circle>
                    <circle r="2.6" [attr.fill]="isDark() ? '#E0F2FE' : '#0284C7'">
                      <animateMotion
                        [attr.dur]="audioService.isSlowMotion() ? '1.8s' : '0.9s'"
                        begin="0.45s"
                        repeatCount="indefinite"
                        [attr.path]="currentPaths().nasalAirflowPath"
                      />
                    </circle>
                  </g>
                }

                <!-- 7c. Fricative Turbulence Eddies -->
                @if (currentPaths().turbulenceCenter[2] > 0.25) {
                  <g
                    [attr.transform]="
                      'translate(' +
                      currentPaths().turbulenceCenter[0] +
                      ',' +
                      currentPaths().turbulenceCenter[1] +
                      ')'
                    "
                    [attr.opacity]="currentPaths().turbulenceCenter[2]"
                  >
                    <circle
                      cx="0"
                      cy="0"
                      r="9"
                      fill="none"
                      [attr.stroke]="isDark() ? '#56CCF2' : '#0284C7'"
                      stroke-width="1.8"
                      stroke-dasharray="4 3"
                      class="animate-spin"
                      style="animation-duration: 1.2s; transform-box: fill-box; transform-origin: center;"
                    />
                    <circle
                      cx="8"
                      cy="-3"
                      r="5"
                      fill="none"
                      [attr.stroke]="isDark() ? '#BAE6FD' : '#0EA5E9'"
                      stroke-width="1.4"
                      stroke-dasharray="3 2"
                    />
                  </g>
                }
              </g>
            }

            <!-- 8. #paper-test-layer -->
            @if (phonemeService.showPaperTest()) {
              <g id="paper-test-layer" pointer-events="none">
                <path
                  d="M 512 292 A 80 80 0 0 0 572 265"
                  fill="none"
                  stroke="#64748B"
                  stroke-width="1.4"
                  stroke-dasharray="3 3"
                />
                <line
                  x1="512"
                  y1="212"
                  x2="512"
                  y2="305"
                  [attr.stroke]="isDark() ? '#475569' : '#94A3B8'"
                  stroke-width="1"
                  stroke-dasharray="2 2"
                />
                <rect
                  x="504"
                  y="202"
                  width="16"
                  height="10"
                  rx="2"
                  [attr.fill]="isDark() ? '#475569' : '#CBD5E1'"
                  [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'"
                  stroke-width="1.2"
                />
                <path
                  id="aspiration-paper"
                  [attr.d]="paperStripPath()"
                  fill="none"
                  [attr.stroke]="isDark() ? '#FEF08A' : '#F59E0B'"
                  stroke-width="4.5"
                  stroke-linecap="round"
                />
                <rect
                  x="484"
                  y="312"
                  width="104"
                  height="24"
                  rx="6"
                  [attr.fill]="isDark() ? '#171B24' : '#FFFFFF'"
                  [attr.stroke]="isDark() ? '#FBBF24' : '#D97706'"
                  stroke-width="1.4"
                />
                <text
                  x="536"
                  y="328"
                  text-anchor="middle"
                  [attr.fill]="isDark() ? '#FDE047' : '#B45309'"
                  font-size="12"
                  font-family="monospace"
                  font-weight="700"
                >
                  {{ phonemeService.ui().viewer.paperDeflectionPrefix }} {{ activePaperAngle() }}°
                </text>
              </g>
            }

            <!-- 9. #comparison-ghost-layer -->
            @if (phonemeService.showComparison()) {
              <g id="comparison-ghost-layer" pointer-events="none" opacity="0.92">
                <path
                  [attr.d]="comparisonPaths().upperLip"
                  fill="none"
                  [attr.stroke]="isDark() ? '#FBBF24' : '#D97706'"
                  stroke-width="2.5"
                  stroke-dasharray="6 4"
                />
                <path
                  [attr.d]="comparisonPaths().lowerLip"
                  fill="none"
                  [attr.stroke]="isDark() ? '#FBBF24' : '#D97706'"
                  stroke-width="2.5"
                  stroke-dasharray="6 4"
                />
                <path
                  [attr.d]="comparisonPaths().tongueMain"
                  fill="none"
                  [attr.stroke]="isDark() ? '#FBBF24' : '#D97706'"
                  stroke-width="2.5"
                  stroke-dasharray="6 4"
                />
                <path
                  [attr.d]="comparisonPaths().softPalate"
                  fill="none"
                  [attr.stroke]="isDark() ? '#60A5FA' : '#2563EB'"
                  stroke-width="2.2"
                  stroke-dasharray="6 4"
                />
              </g>
            }

            <!-- 10. #anatomy-labels-layer (#labels-group): 11 Localized Callout Pills (8 tappable) -->
            @if (phonemeService.showAllLabels()) {
              <g
                id="anatomy-labels-layer"
                [attr.font-size]="isCompactViewport() ? '14.5' : '13.5'"
                font-weight="700"
              >
                <g id="labels-group">
                  <!-- 1. Nasal cavity -->
                  <g pointer-events="none">
                    <line x1="325" y1="126" x2="286" y2="52" [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'" stroke-width="1.2" stroke-dasharray="2.5 2.5" />
                    <rect x="210" y="26" width="136" height="26" rx="6" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="isDark() ? '#334155' : '#CBD5E1'" stroke-width="1.1" />
                    <text x="278" y="44" text-anchor="middle" [attr.fill]="isDark() ? '#CBD5E1' : '#334155'">
                      {{ phonemeService.ui().viewer.svgLabels.nasalCavity }}
                    </text>
                  </g>

                  <!-- 2. Hard palate -->
                  <g class="cursor-pointer" (click)="selectRegion('hard-palate')">
                    <line x1="368" y1="156" x2="424" y2="68" [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'" stroke-width="1.2" stroke-dasharray="2.5 2.5" pointer-events="none" />
                    <rect x="364" y="42" width="146" height="26" rx="6" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="selectedRegion() === 'hard-palate' ? (isDark() ? '#FBBF24' : '#D97706') : (isDark() ? '#334155' : '#CBD5E1')" [attr.stroke-width]="selectedRegion() === 'hard-palate' ? '2' : '1.1'" />
                    <text x="437" y="60" text-anchor="middle" [attr.fill]="isDark() ? '#F3B6C4' : '#9F1239'">
                      {{ phonemeService.ui().viewer.svgLabels.hardPalate }}
                    </text>
                  </g>

                  <!-- 3. Soft palate / Uvula -->
                  <g class="cursor-pointer" (click)="selectRegion('soft-palate')">
                    <line x1="238" y1="196" x2="152" y2="122" [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'" stroke-width="1.2" stroke-dasharray="2.5 2.5" pointer-events="none" />
                    <rect x="12" y="96" width="174" height="26" rx="6" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="selectedRegion() === 'soft-palate' ? (isDark() ? '#FBBF24' : '#D97706') : (isDark() ? '#334155' : '#CBD5E1')" [attr.stroke-width]="selectedRegion() === 'soft-palate' ? '2' : '1.1'" />
                    <text x="99" y="114" text-anchor="middle" [attr.fill]="isDark() ? '#E598A8' : '#9F1239'">
                      {{ phonemeService.ui().viewer.svgLabels.softPalate }}
                    </text>
                  </g>

                  <!-- 4. Lips -->
                  <g class="cursor-pointer" (click)="selectRegion('lips')">
                    <line x1="472" y1="205" x2="532" y2="152" [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'" stroke-width="1.2" stroke-dasharray="2.5 2.5" pointer-events="none" />
                    <rect x="494" y="126" width="90" height="26" rx="6" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="selectedRegion() === 'lips' ? (isDark() ? '#FBBF24' : '#D97706') : (isDark() ? '#334155' : '#CBD5E1')" [attr.stroke-width]="selectedRegion() === 'lips' ? '2' : '1.1'" />
                    <text x="539" y="144" text-anchor="middle" [attr.fill]="isDark() ? '#F3A6B4' : '#BE123C'">
                      {{ phonemeService.ui().viewer.svgLabels.lips }}
                    </text>
                  </g>

                  <!-- 5. Tongue tip -->
                  <g class="cursor-pointer" (click)="selectRegion('tongue-tip')">
                    <line x1="412" y1="246" x2="504" y2="352" [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'" stroke-width="1.2" stroke-dasharray="2.5 2.5" pointer-events="none" />
                    <rect x="440" y="352" width="146" height="26" rx="6" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="selectedRegion() === 'tongue-tip' ? (isDark() ? '#FBBF24' : '#D97706') : (isDark() ? '#334155' : '#CBD5E1')" [attr.stroke-width]="selectedRegion() === 'tongue-tip' ? '2' : '1.1'" />
                    <text x="513" y="370" text-anchor="middle" [attr.fill]="isDark() ? '#FBCFE8' : '#BE185D'">
                      {{ phonemeService.ui().viewer.svgLabels.tongueTip }}
                    </text>
                  </g>

                  <!-- 6. Tongue blade -->
                  <g class="cursor-pointer" (click)="selectRegion('tongue-blade')">
                    <line x1="382" y1="208" x2="432" y2="398" [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'" stroke-width="1.2" stroke-dasharray="2.5 2.5" pointer-events="none" />
                    <rect x="362" y="398" width="166" height="26" rx="6" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="selectedRegion() === 'tongue-blade' ? (isDark() ? '#FBBF24' : '#D97706') : (isDark() ? '#334155' : '#CBD5E1')" [attr.stroke-width]="selectedRegion() === 'tongue-blade' ? '2' : '1.1'" />
                    <text x="445" y="416" text-anchor="middle" [attr.fill]="isDark() ? '#F48FB1' : '#BE123C'">
                      {{ phonemeService.ui().viewer.svgLabels.tongueBlade }}
                    </text>
                  </g>

                  <!-- 7. Tongue dorsum -->
                  <g class="cursor-pointer" (click)="selectRegion('tongue-dorsum')">
                    <line x1="318" y1="218" x2="365" y2="442" [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'" stroke-width="1.2" stroke-dasharray="2.5 2.5" pointer-events="none" />
                    <rect x="310" y="442" width="160" height="26" rx="6" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="selectedRegion() === 'tongue-dorsum' ? (isDark() ? '#FBBF24' : '#D97706') : (isDark() ? '#334155' : '#CBD5E1')" [attr.stroke-width]="selectedRegion() === 'tongue-dorsum' ? '2' : '1.1'" />
                    <text x="390" y="460" text-anchor="middle" [attr.fill]="isDark() ? '#E05368' : '#9F1239'">
                      {{ phonemeService.ui().viewer.svgLabels.tongueDorsum }}
                    </text>
                  </g>

                  <!-- 8. Tongue root -->
                  <g class="cursor-pointer" (click)="selectRegion('tongue-root')">
                    <line x1="268" y1="292" x2="164" y2="275" [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'" stroke-width="1.2" stroke-dasharray="2.5 2.5" pointer-events="none" />
                    <rect x="16" y="262" width="148" height="26" rx="6" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="selectedRegion() === 'tongue-root' ? (isDark() ? '#FBBF24' : '#D97706') : (isDark() ? '#334155' : '#CBD5E1')" [attr.stroke-width]="selectedRegion() === 'tongue-root' ? '2' : '1.1'" />
                    <text x="90" y="280" text-anchor="middle" [attr.fill]="isDark() ? '#FCA5A5' : '#991B1B'">
                      {{ phonemeService.ui().viewer.svgLabels.tongueRoot }}
                    </text>
                  </g>

                  <!-- 9. Pharynx -->
                  <g pointer-events="none">
                    <line x1="204" y1="238" x2="170" y2="206" [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'" stroke-width="1.2" stroke-dasharray="2.5 2.5" />
                    <rect x="12" y="192" width="160" height="26" rx="6" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="isDark() ? '#334155' : '#CBD5E1'" stroke-width="1.1" />
                    <text x="92" y="210" text-anchor="middle" [attr.fill]="isDark() ? '#CBD5E1' : '#334155'">
                      {{ phonemeService.ui().viewer.svgLabels.pharynx }}
                    </text>
                  </g>

                  <!-- 10. Larynx -->
                  <g pointer-events="none">
                    <line x1="204" y1="365" x2="160" y2="342" [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'" stroke-width="1.2" stroke-dasharray="2.5 2.5" />
                    <rect x="20" y="328" width="140" height="26" rx="6" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="isDark() ? '#334155' : '#CBD5E1'" stroke-width="1.1" />
                    <text x="90" y="346" text-anchor="middle" [attr.fill]="isDark() ? '#D8B4E2' : '#6D28D9'">
                      {{ phonemeService.ui().viewer.svgLabels.larynx }}
                    </text>
                  </g>

                  <!-- 11. Vocal cords -->
                  <g class="cursor-pointer" (click)="selectRegion('vocal-cords')">
                    <line x1="204" y1="392" x2="162" y2="402" [attr.stroke]="isDark() ? '#94A3B8' : '#64748B'" stroke-width="1.2" stroke-dasharray="2.5 2.5" pointer-events="none" />
                    <rect x="16" y="390" width="146" height="26" rx="6" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="selectedRegion() === 'vocal-cords' ? (isDark() ? '#FBBF24' : '#D97706') : (isDark() ? '#334155' : '#CBD5E1')" [attr.stroke-width]="selectedRegion() === 'vocal-cords' ? '2' : '1.1'" />
                    <text x="89" y="408" text-anchor="middle" [attr.fill]="isDark() ? '#6FCF97' : '#047857'">
                      {{ phonemeService.ui().viewer.svgLabels.vocalCords }}
                    </text>
                  </g>
                </g>
              </g>
            }
          </svg>
        }

        <!-- ================================================================ -->
        <!-- VIEW 2: PALATAL TOP-DOWN VIEW (Từ trên xuống — 4 22 392 298)      -->
        <!-- ================================================================ -->
        @if (phonemeService.activeViewTab() === 'top-down') {
          <svg
            viewBox="4 22 392 298"
            preserveAspectRatio="xMidYMid meet"
            class="w-full h-auto max-h-[340px] sm:max-h-[410px] xl:max-h-[450px] block select-none relative z-[1]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 95 310 C 82 200, 114 78, 200 78 C 286 78, 318 200, 305 310 Z"
              [attr.fill]="isDark() ? '#171B24' : '#FFF1F2'"
              stroke="#B56576"
              stroke-width="4"
            />
            @if (!isDark()) {
              <path
                d="M 110 285 C 100 192, 128 96, 200 96 C 272 96, 300 192, 290 285"
                fill="none"
                stroke="#94A3B8"
                stroke-width="13"
                stroke-dasharray="15 4"
                stroke-linecap="round"
              />
            }
            <path
              d="M 110 285 C 100 192, 128 96, 200 96 C 272 96, 300 192, 290 285"
              fill="none"
              [attr.stroke]="isDark() ? '#F4F6F9' : '#FFFFFF'"
              stroke-width="10.5"
              stroke-dasharray="15 4"
              stroke-linecap="round"
            />
            <line x1="112" y1="152" x2="288" y2="152" [attr.stroke]="isDark() ? '#334155' : '#CBD5E1'" stroke-dasharray="4 4" />
            <line x1="106" y1="222" x2="294" y2="222" [attr.stroke]="isDark() ? '#334155' : '#CBD5E1'" stroke-dasharray="4 4" />

            <path
              [attr.d]="currentPaths().topDownTongueOutline"
              fill="#E05368"
              fill-opacity="0.22"
              stroke="#E05368"
              stroke-opacity="0.55"
              stroke-width="1.8"
            />
            <path
              [attr.d]="currentPaths().topDownContactPath"
              fill="#E05368"
              fill-opacity="0.78"
              [attr.stroke]="isDark() ? '#FBCFE8' : '#9F1239'"
              stroke-width="2"
            />

            @if (phonemeService.showComparison()) {
              <path
                [attr.d]="comparisonPaths().topDownContactPath"
                fill="none"
                [attr.stroke]="isDark() ? '#FBBF24' : '#D97706'"
                stroke-width="2.5"
                stroke-dasharray="6 4"
              />
            }

            @if (phonemeService.showAirflow()) {
              @if (currentPaths().isLateralAirflow) {
                <!-- Split Lateral Airflow Paths for /l/ (flowing around left and right tongue margins) -->
                <path
                  d="M 200 305 C 190 250, 142 208, 148 132 C 152 94, 174 72, 188 56"
                  fill="none"
                  [attr.stroke]="isDark() ? '#56CCF2' : '#0284C7'"
                  stroke-width="3"
                  class="animate-airflow"
                />
                <path
                  d="M 200 305 C 210 250, 258 208, 252 132 C 248 94, 226 72, 212 56"
                  fill="none"
                  [attr.stroke]="isDark() ? '#56CCF2' : '#0284C7'"
                  stroke-width="3"
                  class="animate-airflow"
                />
              } @else if (currentPaths().oralAirflowOpacity > 0.08) {
                <path
                  d="M 200 305 L 200 58"
                  fill="none"
                  [attr.stroke]="isDark() ? '#56CCF2' : '#0284C7'"
                  stroke-width="3.5"
                  [attr.opacity]="currentPaths().oralAirflowOpacity"
                  class="animate-airflow"
                />
              }
            }

            @if (phonemeService.showAllLabels()) {
              <g font-weight="700" text-anchor="middle">
                <text x="200" y="42" font-size="11.5" [attr.fill]="isDark() ? '#56CCF2' : '#0284C7'">
                  {{
                    currentPaths().isLateralAirflow
                      ? phonemeService.ui().viewer.topDown.lateralAirflowOut
                      : phonemeService.ui().viewer.topDown.airflowOut
                  }}
                </text>

                <rect x="12" y="123" width="376" height="24" rx="6" fill-opacity="0.88" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="isDark() ? '#334155' : '#CBD5E1'" />
                <text x="200" y="139" font-size="12" [attr.fill]="isDark() ? '#F3B6C4' : '#9F1239'">
                  {{ phonemeService.ui().viewer.topDown.alveolarZone }}
                </text>

                <rect x="12" y="175" width="376" height="24" rx="6" fill-opacity="0.88" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="isDark() ? '#334155' : '#CBD5E1'" />
                <text x="200" y="191" font-size="12" [attr.fill]="isDark() ? '#F3B6C4' : '#9F1239'">
                  {{ phonemeService.ui().viewer.topDown.palatalZone }}
                </text>

                <rect x="12" y="241" width="376" height="24" rx="6" fill-opacity="0.88" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="isDark() ? '#334155' : '#CBD5E1'" />
                <text x="200" y="257" font-size="12" [attr.fill]="isDark() ? '#E598A8' : '#881337'">
                  {{ phonemeService.ui().viewer.topDown.velarZone }}
                </text>
              </g>
            }
          </svg>

          @if (phonemeService.showAllLabels()) {
            <p class="relative z-[1] text-xs sm:text-[13px] font-medium text-center text-slate-600 dark:text-slate-400 px-2 mt-1.5 leading-snug">
              {{ phonemeService.ui().viewer.topDown.legend }}
            </p>
          }
        }

        <!-- ================================================================ -->
        <!-- VIEW 3: LARYNX & GLOTTIS VIEW (Thanh quản — 105 78 390 286)       -->
        <!-- ================================================================ -->
        @if (phonemeService.activeViewTab() === 'larynx') {
          @if (phonemeService.showAllLabels()) {
            <p class="relative z-[1] text-xs sm:text-sm font-bold text-center text-slate-800 dark:text-slate-100 px-2 mb-1 leading-snug">
              {{ phonemeService.ui().viewer.larynxView.title }}
            </p>
          }

          <svg
            viewBox="105 78 390 286"
            preserveAspectRatio="xMidYMid meet"
            class="w-full h-auto max-h-[340px] sm:max-h-[410px] xl:max-h-[450px] block select-none relative z-[1]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(100, 22)">
              <circle
                cx="200"
                cy="195"
                r="106"
                [attr.fill]="isDark() ? '#171B24' : '#FFF1F2'"
                stroke="#8C5868"
                stroke-width="6"
              />
              <path
                d="M 140 112 C 168 86, 232 86, 260 112"
                fill="none"
                stroke="#D88396"
                stroke-width="8"
                stroke-linecap="round"
              />

              <g [class.vocal-vibrating]="isVocalVibrating()">
                <path
                  [attr.d]="
                    'M 200 110 L ' +
                    (197 - currentPaths().glottalAperture * 36) +
                    ' 264 L 146 248 L 152 124 Z'
                  "
                  [attr.fill]="isDark() ? '#F4F6F9' : '#FFFFFF'"
                  stroke="#D88396"
                  stroke-width="2"
                />
                <path
                  [attr.d]="
                    'M 200 110 L ' +
                    (203 + currentPaths().glottalAperture * 36) +
                    ' 264 L 254 248 L 248 124 Z'
                  "
                  [attr.fill]="isDark() ? '#F4F6F9' : '#FFFFFF'"
                  stroke="#D88396"
                  stroke-width="2"
                />
                <circle
                  [attr.cx]="194 - currentPaths().glottalAperture * 32"
                  cy="264"
                  r="9.5"
                  fill="#C97A8B"
                />
                <circle
                  [attr.cx]="206 + currentPaths().glottalAperture * 32"
                  cy="264"
                  r="9.5"
                  fill="#C97A8B"
                />
              </g>

              <polygon
                [attr.points]="
                  '200,112 ' +
                  (202 + currentPaths().glottalAperture * 33) +
                  ',262 ' +
                  (198 - currentPaths().glottalAperture * 33) +
                  ',262'
                "
                [attr.fill]="isDark() ? '#090D14' : '#1E293B'"
              />

              @if (phonemeService.selectedPhoneme().isVoiced) {
                <path
                  d="M 168 186 Q 200 176, 232 186 M 168 206 Q 200 216, 232 206"
                  fill="none"
                  [attr.stroke]="isDark() ? '#6FCF97' : '#059669'"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  class="vocal-vibrating"
                />
              }
            </g>

            @if (phonemeService.showAllLabels()) {
              <g font-weight="700" text-anchor="middle" font-size="14">
                <rect x="120" y="80" width="360" height="26" rx="6" fill-opacity="0.92" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="isDark() ? '#334155' : '#CBD5E1'" />
                <text x="300" y="98" [attr.fill]="isDark() ? '#F3B6C4' : '#9F1239'">
                  {{ phonemeService.ui().viewer.larynxView.epiglottis }}
                </text>

                <rect x="120" y="332" width="360" height="26" rx="6" fill-opacity="0.92" [attr.fill]="isDark() ? '#0F172A' : '#FFFFFF'" [attr.stroke]="isDark() ? '#334155' : '#CBD5E1'" />
                <text x="300" y="350" [attr.fill]="isDark() ? '#F3B6C4' : '#9F1239'">
                  {{ phonemeService.ui().viewer.larynxView.arytenoid }}
                </text>
              </g>
            }
          </svg>

          @if (phonemeService.showAllLabels()) {
            <p
              class="relative z-[1] text-xs sm:text-[13px] font-semibold text-center px-2 mt-1.5 leading-snug"
              [ngClass]="
                phonemeService.selectedPhoneme().isVoiced
                  ? 'text-emerald-700 dark:text-[#6FCF97]'
                  : 'text-sky-700 dark:text-[#56CCF2]'
              "
            >
              {{
                phonemeService.selectedPhoneme().isVoiced
                  ? phonemeService
                      .ui()
                      .viewer.larynxView.voicedStatus(
                        phonemeService.selectedPhoneme().acousticProfile.f0
                      )
                  : phonemeService.ui().viewer.larynxView.voicelessStatus
              }}
            </p>
          }
        }

          <!-- Organ Role Tooltip (docks below SVG on narrow phones so diagram stays uncovered) -->
          @if (selectedRegionMeta(); as region) {
            <div
              class="mt-2 w-full sm:mt-0 sm:w-auto sm:absolute sm:bottom-2.5 sm:left-2.5 sm:max-w-md z-20 p-3 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-rose-400/60 dark:border-rose-500/50 shadow-2xl backdrop-blur-md text-xs space-y-1"
            >
              <div class="flex items-center justify-between gap-3">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                  <span class="font-bold text-slate-900 dark:text-white">{{ region.title }}</span>
                  <span class="text-[10px] font-mono text-rose-600 dark:text-rose-300">({{ region.subtitle }})</span>
                </div>
                <button
                  type="button"
                  (click)="clearSelectedRegion()"
                  class="text-slate-400 hover:text-slate-700 dark:hover:text-white text-xs px-1"
                >
                  ✕
                </button>
              </div>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                {{ selectedRegionRoleText() }}
              </p>
            </div>
          }
        </div>
      </div>

      <!-- ================================================================== -->
      <!-- 3. TIMELINE SCRUBBER & AUDIO CONTROLS                              -->
      <!-- ================================================================== -->
      <app-timeline-controls class="shrink-0" />

      <!-- ================================================================== -->
      <!-- 4. SECONDARY BOTTOM CARDS (Always Visible Below Timeline, 180x140) -->
      <!-- ================================================================== -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0">
        <!-- Card 1: Front Mouth View (180x140 SVG) -->
        <div
          class="p-3 rounded-2xl dark:bg-slate-900/95 bg-white border dark:border-slate-800 border-slate-200 flex items-center justify-between gap-3 shadow-sm"
        >
          <div class="space-y-1 min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-[#D16677] shrink-0"></span>
              <h4 class="text-xs font-bold dark:text-slate-100 text-slate-800">
                {{ phonemeService.ui().viewer.frontMouthCard.title }}
              </h4>
            </div>
            <p class="text-[11px] dark:text-slate-400 text-slate-500 leading-snug">
              @if (currentPaths().isLabiodental) {
                {{ phonemeService.ui().viewer.frontMouthCard.labiodentalDesc }}
              } @else if (currentPaths().frontLipAperture.ry < 2) {
                {{ phonemeService.ui().viewer.frontMouthCard.bilabialSealDesc }}
              } @else if (currentPaths().frontLipAperture.pucker > 0.65) {
                {{
                  phonemeService
                    .ui()
                    .viewer.frontMouthCard.strongPucker(
                      mathRound(currentPaths().frontLipAperture.pucker * 100)
                    )
                }}
              } @else if (currentPaths().frontLipAperture.pucker > 0.25) {
                {{ phonemeService.ui().viewer.frontMouthCard.lightPucker }}
              } @else {
                {{ phonemeService.ui().viewer.frontMouthCard.spreadOrNeutral }}
              }
            </p>
            <div class="text-[10px] font-mono text-rose-600 dark:text-rose-400">
              {{ phonemeService.ui().viewer.frontMouthCard.aperturePrefix }}
              {{ currentPaths().frontLipAperture.rx * 2 | number: '1.0-0' }}×{{
                currentPaths().frontLipAperture.ry * 2 | number: '1.0-0'
              }}mm
            </div>
          </div>

          <!-- 180x140 Front Mouth SVG -->
          <div
            class="w-28 h-20 sm:w-32 sm:h-24 rounded-xl bg-slate-50 dark:bg-[#12161F] border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 overflow-hidden"
          >
            <svg viewBox="0 0 180 140" class="w-full h-full">
              <defs>
                <clipPath id="oralApertureClip">
                  <ellipse
                    cx="90"
                    cy="70"
                    [attr.rx]="currentPaths().frontLipAperture.rx"
                    [attr.ry]="currentPaths().frontLipAperture.ry"
                  />
                </clipPath>
              </defs>

              <ellipse
                cx="90"
                cy="70"
                [attr.rx]="
                  currentPaths().frontLipAperture.rx +
                  currentPaths().frontLipAperture.lipThickness * 1.35
                "
                [attr.ry]="
                  currentPaths().frontLipAperture.ry +
                  currentPaths().frontLipAperture.lipThickness * 1.25
                "
                fill="#D16677"
                stroke="#E598A8"
                stroke-width="2"
              />

              @if (currentPaths().frontLipAperture.pucker > 0.5) {
                <g stroke="#B56576" stroke-width="1.2" opacity="0.7">
                  <line x1="90" y1="36" x2="90" y2="46" />
                  <line x1="90" y1="94" x2="90" y2="104" />
                  <line x1="56" y1="70" x2="66" y2="70" />
                  <line x1="114" y1="70" x2="124" y2="70" />
                </g>
              }

              <ellipse
                cx="90"
                cy="70"
                [attr.rx]="currentPaths().frontLipAperture.rx"
                [attr.ry]="currentPaths().frontLipAperture.ry"
                [attr.fill]="isDark() ? '#171B24' : '#334155'"
              />

              <g clip-path="url(#oralApertureClip)">
                <ellipse
                  cx="90"
                  [attr.cy]="currentPaths().frontLipAperture.tongueTipY"
                  rx="26"
                  ry="14"
                  fill="#E05368"
                />
                <rect
                  x="58"
                  y="52"
                  width="64"
                  height="9"
                  rx="2"
                  fill="#F4F6F9"
                  [attr.opacity]="currentPaths().frontLipAperture.teethVisible"
                />
                <rect
                  x="60"
                  y="79"
                  width="60"
                  height="8"
                  rx="2"
                  fill="#E2E8F0"
                  [attr.opacity]="currentPaths().frontLipAperture.teethVisible * 0.85"
                />
              </g>

              <ellipse
                cx="90"
                cy="70"
                [attr.rx]="currentPaths().frontLipAperture.rx"
                [attr.ry]="currentPaths().frontLipAperture.ry"
                fill="none"
                stroke="#F3A6B4"
                stroke-width="1.5"
              />

              <!-- Labiodental Upper Incisors Overlapping Lower Lip (/f, v, p͡f/) -->
              @if (currentPaths().isLabiodental) {
                <g>
                  <rect x="64" y="61" width="12" height="11" rx="2" fill="#F4F6F9" stroke="#CBD2D9" stroke-width="1" />
                  <rect x="78" y="60" width="12" height="12" rx="2" fill="#F4F6F9" stroke="#CBD2D9" stroke-width="1" />
                  <rect x="90" y="60" width="12" height="12" rx="2" fill="#F4F6F9" stroke="#CBD2D9" stroke-width="1" />
                  <rect x="104" y="61" width="12" height="11" rx="2" fill="#F4F6F9" stroke="#CBD2D9" stroke-width="1" />
                </g>
              }

              @if (phonemeService.showComparison()) {
                <ellipse
                  cx="90"
                  cy="70"
                  [attr.rx]="comparisonPaths().frontLipAperture.rx"
                  [attr.ry]="comparisonPaths().frontLipAperture.ry"
                  fill="none"
                  [attr.stroke]="isDark() ? '#FBBF24' : '#D97706'"
                  stroke-width="2"
                  stroke-dasharray="4 3"
                />
              }
            </svg>
          </div>
        </div>

        <!-- Card 2: Glottal State Card (180x140 SVG) -->
        <div
          class="p-3 rounded-2xl dark:bg-slate-900/95 bg-white border dark:border-slate-800 border-slate-200 flex items-center justify-between gap-3 shadow-sm"
        >
          <div class="space-y-1 min-w-0">
            <div class="flex items-center gap-1.5">
              <span
                class="w-2 h-2 rounded-full shrink-0"
                [ngClass]="
                  phonemeService.selectedPhoneme().isVoiced
                    ? 'bg-emerald-500 dark:bg-[#6FCF97] animate-pulse'
                    : 'bg-sky-500 dark:bg-[#56CCF2]'
                "
              ></span>
              <h4 class="text-xs font-bold dark:text-slate-100 text-slate-800">
                {{
                  phonemeService.selectedPhoneme().isVoiced
                    ? phonemeService.ui().viewer.glottalCard.voicedTitle
                    : phonemeService.ui().viewer.glottalCard.voicelessTitle
                }}
              </h4>
            </div>
            <p class="text-[11px] dark:text-slate-400 text-slate-500 leading-snug">
              @if (phonemeService.selectedPhoneme().isVoiced) {
                {{
                  phonemeService
                    .ui()
                    .viewer.glottalCard.voicedDesc(
                      phonemeService.selectedPhoneme().acousticProfile.f0
                    )
                }}
              } @else {
                {{ phonemeService.ui().viewer.glottalCard.voicelessDesc }}
              }
            </p>
            <div
              class="text-[10px] font-mono"
              [ngClass]="
                phonemeService.selectedPhoneme().isVoiced
                  ? 'text-emerald-600 dark:text-[#6FCF97]'
                  : 'text-sky-600 dark:text-[#56CCF2]'
              "
            >
              {{
                phonemeService.selectedPhoneme().isVoiced
                  ? phonemeService.ui().viewer.glottalCard.voicedBadge
                  : phonemeService.ui().viewer.glottalCard.voicelessBadge
              }}
            </div>
          </div>

          <!-- 180x140 Mini Vocal Fold Triangle SVG -->
          <div
            class="w-28 h-20 sm:w-32 sm:h-24 rounded-xl bg-slate-50 dark:bg-[#12161F] border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 overflow-hidden"
          >
            <svg viewBox="0 0 180 140" class="w-full h-full">
              <circle
                cx="90"
                cy="66"
                r="46"
                [attr.fill]="isDark() ? '#171B24' : '#FFF1F2'"
                stroke="#8C5868"
                stroke-width="2.5"
              />

              <g [class.vocal-vibrating]="isVocalVibrating()">
                <path
                  [attr.d]="
                    'M 90 28 L ' +
                    (88 - currentPaths().glottalAperture * 18) +
                    ' 98 L 64 92 L 68 34 Z'
                  "
                  [attr.fill]="isDark() ? '#F4F6F9' : '#FFFFFF'"
                  stroke="#D88396"
                  stroke-width="1.5"
                />
                <path
                  [attr.d]="
                    'M 90 28 L ' +
                    (92 + currentPaths().glottalAperture * 18) +
                    ' 98 L 116 92 L 112 34 Z'
                  "
                  [attr.fill]="isDark() ? '#F4F6F9' : '#FFFFFF'"
                  stroke="#D88396"
                  stroke-width="1.5"
                />
                <polygon
                  [attr.points]="
                    '90,30 ' +
                    (91 + currentPaths().glottalAperture * 16) +
                    ',96 ' +
                    (89 - currentPaths().glottalAperture * 16) +
                    ',96'
                  "
                  [attr.fill]="isDark() ? '#090D14' : '#1E293B'"
                />
              </g>

              @if (phonemeService.selectedPhoneme().isVoiced) {
                <path
                  d="M 24 124 Q 40 112, 56 124 T 88 124 T 120 124 T 152 124"
                  fill="none"
                  [attr.stroke]="isDark() ? '#6FCF97' : '#059669'"
                  stroke-width="2.2"
                  stroke-linecap="round"
                  [class.vocal-vibrating]="isVocalVibrating()"
                />
              } @else {
                <line
                  x1="28"
                  y1="124"
                  x2="152"
                  y2="124"
                  [attr.stroke]="isDark() ? '#56CCF2' : '#0284C7'"
                  stroke-width="2"
                  stroke-dasharray="5 4"
                  class="animate-airflow"
                />
              }
            </svg>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AnatomyViewerComponent implements AfterViewInit, OnDestroy {
  readonly phonemeService = inject(PhonemeDataService);
  readonly audioService = inject(AudioSyncService);
  readonly naturalHeight = input<boolean>(false);
  readonly isDark = computed(() => this.phonemeService.isDarkMode());
  readonly isCompactViewport = signal<boolean>(
    typeof window !== 'undefined' && window.innerWidth < 640
  );

  @HostListener('window:resize')
  onViewportResize(): void {
    if (typeof window !== 'undefined') {
      this.isCompactViewport.set(window.innerWidth < 640);
    }
  }

  @ViewChild('upperLipEl') upperLipEl?: ElementRef<SVGPathElement>;
  @ViewChild('lowerLipEl') lowerLipEl?: ElementRef<SVGPathElement>;
  @ViewChild('tongueMainEl') tongueMainEl?: ElementRef<SVGPathElement>;
  @ViewChild('tongueTipEl') tongueTipEl?: ElementRef<SVGPathElement>;
  @ViewChild('tongueBladeEl') tongueBladeEl?: ElementRef<SVGPathElement>;
  @ViewChild('tongueBodyEl') tongueBodyEl?: ElementRef<SVGPathElement>;
  @ViewChild('tongueRootEl') tongueRootEl?: ElementRef<SVGPathElement>;
  @ViewChild('velumPathEl') velumPathEl?: ElementRef<SVGPathElement>;

  /** Hiển thị / thu gọn gợi ý bấm vào bộ phận giải phẫu */
  readonly showOrganHint = signal<boolean>(true);

  /** Bộ phận giải phẫu đang được người dùng click chọn để xem chú thích */
  readonly selectedRegion = signal<AnatomicalRegionId | null>(null);

  readonly selectedRegionMeta = computed(() => {
    const id = this.selectedRegion();
    if (!id) return null;
    return this.phonemeService.ui().viewer.organNames[id] ?? null;
  });

  readonly selectedRegionRoleText = computed<string>(() => {
    const id = this.selectedRegion();
    if (!id) return '';
    return this.phonemeService.selectedPhoneme().organRoles[id] ?? '';
  });

  /** Đường dẫn các cơ quan đã nội suy theo tiến trình timeline (0% -> 30% -> 70% -> 100%) */
  readonly currentPaths = computed(() => this.audioService.interpolatedOrganPaths());

  /** Đường dẫn của âm đối chiếu (lấy từ dropdown tùy chọn hoặc cặp mặc định comparedWith) */
  readonly comparisonPaths = computed(() => {
    const customOrMatched = this.phonemeService.comparisonPhoneme();
    if (customOrMatched) {
      return customOrMatched.svgKeyframes.target;
    }
    return this.phonemeService.selectedPhoneme().svgKeyframes.comparisonTarget;
  });

  /** Dây thanh quản rung khi âm là hữu thanh và đang ở gần vùng đỉnh phát âm (30%–70%) */
  readonly isVocalVibrating = computed(() => {
    const phoneme = this.phonemeService.selectedPhoneme();
    return phoneme.isVoiced && this.audioService.targetIntensity() > 0.3;
  });

  /** Góc lệch thực tế của tờ giấy thử bật hơi (0° -> 45°) */
  readonly activePaperAngle = computed(() => {
    const angle = this.currentPaths().paperDeflectionAngle;
    const intensity = this.audioService.targetIntensity();
    return Math.round(angle * intensity);
  });

  /** Đường dẫn SVG cho tờ giấy thử hơi trước môi (x=512, y=212..302), uốn sang phải khi bật hơi */
  readonly paperStripPath = computed(() => {
    const deg = this.activePaperAngle();
    const rad = (deg * Math.PI) / 180;
    const length = 86;
    const endX = +(512 + Math.sin(rad) * length).toFixed(1);
    const endY = +(212 + Math.cos(rad) * length).toFixed(1);
    const ctrlX = +(512 + Math.sin(rad * 0.65) * (length * 0.55)).toFixed(1);
    const ctrlY = +(212 + Math.cos(rad * 0.65) * (length * 0.55)).toFixed(1);
    return `M 512 212 Q ${ctrlX} ${ctrlY}, ${endX} ${endY}`;
  });

  private masterTimeline: gsap.core.Timeline | null = null;
  private lastPhonemeId = '';

  constructor() {
    effect(() => {
      const p = this.audioService.progress();
      if (this.masterTimeline) {
        this.masterTimeline.progress(p);
      }
    });

    effect(() => {
      const selected = this.phonemeService.selectedPhoneme();
      if (selected && selected.id !== this.lastPhonemeId) {
        this.lastPhonemeId = selected.id;
        if (this.tongueMainEl?.nativeElement) {
          this.rebuildGsapTimeline();
          gsap.fromTo(
            [
              this.upperLipEl?.nativeElement,
              this.lowerLipEl?.nativeElement,
              this.tongueMainEl?.nativeElement,
              this.velumPathEl?.nativeElement
            ].filter(Boolean),
            { opacity: 0.82 },
            {
              opacity: 1,
              duration: 0.28,
              ease: 'power2.out',
              overwrite: 'auto'
            }
          );
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.rebuildGsapTimeline();
  }

  ngOnDestroy(): void {
    this.masterTimeline?.kill();
  }

  mathRound(val: number): number {
    return Math.round(val);
  }

  onComparisonSelectChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.phonemeService.setComparisonPhoneme(select.value);
  }

  toggleOrganHint(): void {
    this.showOrganHint.update((v) => !v);
  }

  selectRegion(region: AnatomicalRegionId): void {
    this.selectedRegion.update((curr) => (curr === region ? null : region));
  }

  clearSelectedRegion(): void {
    this.selectedRegion.set(null);
  }

  private rebuildGsapTimeline(): void {
    this.masterTimeline?.kill();
    this.masterTimeline = gsap.timeline({ paused: true });
    this.masterTimeline.to({}, { duration: 0.3 });
    this.masterTimeline.to({}, { duration: 0.4 });
    this.masterTimeline.to({}, { duration: 0.3 });
    this.masterTimeline.progress(this.audioService.progress());
  }
}
