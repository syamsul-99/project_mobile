import { StyleSheet } from "react-native";
import { ThemeColors } from "./theme";

export const createStyles = (c: ThemeColors) =>
  StyleSheet.create({
  container: { flex: 1, backgroundColor: c.background },
  scrollContent: { padding: 20, paddingBottom: 40 },

  // Header
  header: { marginBottom: 24 },
  headerTitle: { fontSize: 28, fontWeight: "bold", color: c.text },
  headerSubtitle: { fontSize: 14, color: c.textMuted, marginTop: 4 },

  // Progress Bar
  progressContainer: {
    backgroundColor: c.surface,
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    elevation: 3,
    shadowColor: c.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: c.textSecondary,
    marginBottom: 8,
  },
  progressBarBg: {
    height: 10,
    backgroundColor: c.progressTrack,
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: c.primary,
    borderRadius: 5,
  },
  progressText: {
    fontSize: 12,
    color: c.textMuted,
    marginTop: 6,
    textAlign: "right",
  },

  // Lesson Card
  card: {
    backgroundColor: c.surface,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  cardCompleted: { borderLeftWidth: 5, borderLeftColor: c.primary },
  cardLocked: { opacity: 0.6 },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: c.iconBg,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: "bold", color: c.text },
  cardEnglishTitle: {
    fontSize: 13,
    color: c.primary,
    fontWeight: "600",
    marginTop: 2,
  },
  cardDescription: { fontSize: 12, color: c.textMuted, marginTop: 4 },
  cardMeta: { fontSize: 12, color: c.textMuted, marginTop: 4 },

  // Badge
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 6,
    alignSelf: "flex-start",
  },
  badgeBeginner: { backgroundColor: c.badgeBeginnerBg },
  badgeIntermediate: { backgroundColor: c.badgeIntermediateBg },
  badgeAdvanced: { backgroundColor: c.badgeAdvancedBg },
  badgeText: { fontSize: 11, fontWeight: "600" },
  badgeTextBeginner: { color: c.badgeBeginnerText },
  badgeTextIntermediate: { color: c.badgeIntermediateText },
  badgeTextAdvanced: { color: c.badgeAdvancedText },

  detailContainer: { flex: 1, backgroundColor: c.background, padding: 20 },
  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: c.text,
    marginTop: 16,
  },
  detailSubtitle: {
    fontSize: 16,
    color: c.primary,
    fontWeight: "600",
    marginTop: 4,
  },
  detailDescription: { fontSize: 14, color: c.textMuted, marginTop: 8 },
  detailInfo: {
    backgroundColor: c.surface,
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  detailInfoText: { fontSize: 14, color: c.textSecondary, marginBottom: 4 },
  backButton: {
    backgroundColor: c.surface,
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
    borderWidth: 1,
    borderColor: c.border,
  },
  backButtonText: { fontSize: 16, fontWeight: "600", color: c.textSecondary },
  startButton: {
    backgroundColor: c.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },
  startButtonText: { fontSize: 16, fontWeight: "bold", color: c.primaryText },

  // BARU: Quiz
  quizContainer: {
    flex: 1,
    backgroundColor: c.background,
    padding: 20,
    justifyContent: "center",
  },
  quizQuestion: {
    fontSize: 22,
    fontWeight: "bold",
    color: c.text,
    textAlign: "center",
    marginBottom: 24,
  },
  quizOption: {
    backgroundColor: c.surface,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: c.border,
  },
  quizOptionCorrect: { borderColor: c.primary, backgroundColor: c.correctBg },
  quizOptionWrong: { borderColor: c.wrong, backgroundColor: c.wrongBg },
  quizOptionText: { fontSize: 16, color: c.textSecondary, textAlign: "center" },
  quizResult: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  quizResultCorrect: { color: c.primary },
  quizResultWrong: { color: c.wrong },
  });

export type AppStyles = ReturnType<typeof createStyles>;