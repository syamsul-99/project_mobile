// ... (biarkan interface Lesson & Question) ...

// ✅ Interface untuk respons MyMemory API
export interface TranslationResponse {
  responseData: {
    translatedText: string;
  };
  responseStatus: number;
}
