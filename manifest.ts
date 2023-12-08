import packageJson from './package.json';

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  permissions: [
    'activeTab',
    'declarativeNetRequest',
    'background',
    'contextMenus',
    'cookies',
    'storage',
    'tabs',
    'webRequest',
    'scripting',
    'sidePanel',
  ],
  options_page: 'src/pages/settings/index.html',
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  icons: {
    128: 'yuque-logo-128.png',
  },
  host_permissions: ['<all_urls>', '*://*/*'],
  content_scripts: [
    {
      matches: ['<all_urls>', '*://*/*'],
      js: ['src/pages/content/index.js'],
      // KEY for cache invalidation
      css: ['assets/css/contentStyle<KEY>.chunk.css'],
      run_at: 'document_idle',
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        'assets/js/*.js',
        'assets/css/*.css',
        'yuque-logo-128.png',
        'yuque-logo-32.png',
      ],
      matches: ['<all_urls>', '*://*/*'],
    },
  ],
};

export default manifest;
