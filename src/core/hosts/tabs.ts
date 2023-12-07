export async function getCurrentTab(): Promise<chrome.tabs.Tab> {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

export async function getCurrentTabUrl(): Promise<string | undefined> {
  const tab = await getCurrentTab();
  return tab.url;
}
