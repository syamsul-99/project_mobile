import { Text, View } from "react-native";
import { styles } from "../constants/styles";

export const Header = ({
  userName,
  streakDays,
}: {
  userName: string;
  streakDays: number;
}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Halo, {userName}! 👋</Text>
      <Text style={styles.headerSubtitle}>
        🔥 Streak {streakDays} hari — ayo belajar Bahasa Inggris!
      </Text>
    </View>
  );
};
