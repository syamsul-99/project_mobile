import { Text, View } from "react-native";
import { styles } from "../constants/styles";

export const ProgressBar = ({
  completed,
  total,
}: {
  completed: number;
  total: number;
}) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <View style={styles.progressContainer}>
      <Text style={styles.progressLabel}>Progress Belajar Bahasa Inggris</Text>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
      </View>
      <Text style={styles.progressText}>
        {completed}/{total} kata ({percentage}%)
      </Text>
    </View>
  );
};
