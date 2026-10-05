import { SafeAreaView, ScrollView, Text } from "react-native";
import { Header } from "../components/Header";
import { LessonCard } from "../components/LessonCard";
import { ProgressBar } from "../components/ProgressBar";
import { styles } from "../constants/styles";
import { lessons } from "../data/lessons";

export default function Index() {
  const userName = "Djody";
  const streakDays = 7;

  // Hitung total progress
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

        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
