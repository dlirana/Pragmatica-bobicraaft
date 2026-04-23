# CBT game — Base 44 Modo Misión

App web gamificada de Terapia Cognitivo-Conductual con dos áreas:
- Vista paciente
- Panel terapeuta

## Stack
- Next.js 14
- React
- TypeScript
- Tailwind CSS

## Ejecutar localmente
```bash
npm install
npm run dev
```
Abrir: `http://localhost:3000`

## Estructura
- `app/page.tsx` → Home/portada
- `app/paciente/niveles/page.tsx` → Mapa de niveles
- `app/paciente/niveles/1/page.tsx` → Nivel 1 completo (Radar Mental)
- `app/terapeuta/page.tsx` → Panel terapeuta básico
- `components/` → UI reusable (layout, cards, progress bar)
- `lib/mock-data.ts` + `lib/storage.ts` → Persistencia localStorage + mock inicial

## Persistencia
Se usa `localStorage` (`cbt-game-progress-v1`) para simular backend.
La estructura de tipos en `lib/types.ts` está pensada para migrar fácil a Supabase.

## Futuras mejoras propuestas
1. Implementar niveles 2–6 completos con validaciones y feedback específico.
2. Añadir registro diario y pantalla de logros con insignias dinámicas.
3. Integrar autenticación y base de datos en Supabase.
4. Añadir analítica clínica avanzada en panel terapeuta (tendencias semanales).
5. Agregar tests (unitarios + e2e) y telemetría de UX.
