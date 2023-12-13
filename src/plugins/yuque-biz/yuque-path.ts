export const getYuqueDomain = async (url?: string) => {
  if (!url) return;
  const matches =
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim.exec(url);
  const match = matches?.[0];
  if (!match?.includes('yuque.com')) return;
  return match;
};

export function isYuquePathname(pathname: string) {
  const url = document.location.href;
  if (!url) return false;
  const urlObj = new URL(url);
  return urlObj.pathname === pathname;
}
