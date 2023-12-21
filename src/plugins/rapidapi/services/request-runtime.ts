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

export async function ajax<T>(
  url: string,
  config: IRequestConfig,
  _option?: IRequestOptions,
): Promise<{ status: number; data: T }> {
  try {
    let baseURL = config.baseURL;
    let queryString = '';
    const options: RequestInit = {
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
