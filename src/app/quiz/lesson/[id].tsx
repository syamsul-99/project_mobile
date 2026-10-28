import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useStyles, useTheme } from "../../../context/ThemeContext"; // <-- Ubah jadi ../../../
import { lessons } from "../../../data/lessons"; // <-- Ubah jadi ../../../
import { questions } from "../../../data/questions"; // <-- Ubah jadi ../../../
import { Question } from "../../../types"; // <-- Ubah jadi ../../../

export default function LessonDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const styles = useStyles();
  const { colors } = useTheme();

  const lesson = lessons.find((l) => l.id === Number(id));
  const lessonQuestions: Question[] = questions.filter(
    (q) => q.lessonId === Number(id),
  );

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [wrongCount, setWrongCount] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setCorrectCount(0);
    setWrongCount(0);
    setIsFinished(false);
  }, [id]);

  if (!lesson) {
    return (
      <View style={styles.detailContainer}>
        <Text style={{ color: colors.text }}>Pelajaran tidak ditemukan</Text>
      </View>
    );
  }

  const totalQuestions = lessonQuestions.length;
  const totalWordsInLesson = lesson.totalWords;
  const finalScore =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const isQuestionCountMatch = totalQuestions === totalWordsInLesson;

  if (totalQuestions === 0) {
    return (
      <ScrollView style={styles.detailContainer}>
        <Text style={styles.detailTitle}>{lesson.title}</Text>
        <Text style={styles.detailSubtitle}>{lesson.englishTitle}</Text>
        <Text style={styles.detailDescription}>{lesson.description}</Text>

        <View style={styles.detailInfo}>
          <Text style={styles.detailInfoText}>
            Level: {lesson.level.toUpperCase()}
          </Text>
          <Text style={styles.detailInfoText}>
            Total Kata: {lesson.totalWords}
          </Text>
          <Text style={styles.detailInfoText}>
            Selesai: {lesson.completedWords}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Kembali</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  const question = lessonQuestions[currentQuestion];

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);

    if (answer === question.correctAnswer) {
      setCorrectCount(correctCount + 1);
    } else {
      setWrongCount(wrongCount + 1);
    }

    setTimeout(() => {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setIsFinished(true);
      }
    }, 800);
  };

  const handleFinish = () => {
    router.replace("/quiz"); // Kembali ke daftar pelajaran, bukan ke Home
  };

  if (isFinished) {
    return (
      <View style={styles.quizContainer}>
        <Text
          style={[
            styles.quizResult,
            finalScore >= 60
              ? styles.quizResultCorrect
              : styles.quizResultWrong,
          ]}
        >
          {finalScore >= 60 ? "🎉 Hebat!" : "😅 Coba Lagi!"}
        </Text>

        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            color: colors.textSecondary,
          }}
        >
          Skor kamu: {finalScore}/100
        </Text>

        <View style={styles.detailInfo}>
          <Text style={styles.detailInfoText}>✅ Benar: {correctCount}</Text>
          <Text style={styles.detailInfoText}>❌ Salah: {wrongCount}</Text>
          <Text style={styles.detailInfoText}>
            📊 Total Soal: {totalQuestions}
          </Text>
          <Text style={styles.detailInfoText}>
            📚 Total Kata di Pelajaran: {totalWordsInLesson}
          </Text>
          {!isQuestionCountMatch && (
            <Text
              style={{
                fontSize: 12,
                color: colors.warning,
                marginTop: 8,
                fontStyle: "italic",
              }}
            >
              ⚠️ Jumlah soal ({totalQuestions}) belum sesuai dengan total kata (
              {totalWordsInLesson})
            </Text>
          )}
        </View>

        <TouchableOpacity style={styles.startButton} onPress={handleFinish}>
          <Text style={styles.startButtonText}>
            Kembali ke Daftar Pelajaran
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.quizContainer}>
      <Text
        style={{
          textAlign: "center",
          color: colors.textMuted,
          marginBottom: 8,
        }}
      >
        Soal {currentQuestion + 1}/{totalQuestions}
      </Text>

      <Text style={styles.quizQuestion}>{question.question}</Text>

      {question.options.map((option, index) => {
        const optionStyle: StyleProp<ViewStyle>[] = [styles.quizOption];
        if (selectedAnswer) {
          if (option === question.correctAnswer) {
            optionStyle.push(styles.quizOptionCorrect);
          } else if (option === selectedAnswer) {
            optionStyle.push(styles.quizOptionWrong);
          }
        }
        return (
          <TouchableOpacity
            key={index}
            style={optionStyle}
            onPress={() => handleAnswer(option)}
            disabled={!!selectedAnswer}
          >
            <Text style={styles.quizOptionText}>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
