import { TranslationResponse } from "../types";
import { delay } from "../utils/delay";

const BASE_URL = "https://api.mymemory.translated.net/get";

// Fungsi bantuan untuk membersihkan tag HTML dari API
const cleanText = (text: string) => {
  return text.replace(/<\/?[^>]+(>|$)/g, "");
};

// ═══════════════════════════════════════
// ✅ 1. Menggunakan .then(), resolve(), reject()
// ═══════════════════════════════════════
export function translateWithThen(
  text: string,
  source: string,
  target: string,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          reject("Gagal terhubung ke server penerjemah.");
        }
        return response.json();
      })
      .then((data: TranslationResponse) => {
        if (data.responseStatus === 200) {
          // Bersihkan teks sebelum di-resolve
          resolve(cleanText(data.responseData.translatedText));
        } else {
          reject("Gagal menerjemahkan teks.");
        }
      })
      .catch((error) => {
        reject("Terjadi kesalahan jaringan.");
      });
  });
}

// ═══════════════════════════════════════
// ✅ 2. Menggunakan async/await & Custom Async Function
// ═══════════════════════════════════════
export async function translateAsync(
  text: string,
  source: string,
  target: string,
): Promise<string> {
  try {
    await delay(800);

    const url = `${BASE_URL}?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Gagal terhubung ke server.");
    }

    const data: TranslationResponse = await response.json();

    if (data.responseStatus === 200) {
      // Bersihkan teks sebelum di-return
      return cleanText(data.responseData.translatedText);
    } else {
      throw new Error("Format bahasa tidak didukung atau teks kosong.");
    }
  } catch (error: any) {
    throw new Error(error.message || "Terjadi kesalahan jaringan");
  }
}
