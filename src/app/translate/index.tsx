import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useStyles, useTheme } from "../../context/ThemeContext";
import { translateAsync } from "../../services/dictionaryService";

export default function TranslateScreen() {
  const styles = useStyles();
  const { colors } = useTheme();

  const [inputText, setInputText] = useState<string>("");
  const [resultText, setResultText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // State untuk arah bahasa
  const [sourceLang, setSourceLang] = useState<"en" | "id">("en");
  const [targetLang, setTargetLang] = useState<"id" | "en">("id");

  // Fungsi untuk membalik bahasa (English <-> Indonesia)
  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setInputText(resultText || "");
    setResultText(null);
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      Alert.alert("Peringatan", "Silakan ketik teks terlebih dahulu.");
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    setResultText(null);

    try {
      const translated = await translateAsync(
        inputText,
        sourceLang,
        targetLang,
      );
      setResultText(translated);
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{ fontSize: 16, fontWeight: "bold", color: colors.text }}
          >
            {sourceLang === "en" ? "English" : "Indonesia"}
          </Text>

          <TouchableOpacity
            onPress={swapLanguages}
            style={{
              marginHorizontal: 20,
              backgroundColor: colors.iconBg,
              padding: 10,
              borderRadius: 50,
            }}
          >
            <Text style={{ fontSize: 20 }}>🔄</Text>
          </TouchableOpacity>

          <Text
            style={{ fontSize: 16, fontWeight: "bold", color: colors.text }}
          >
            {targetLang === "en" ? "English" : "Indonesia"}
          </Text>
        </View>

        {}
        <View style={{ marginBottom: 16 }}>
          <TextInput
            style={{
              backgroundColor: colors.surface,
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: 12,
              padding: 16,
              minHeight: 120,
              color: colors.text,
              textAlignVertical: "top",
            }}
            placeholder={
              sourceLang === "en"
                ? "Type in English..."
                : "Ketik dalam Bahasa Indonesia..."
            }
            placeholderTextColor={colors.textMuted}
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
        </View>

        {/* Tombol Terjemahkan */}
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            padding: 16,
            borderRadius: 12,
            alignItems: "center",
            marginBottom: 24,
          }}
          onPress={handleTranslate}
          disabled={isLoading}
        >
          <Text
            style={{
              color: colors.primaryText,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {isLoading ? "Menerjemahkan..." : "Terjemahkan"}
          </Text>
        </TouchableOpacity>

        {/* Status Loading */}
        {isLoading && (
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}

        {/* Pesan Error */}
        {errorMsg && (
          <View
            style={{
              backgroundColor: colors.wrongBg,
              padding: 16,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: colors.wrong, textAlign: "center" }}>
              ❌ {errorMsg}
            </Text>
          </View>
        )}

        {/* Hasil Terjemahan */}
        {resultText && !isLoading && (
          <View
            style={{
              backgroundColor: colors.surface,
              padding: 20,
              borderRadius: 16,
              borderLeftWidth: 4,
              borderLeftColor: colors.primary,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: colors.textMuted,
                marginBottom: 8,
              }}
            >
              Hasil Terjemahan:
            </Text>
            <Text style={{ fontSize: 20, color: colors.text, lineHeight: 28 }}>
              {resultText}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
