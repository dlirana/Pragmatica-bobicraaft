import Link from 'next/link';
import { AppShell } from '@/components/app-shell';

const titles: Record<string, string> = {
  '2': 'Traductor Emocional',
  '3': 'Distorsiones',
  '4': 'Reprogramador',
  '5': 'Experimento Conductual',
  '6': 'Boss Level'
};

export default function PlaceholderLevelPage({ params }: { params: { id: string } }) {
  const title = titles[params.id] ?? `Nivel ${params.id}`;

  return (
    <AppShell>
      <section className="mx-auto max-w-2xl card">
        <p className="text-sm text-gray-500">Nivel {params.id}</p>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-3 text-gray-700">
          Esta pantalla queda preparada para implementar el flujo completo del nivel en la siguiente iteración.
        </p>
        <Link href="/paciente/niveles" className="cta-primary mt-5">Volver al mapa</Link>
      </section>
    </AppShell>
  );
}
