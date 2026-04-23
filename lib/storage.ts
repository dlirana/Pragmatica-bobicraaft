'use client';

import { defaultProgress } from './mock-data';
import { PatientProgress, RadarMentalEntry } from './types';

const STORAGE_KEY = 'cbt-game-progress-v1';

export function getProgress(): PatientProgress {
  if (typeof window === 'undefined') {
    return defaultProgress;
  }

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultProgress;

  try {
    return JSON.parse(raw) as PatientProgress;
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: PatientProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function saveRadarMentalEntry(entry: RadarMentalEntry): PatientProgress {
  const progress = getProgress();

  const updated: PatientProgress = {
    ...progress,
    currentLevel: Math.max(progress.currentLevel, 2),
    totalCompleted: progress.totalCompleted + 1,
    levels: progress.levels.map((level) =>
      level.id === 1 ? { ...level, completed: true, stars: 3 } : level
    ),
    radarMentalEntries: [entry, ...progress.radarMentalEntries]
  };

  saveProgress(updated);
  return updated;
}
