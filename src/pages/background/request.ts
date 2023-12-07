import {
  YUQUE_DOMAIN,
  YUQUE_CSRF_COOKIE_NAME,
  CSRF_HEADER_NAME,
} from './config';
import 'whatwg-fetch';

export type IRequestMethod =
  | 'GET'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'PURGE'
  | 'LINK'
  | 'UNLINK';

export interface IRequestConfig {
  baseURL?: string;
  method: IRequestMethod;
  data?: any;
  headers?: HeadersInit;
}

export interface IRequestOptions {
  isFileUpload?: boolean;
}

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

const prepareHeaders = async (): Promise<Record<string, string>> => {
  const headers: Record<string, string> = {};
  const csrfToken = await getCsrfToken(YUQUE_DOMAIN, YUQUE_CSRF_COOKIE_NAME);
  if (csrfToken) {
    headers[CSRF_HEADER_NAME] = csrfToken;
  } else {
    throw new CsrfTokenError('csrf token not found');
  }
  return headers;
};

export async function request<T>(
  url: string,
  config: IRequestConfig,
  _option?: IRequestOptions,
): Promise<{ status: number; data: T }> {
  try {
    const headers = await prepareHeaders();
    let queryString = '';
    const options: RequestInit = {
      headers: {
        ...headers,
        ...config.headers,
      },
      method: config.method,
      ...config,
    };
    if (options.method === 'POST' || options.method === 'PUT') {
      options.headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
        ...options.headers,
      };
      options.body = JSON.stringify(config.data);
    } else if (options.method === 'GET' && config.data) {
      const params = config.data;
      const paramsArray: string[] = [];
      Object.keys(params).forEach(key =>
        paramsArray.push(`${key}=${params[key]}`),
      );
      if (paramsArray.length > 0) {
        queryString = `?${paramsArray.join('&')}`;
      }
    }
    const baseURL = config.baseURL || YUQUE_DOMAIN;
    const response = await fetch(`${baseURL}${url}${queryString}`, {
      ...options,
    });
    const responseJson = await response.json();
    if (!(response.status >= 200 && response.status < 300)) {
      throw responseJson;
    }
    return { status: response.status, data: responseJson };
  } catch (e) {
    throw e;
  }
}
