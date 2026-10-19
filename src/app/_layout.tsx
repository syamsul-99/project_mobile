import { Stack } from "expo-router";

export default function RootLayout() {
 return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Belajar Bahasa Inggris" }}
      />
      <Stack.Screen
        name="lesson/[id]"
        options={{ title: "Detail Pelajaran" }}
      />
    </Stack>
  );
}
