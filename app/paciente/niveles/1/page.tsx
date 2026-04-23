'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { Brain, CheckCircle2 } from 'lucide-react';
import { AppShell } from '@/components/app-shell';
import { saveRadarMentalEntry } from '@/lib/storage';

export default function RadarMentalPage() {
  const [saved, setSaved] = useState(false);
  const [emotionIntensity, setEmotionIntensity] = useState(50);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    saveRadarMentalEntry({
      situation: String(formData.get('situation') ?? ''),
      automaticThought: String(formData.get('automaticThought') ?? ''),
      emotionIntensity,
      behavior: String(formData.get('behavior') ?? ''),
      createdAt: new Date().toISOString()
    });

    setSaved(true);
    event.currentTarget.reset();
    setEmotionIntensity(50);
  }

  return (
    <AppShell>
      <section className="mx-auto max-w-3xl space-y-5">
        <header className="card">
          <p className="text-sm text-gray-500">Nivel 1</p>
          <h1 className="text-3xl font-bold">Radar Mental</h1>
          <p className="mt-2 text-gray-700">Objetivo: detectar la secuencia situación → pensamiento → emoción → conducta.</p>
        </header>

        <form onSubmit={handleSubmit} className="card space-y-4">
          <Input label="Situación" name="situation" placeholder="¿Qué pasó?" required />
          <Input label="Pensamiento automático" name="automaticThought" placeholder="¿Qué te dijiste?" required />

          <label className="block">
            <span className="mb-2 block font-medium">Emoción (0-100)</span>
            <input
              type="range"
              min={0}
              max={100}
              value={emotionIntensity}
              onChange={(e) => setEmotionIntensity(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm text-gray-600">Intensidad actual: {emotionIntensity}</span>
          </label>

          <Input label="Conducta" name="behavior" placeholder="¿Qué hiciste después?" required />

          <button type="submit" className="cta-primary w-full text-lg">
            <Brain className="mr-2 h-5 w-5" /> Guardar respuesta
          </button>
        </form>

        {saved && (
          <div className="card border-sage bg-green-50">
            <p className="flex items-center font-semibold text-green-800"><CheckCircle2 className="mr-2 h-5 w-5" /> ¡Misión completada!</p>
            <p className="mt-1 text-green-900">Excelente. Desbloqueaste el Nivel 2: Traductor Emocional.</p>
            <Link href="/paciente/niveles" className="cta-primary mt-4">Volver al mapa</Link>
          </div>
        )}
      </section>
    </AppShell>
  );
}

function Input({
  label,
  name,
  placeholder,
  required = false
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-medium">{label}</span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-cloud px-4 py-3 text-base outline-none focus:ring-2 focus:ring-skysoft"
      />
    </label>
  );
}
