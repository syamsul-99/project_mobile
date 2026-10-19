import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Header } from "../components/Header";
import { LessonCard } from "../components/LessonCard";
import { ProgressBar } from "../components/ProgressBar";
import { styles } from "../constants/styles";
import { lessons as initialLessons } from "../data/lessons";
import { Lesson } from "../types";

export default function Index() {
  const userName = "Djody";
  const streakDays = 7;

  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("Komponen Home pertama kali di-render");

    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log("Data pelajaran selesai dimuat");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log(`Jumlah pelajaran: ${lessons.length}`);
  }, [lessons]);

  const totalWords = lessons.reduce((sum, l) => sum + l.totalWords, 0);
  const completedWords = lessons.reduce((sum, l) => sum + l.completedWords, 0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Header userName={userName} streakDays={streakDays} />

        <ProgressBar completed={completedWords} total={totalWords} />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 12,
            color: "#1A1A1A",
          }}
        >
          📚 Pelajaran Bahasa Inggris
        </Text>

        {isLoading ? (
          <Text style={{ textAlign: "center", color: "#666", marginTop: 20 }}>
            Memuat pelajaran...
          </Text>
        ) : (
          lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
