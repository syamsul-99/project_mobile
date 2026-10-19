import { Question } from "../types";

// Soal untuk Lesson 1: Sapaan Dasar (totalWords: 10)
const lesson1Questions: Question[] = [
  {
    id: 1,
    lessonId: 1,
    question: "Apa arti dari 'Hello'?",
    options: ["Selamat tinggal", "Halo", "Terima kasih", "Maaf"],
    correctAnswer: "Halo",
  },
  {
    id: 2,
    lessonId: 1,
    question: "Apa arti dari 'Good morning'?",
    options: ["Selamat malam", "Selamat pagi", "Selamat siang", "Selamat sore"],
    correctAnswer: "Selamat pagi",
  },
  {
    id: 3,
    lessonId: 1,
    question: "Apa arti dari 'Thank you'?",
    options: ["Maaf", "Tolong", "Terima kasih", "Permisi"],
    correctAnswer: "Terima kasih",
  },
  {
    id: 4,
    lessonId: 1,
    question: "Apa arti dari 'Goodbye'?",
    options: ["Halo", "Selamat tinggal", "Selamat pagi", "Terima kasih"],
    correctAnswer: "Selamat tinggal",
  },
  {
    id: 5,
    lessonId: 1,
    question: "Apa arti dari 'Please'?",
    options: ["Maaf", "Tolong", "Terima kasih", "Permisi"],
    correctAnswer: "Tolong",
  },
  {
    id: 6,
    lessonId: 1,
    question: "Apa arti dari 'Sorry'?",
    options: ["Maaf", "Tolong", "Terima kasih", "Halo"],
    correctAnswer: "Maaf",
  },
  {
    id: 7,
    lessonId: 1,
    question: "Apa arti dari 'Yes'?",
    options: ["Tidak", "Ya", "Mungkin", "Tidak tahu"],
    correctAnswer: "Ya",
  },
  {
    id: 8,
    lessonId: 1,
    question: "Apa arti dari 'No'?",
    options: ["Ya", "Tidak", "Mungkin", "Tidak tahu"],
    correctAnswer: "Tidak",
  },
  {
    id: 9,
    lessonId: 1,
    question: "Apa arti dari 'Excuse me'?",
    options: ["Maaf", "Permisi", "Terima kasih", "Tolong"],
    correctAnswer: "Permisi",
  },
  {
    id: 10,
    lessonId: 1,
    question: 'Apa arti dari "You\'re welcome"?',
    options: ["Terima kasih", "Sama-sama", "Maaf", "Permisi"],
    correctAnswer: "Sama-sama",
  },
];

// Soal untuk Lesson 2: Angka & Warna (totalWords: 15)
const lesson2Questions: Question[] = [
  {
    id: 11,
    lessonId: 2,
    question: "Apa arti dari 'One'?",
    options: ["Satu", "Dua", "Tiga", "Empat"],
    correctAnswer: "Satu",
  },
  {
    id: 12,
    lessonId: 2,
    question: "Apa arti dari 'Two'?",
    options: ["Satu", "Dua", "Tiga", "Empat"],
    correctAnswer: "Dua",
  },
  {
    id: 13,
    lessonId: 2,
    question: "Apa arti dari 'Three'?",
    options: ["Satu", "Dua", "Tiga", "Empat"],
    correctAnswer: "Tiga",
  },
  {
    id: 14,
    lessonId: 2,
    question: "Apa arti dari 'Red'?",
    options: ["Biru", "Merah", "Hijau", "Kuning"],
    correctAnswer: "Merah",
  },
  {
    id: 15,
    lessonId: 2,
    question: "Apa arti dari 'Blue'?",
    options: ["Biru", "Merah", "Hijau", "Kuning"],
    correctAnswer: "Biru",
  },
  // ← Tambahkan sendiri sampai total 15 soal
  // (id 16-25)
];

// Gabungkan semua soal
export const questions: Question[] = [
  ...lesson1Questions,
  ...lesson2Questions,
  // ...lesson3Questions (tambah sendiri nanti)
];
