export function ProgressBar({ value, total }: { value: number; total: number }) {
  const pct = Math.min(100, Math.round((value / total) * 100));

  return (
    <div>
      <div className="mb-2 flex justify-between text-sm text-gray-600">
        <span>Progreso general</span>
        <span>{pct}%</span>
      </div>
      <div className="h-3 w-full rounded-full bg-cloud">
        <div
          className="h-3 rounded-full bg-sage transition-all duration-500 ease-smooth"
          style={{ width: `${pct}%` }}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
          role="progressbar"
        />
      </div>
    </div>
  );
}
