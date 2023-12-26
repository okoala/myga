import { isRegExp } from 'lodash';

export function isMatchUrls(urls: (string | RegExp)[]) {
  let isMatch = false;
  for (const url of urls) {
    if (typeof url === 'string') {
      const pattern = new globalThis.URLPattern(url);
      if (pattern.test(document.location.href)) {
        isMatch = true;
        break;
      }
    } else if (isRegExp(url)) {
      if (url.test(document.location.href)) {
        isMatch = true;
        break;
      }
    }
  }
  return isMatch;
}
