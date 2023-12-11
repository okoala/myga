export const getYuqueDomain = async (url?: string) => {
  if (!url) return;
  const matches =
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim.exec(url);
  return matches?.[0];
};

export function isYuquePathname(pathname: string) {
  const url = document.location.href;
  if (!url) return false;
  const urlObj = new URL(url);
  return urlObj.pathname === pathname;
}
