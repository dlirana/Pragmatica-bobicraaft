'use client';

import { useEffect, useMemo, useState } from 'react';
import { Activity, AlertTriangle, Brain, ClipboardList, HeartPulse, Target } from 'lucide-react';
import { AppShell } from '@/components/app-shell';
import { getProgress } from '@/lib/storage';
import { PatientProgress } from '@/lib/types';

export default function TherapistDashboardPage() {
  const [progress, setProgress] = useState<PatientProgress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const frequentThoughts = useMemo(
    () => progress?.radarMentalEntries.slice(0, 3).map((e) => e.automaticThought) ?? [],
    [progress]
  );

  return (
    <AppShell>
      <section className="space-y-5">
        <header className="card">
          <h1 className="text-3xl font-bold">Panel terapeuta</h1>
          <p className="mt-2 text-gray-700">Vista resumida de progreso, distorsiones y contacto emocional.</p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard icon={Target} label="Nivel actual" value={String(progress?.currentLevel ?? 1)} />
          <StatCard icon={ClipboardList} label="Ejercicios completados" value={String(progress?.totalCompleted ?? 0)} />
          <StatCard icon={HeartPulse} label="Contacto emocional" value={progress?.emotionalContact ?? 'bajo'} />
          <StatCard icon={Brain} label="Experimentos completados" value="0" />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="card">
            <h2 className="mb-3 flex items-center text-lg font-semibold"><Activity className="mr-2 h-5 w-5" /> Pensamientos frecuentes</h2>
            {frequentThoughts.length > 0 ? (
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                {frequentThoughts.map((thought) => (
                  <li key={thought}>{thought}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">Aún sin registros. Se mostrarán conforme avance el paciente.</p>
            )}
          </article>

          <article className="card">
            <h2 className="mb-3 flex items-center text-lg font-semibold"><AlertTriangle className="mr-2 h-5 w-5" /> Distorsiones más marcadas</h2>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-cloud text-gray-500">
                  <th className="py-2">Distorsión</th>
                  <th className="py-2">Frecuencia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-cloud"><td className="py-2">Catastrofismo</td><td className="py-2">0</td></tr>
                <tr className="border-b border-cloud"><td className="py-2">Lectura de mente</td><td className="py-2">0</td></tr>
                <tr><td className="py-2">Pensamiento blanco/negro</td><td className="py-2">0</td></tr>
              </tbody>
            </table>
          </article>
        </div>
      </section>
    </AppShell>
  );
}

function StatCard({
  icon: Icon,
  label,
  value
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <article className="card">
      <p className="mb-2 inline-flex rounded-lg bg-skysoft p-2"><Icon className="h-5 w-5" /></p>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold capitalize">{value}</p>
    </article>
  );
}
