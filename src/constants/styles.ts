import { StyleSheet } from "react-native";

// External Styling
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  // Header
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  // Progress Bar
  progressContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  progressLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  progressBarBg: {
    height: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#58CC02", // hijau ala Duolingo
    borderRadius: 5,
  },
  progressText: {
    fontSize: 12,
    color: "#666",
    marginTop: 6,
    textAlign: "right",
  },

  // Lesson Card
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
  },
  cardCompleted: {
    borderLeftWidth: 5,
    borderLeftColor: "#58CC02",
  },
  cardLocked: {
    opacity: 0.6,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E8F5E9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  cardEnglishTitle: {
    fontSize: 13,
    color: "#58CC02",
    fontWeight: "600",
    marginTop: 2,
  },
  cardDescription: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  cardMeta: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },

  // Badge level
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 6,
    alignSelf: "flex-start",
  },
  badgeBeginner: {
    backgroundColor: "#E8F5E9",
  },
  badgeIntermediate: {
    backgroundColor: "#FFF3E0",
  },
  badgeAdvanced: {
    backgroundColor: "#FFEBEE",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
  },
  badgeTextBeginner: { color: "#2E7D32" },
  badgeTextIntermediate: { color: "#E65100" },
  badgeTextAdvanced: { color: "#C62828" },
});
