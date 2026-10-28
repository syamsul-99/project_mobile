import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useStyles, useTheme } from "../context/ThemeContext";
import { Lesson } from "../types";

export const LessonCard = ({ lesson }: { lesson: Lesson }) => {
  const router = useRouter();
  const styles = useStyles();
  const { colors } = useTheme();

  const isCompleted = lesson.completedWords === lesson.totalWords;
  const isLocked = lesson.completedWords === 0 && lesson.id > 2;

  const getBadgeStyle = () => {
    switch (lesson.level) {
      case "beginner":
        return [styles.badge, styles.badgeBeginner];
      case "intermediate":
        return [styles.badge, styles.badgeIntermediate];
      case "advanced":
        return [styles.badge, styles.badgeAdvanced];
      default:
        return [styles.badge, styles.badgeBeginner];
    }
  };

  const getBadgeTextStyle = () => {
    switch (lesson.level) {
      case "beginner":
        return [styles.badgeText, styles.badgeTextBeginner];
      case "intermediate":
        return [styles.badgeText, styles.badgeTextIntermediate];
      case "advanced":
        return [styles.badgeText, styles.badgeTextAdvanced];
      default:
        return [styles.badgeText, styles.badgeTextBeginner];
    }
  };

  const handlePress = () => {
    if (isLocked) return;
    // ✅ Ubah tujuan navigasi ke folder quiz
    router.push(`/quiz/lesson/${lesson.id}`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLocked}
    >
      <View
        style={[
          styles.card,
          isCompleted && styles.cardCompleted,
          isLocked && styles.cardLocked,
        ]}
      >
        <View style={styles.iconContainer}>
          <Ionicons
            name={lesson.icon as any}
            size={24}
            color={colors.primary}
          />
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{lesson.title}</Text>
          <Text style={styles.cardEnglishTitle}>{lesson.englishTitle}</Text>
          <Text style={styles.cardDescription}>{lesson.description}</Text>
          <Text style={styles.cardMeta}>
            {lesson.completedWords}/{lesson.totalWords} kata
            {isCompleted ? " ✅" : isLocked ? " 🔒" : ""}
          </Text>

          <View style={getBadgeStyle()}>
            <Text style={getBadgeTextStyle()}>
              {lesson.level.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
