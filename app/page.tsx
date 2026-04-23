'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AudioLines, BrainCircuit, Trophy } from 'lucide-react';
import { AppShell } from '@/components/app-shell';
import { ProgressBar } from '@/components/progress-bar';
import { getProgress } from '@/lib/storage';
import { PatientProgress } from '@/lib/types';

export default function HomePage() {
  const [progress, setProgress] = useState<PatientProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const completed = progress?.levels.filter((l) => l.completed).length ?? 0;

  return (
    <AppShell>
      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="card space-y-5">
          <p className="inline-flex rounded-full bg-skysoft px-3 py-1 text-sm font-medium">CBT game</p>
          <h1 className="text-3xl font-bold md:text-4xl">Base 44 – Modo Misión</h1>
          <p className="max-w-2xl text-gray-700">
            Entrena tu mente en pasos concretos. Una misión por pantalla, feedback inmediato y avance claro.
          </p>
          <ProgressBar value={completed} total={6} />

          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/paciente/niveles" className="cta-primary text-lg">
              Comenzar
            </Link>
            <Link href="/terapeuta" className="cta-secondary text-lg">
              Ver panel terapeuta
            </Link>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card">
            <h2 className="mb-3 text-lg font-semibold">Resumen actual</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><BrainCircuit className="h-4 w-4" /> Nivel actual: {progress?.currentLevel ?? 1}</li>
              <li className="flex items-center gap-2"><Trophy className="h-4 w-4" /> Ejercicios completados: {progress?.totalCompleted ?? 0}</li>
              <li className="flex items-center gap-2"><AudioLines className="h-4 w-4" /> Sonido de misión: placeholder visual</li>
            </ul>
          </div>
        </aside>
      </section>
    </AppShell>
  );
}
