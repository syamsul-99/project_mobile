import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useColorScheme } from "react-native";
import { createStyles } from "../constants/styles";
import { darkColors, lightColors, ThemeColors } from "../constants/theme";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  isDark: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Awalnya ikut pengaturan sistem; setelah tombol ditekan, pakai pilihan manual.
  const systemScheme = useColorScheme();
  const [override, setOverride] = useState<ThemeMode | null>(null);

  const isDark = (override ?? systemScheme) === "dark";

  const toggleTheme = useCallback(() => {
    setOverride(isDark ? "light" : "dark");
  }, [isDark]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      isDark,
      colors: isDark ? darkColors : lightColors,
      toggleTheme,
    }),
    [isDark, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme harus dipakai di dalam <ThemeProvider>");
  return ctx;
}

export function useStyles() {
  const { colors } = useTheme();
  return useMemo(() => createStyles(colors), [colors]);
}
