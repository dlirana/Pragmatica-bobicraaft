export type LevelSummary = {
  id: number;
  title: string;
  subtitle: string;
  completed: boolean;
  stars: 0 | 1 | 2 | 3;
};

export type RadarMentalEntry = {
  situation: string;
  automaticThought: string;
  emotionIntensity: number;
  behavior: string;
  createdAt: string;
};

export type PatientProgress = {
  currentLevel: number;
  totalCompleted: number;
  emotionalContact: 'bajo' | 'medio' | 'alto';
  levels: LevelSummary[];
  radarMentalEntries: RadarMentalEntry[];
};
