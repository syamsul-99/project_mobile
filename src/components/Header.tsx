import { Text, View } from "react-native";
import { useStyles } from "../context/ThemeContext";

export const Header = ({
  userName,
  streakDays,
}: {
  userName: string;
  streakDays: number;
}) => {
  const styles = useStyles();

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Halo, {userName}! 👋</Text>
      <Text style={styles.headerSubtitle}>
        🔥 Streak {streakDays} hari — ayo belajar Bahasa Inggris!
      </Text>
    </View>
  );
};