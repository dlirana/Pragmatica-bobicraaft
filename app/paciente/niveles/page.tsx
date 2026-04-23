'use client';

import { useEffect, useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { LevelCard } from '@/components/level-card';
import { getProgress } from '@/lib/storage';
import { PatientProgress } from '@/lib/types';

export default function LevelsMapPage() {
  const [progress, setProgress] = useState<PatientProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  if (!progress) {
    return <AppShell><p className="card">Cargando mapa...</p></AppShell>;
  }

  return (
    <AppShell>
      <section className="space-y-5">
        <header className="card">
          <h1 className="text-3xl font-bold">Mapa de niveles</h1>
          <p className="mt-2 text-gray-700">Sigue la ruta. Solo se desbloquea un nivel nuevo al completar el anterior.</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {progress.levels.map((level, index) => {
            const previousCompleted = index === 0 ? true : progress.levels[index - 1].completed;
            return <LevelCard key={level.id} level={level} unlocked={previousCompleted} />;
          })}
        </div>
      </section>
    </AppShell>
  );
}
