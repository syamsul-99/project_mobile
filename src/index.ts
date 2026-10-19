export type LessonLevel = "beginner" | "intermediate" | "advanced";

export interface Lesson {
  readonly id: number;
  title: string;
  englishTitle: string;
  description: string;
  level: LessonLevel;
  totalWords: number;
  completedWords: number;
  icon: string;
}

// BARU: Type untuk soal kuis
export interface Question {
  id: number;
  lessonId: number;
  question: string;
  options: string[];
  correctAnswer: string;
}
