import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function ThemeToggleButton() {
  const { isDark, colors, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      accessibilityRole="button"
      accessibilityLabel={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      hitSlop={10}
    >
      <Ionicons
        name={isDark ? "sunny" : "moon"}
        size={22}
        color={colors.text}
      />
    </TouchableOpacity>
  );
}

function ThemedStack() {
  const { isDark, colors } = useTheme();

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.text,
          headerTitleStyle: { color: colors.text },
          contentStyle: { backgroundColor: colors.background },
          headerRight: () => <ThemeToggleButton />,
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Belajar Bahasa Inggris" }}
        />
        <Stack.Screen
          name="lesson/[id]"
          options={{ title: "Detail Pelajaran" }}
        />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedStack />
    </ThemeProvider>
  );
}