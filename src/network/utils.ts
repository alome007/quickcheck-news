import {ErrorResponse} from './types';

export let BASE_URL = {
  development: 'https://hacker-news.firebaseio.com/v0',
  production: 'https://hacker-news.firebaseio.com/v0',
};

export const fetchReq = async <T>(
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT',
  path: string,
  body: any,
  headers?: any,
): Promise<[ErrorResponse | null, T | null]> => {
  try {
    const headerOptions = await buildHeaders(headers);
    const response = await fetch(formatUrl(path), {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: headerOptions,
    });

    const responseData = await response.json();

    if (response?.status >= 400 && response?.status <= 500) {
      return [responseData, null];
    }

    return [null, responseData];
  } catch (e: any) {
    return [e, null];
  }
};

export const formatUrl = (url: string) => {
  let urlBuilder = BASE_URL.development;

  __DEV__
    ? (urlBuilder = BASE_URL.development)
    : (urlBuilder = BASE_URL.production);
  return url.includes('http') ? url : `${urlBuilder}${url}`;
};

export const request = {
  get: async <T>(path: string, headers?: any) => {
    return fetchReq<T>('GET', path, null, headers);
  },
  post: async <T>(path: string, body: any, headers?: any) => {
    return fetchReq<T>('POST', path, body, headers);
  },
  put: async <T>(path: string, body: any, headers?: any) => {
    return fetchReq<T>('PUT', path, body, headers);
  },
  patch: async <T>(path: string, body?: any, headers?: any) => {
    return fetchReq<T>('PATCH', path, body, headers);
  },
  delete: async <T>(path: string, body: any, headers?: any) => {
    return fetchReq<T>('DELETE', path, body, headers);
  },
};

export const pagination = {
  perPage: 10,
};

const buildHeaders = async (headers: any) => {
  const options: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
  //for Authorization
  //  options.Authorization = `Bearer ${'cachedToken'}`;

  return options;
};

