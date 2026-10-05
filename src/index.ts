// Tipe level pelajaran
export type LessonLevel = "beginner" | "intermediate" | "advanced";

// Interface untuk satu pelajaran
export interface Lesson {
  readonly id: number;
  title: string; // judul dalam Bahasa Indonesia
  englishTitle: string; // judul dalam Bahasa Inggris
  description: string;
  level: LessonLevel;
  totalWords: number;
  completedWords: number;
  icon: string;
}
