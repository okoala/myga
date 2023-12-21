import pkgJSON from '@pkg';

export const pluginId = 'yuque-biz';
export const pluginName = '语雀业务';
export const pluginDesc = '包装使用到的语雀业务服务';

export const pkg = pkgJSON;
export const siteName = pkgJSON.name.split('-')[0];
export const CSRF_HEADER_NAME = ['x', 'csrf', 'token'].join('-');
export const YUQUE_CSRF_COOKIE_NAME = 'yuque_ctoken';
export const VERSION = pkgJSON.version;
export const REFERER_URL = 'referer_url';
export const backgrondRequestEventName = 'background/yuque-request';
export const defaultYuqueBaseUrl = 'https://www.yuque.com';
