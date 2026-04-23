import { PatientProgress } from './types';

export const defaultProgress: PatientProgress = {
  currentLevel: 1,
  totalCompleted: 0,
  emotionalContact: 'bajo',
  levels: [
    { id: 1, title: 'Radar Mental', subtitle: 'Detecta pensamiento automático', completed: false, stars: 0 },
    { id: 2, title: 'Traductor Emocional', subtitle: 'Nombra lo que sientes', completed: false, stars: 0 },
    { id: 3, title: 'Distorsiones', subtitle: 'Encuentra alertas cognitivas', completed: false, stars: 0 },
    { id: 4, title: 'Reprogramador', subtitle: 'Construye pensamiento alternativo', completed: false, stars: 0 },
    { id: 5, title: 'Experimento Conductual', subtitle: 'Comprueba en la vida real', completed: false, stars: 0 },
    { id: 6, title: 'Boss Level', subtitle: 'Actualiza creencias núcleo', completed: false, stars: 0 }
  ],
  radarMentalEntries: []
};
