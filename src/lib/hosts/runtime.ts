export const getPageURL = (url: string) => {
  return chrome.runtime.getURL(url);
};
