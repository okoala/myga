import pkgJSON from '../../../package.json';

export const pkg = pkgJSON;

const hyphen = '-';
export const siteName = pkgJSON.name.split(hyphen)[0];
export const CSRF_HEADER_NAME = ['x', 'csrf', 'token'].join('-');
export const YUQUE_DOMAIN = '';
export const YUQUE_CSRF_COOKIE_NAME = 'yuque_ctoken';
export const VERSION = pkgJSON.version;
export const REFERER_URL = 'referer_url';
