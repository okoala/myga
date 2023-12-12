import { getCurrentTabUrl } from '@lib/hosts/tabs';
import {
  YUQUE_CSRF_COOKIE_NAME,
  CSRF_HEADER_NAME,
} from '../../yuque-biz/config';
import { getYuqueDomain } from '../../yuque-biz/yuque-path';

export class CsrfTokenError extends Error {
  constructor(message: any) {
    super(message);
    this.name = 'CsrfTokenError';
  }
}

const setCsrfToken = (
  domain: string,
  cookieName: string,
  value: string,
): Promise<chrome.cookies.Cookie> => {
  return new Promise(resolve => {
    chrome.cookies.set({ url: domain, name: cookieName, value }, cookie => {
      resolve(cookie as chrome.cookies.Cookie);
    });
  });
};

const generateRandomToken = (): string => {
  return Math.random().toString(36).substring(2);
};

export const getCsrfToken = async (
  domain: string,
  cookieName: string,
): Promise<string> => {
  return new Promise(resolve => {
    chrome.cookies.get({ url: domain, name: cookieName }, cookie => {
      if (cookie) {
        resolve(cookie.value);
      } else {
        const randomToken = generateRandomToken();
        setCsrfToken(domain, cookieName, randomToken).then(newCookie => {
          resolve(newCookie.value);
        });
      }
    });
  });
};

export const getYuqueAjaxHeaders = async (
  domain: string,
): Promise<Record<string, string>> => {
  const headers: Record<string, string> = {};
  const csrfToken = await getCsrfToken(domain, YUQUE_CSRF_COOKIE_NAME);
  if (csrfToken) {
    headers[CSRF_HEADER_NAME] = csrfToken;
  } else {
    throw new CsrfTokenError('csrf token not found');
  }
  return headers;
};

export const getYuqueAjaxBaseUrl = async () => {
  const url = await getCurrentTabUrl();
  if (!url) throw new Error('no url');
  return await getYuqueDomain(url);
};
