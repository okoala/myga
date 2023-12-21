import packageJson from '../package.json';

export const optionsPage = 'src/pages/settings/index.html';
export const sidepanelPage = 'src/pages/sidepanel/index.html';

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
  options_page: optionsPage,
  background: {
    service_worker: 'src/pages/background/index.js',
    type: 'module',
  },
  icons: {
    128: 'okrrr-128.png',
  },
  host_permissions: ['<all_urls>', '*://*/*'],
  content_scripts: [
    {
      matches: ['<all_urls>', '*://*/*'],
      js: ['src/pages/content/index.js'],
      // KEY for cache invalidation
      css: ['assets/css/contentStyle<KEY>.chunk.css'],
      run_at: 'document_end',
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        sidepanelPage,
        'assets/js/*.js',
        'assets/css/*.css',
        'okrrr-128.png',
        'okrrr-32.png',
      ],
      matches: ['<all_urls>', '*://*/*'],
    },
  ],
  side_panel: {
    default_path: sidepanelPage,
  },
};

export default manifest;
