export async function batchTranslateText(texts,page, targetLang) {
  // console.log("Batch translating", texts.length, "items to", targetLang);

  const API_URL = "http://localhost:5000/translate";  //https://translator.cloudqlobe.com/translate

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        texts: texts,
        lang: targetLang,
        page:page
      }),
    });

    const data = await response.json();
    // console.log("API response:", data);
    return data.translatedTexts || texts;
  } catch (err) {
    console.error("Batch translation failed:", err);
    return texts;
  }
}
