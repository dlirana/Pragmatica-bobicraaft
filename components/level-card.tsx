import Link from 'next/link';
import { Lock, Star } from 'lucide-react';
import { LevelSummary } from '@/lib/types';

export function LevelCard({
  level,
  unlocked
}: {
  level: LevelSummary;
  unlocked: boolean;
}) {
  return (
    <article className="card flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-gray-500">Nivel {level.id}</p>
          <h3 className="text-xl font-semibold">{level.title}</h3>
          <p className="text-sm text-gray-600">{level.subtitle}</p>
        </div>
        {!unlocked && <Lock className="h-5 w-5 text-gray-500" aria-label="Bloqueado" />}
      </div>

      <div className="flex gap-1" aria-label={`Estrellas ${level.stars} de 3`}>
        {[1, 2, 3].map((n) => (
          <Star
            key={n}
            className={`h-5 w-5 ${n <= level.stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>

      {unlocked ? (
        <Link href={`/paciente/niveles/${level.id}`} className="cta-primary w-full text-center">
          Entrar a misión
        </Link>
      ) : (
        <button className="cta-secondary w-full" disabled>
          Completa el nivel anterior
        </button>
      )}
    </article>
  );
}
