import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Header } from "../../components/Header"; // <-- Ubah jadi ../../
import { LessonCard } from "../../components/LessonCard"; // <-- Ubah jadi ../../
import { ProgressBar } from "../../components/ProgressBar"; // <-- Ubah jadi ../../
import { useStyles, useTheme } from "../../context/ThemeContext"; // <-- Ubah jadi ../../
import { lessons as initialLessons } from "../../data/lessons"; // <-- Ubah jadi ../../
import { Lesson } from "../../types"; // <-- Ubah jadi ../../

export default function QuizScreen() {
  const styles = useStyles();
  const { colors } = useTheme();
  const userName = "Djody";
  const streakDays = 7;

  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
            color: colors.text,
          }}
        >
          📚 Pilih Pelajaran
        </Text>

        {isLoading ? (
          <Text
            style={{
              textAlign: "center",
              color: colors.textMuted,
              marginTop: 20,
            }}
          >
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
