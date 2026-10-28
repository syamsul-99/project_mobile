import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useStyles, useTheme } from "../context/ThemeContext";

export default function HomeMenu() {
  const router = useRouter();
  const styles = useStyles();
  const { colors } = useTheme();

  // Daftar menu (6 Opsi)
  const menus = [
    { id: 1, title: "Quiz", icon: "game-controller", route: "/quiz" },
    { id: 2, title: "Translate", icon: "language", route: "/translate" },
    { id: 3, title: "Camera", icon: "camera", route: null },
    { id: 4, title: "Listening", icon: "headset", route: null },
    { id: 5, title: "Speaking", icon: "mic", route: null },
    { id: 6, title: "Vocabulary", icon: "book", route: null },
  ];

  const handlePress = (route: string | null) => {
    if (route) {
      router.push(route as any);
    } else {
      alert("Fitur ini akan segera hadir!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[styles.headerTitle, { marginBottom: 8 }]}>
          Mau belajar apa hari ini?
        </Text>
        <Text style={[styles.headerSubtitle, { marginBottom: 24 }]}>
          Pilih fitur di bawah ini untuk mulai belajar.
        </Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {menus.map((menu) => (
            <TouchableOpacity
              key={menu.id}
              onPress={() => handlePress(menu.route)}
              style={{
                width: "48%",
                backgroundColor: colors.surface,
                padding: 20,
                borderRadius: 16,
                marginBottom: 16,
                alignItems: "center",
                borderWidth: 1,
                borderColor: colors.border,
              }}
            >
              <View
                style={{
                  backgroundColor: colors.iconBg,
                  padding: 16,
                  borderRadius: 50,
                  marginBottom: 12,
                }}
              >
                <Ionicons
                  name={menu.icon as any}
                  size={32}
                  color={colors.primary}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: colors.text,
                  textAlign: "center",
                }}
              >
                {menu.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
