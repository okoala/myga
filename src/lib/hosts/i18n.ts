export async function detectLanguage(text: string): Promise<string> {
  let result = await chrome.i18n.detectLanguage(text);
  return result.languages[0].language;
}
