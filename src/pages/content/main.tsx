import { AppContent } from '@core/app-content';
import { StyleProvider } from '@ant-design/cssinjs';
import { BookTocPlugin } from '@plugins/book-toc';
import { DocBeautifyPlugin } from '@plugins/doc-beautify';
import { QuickMenuContentPlugin } from '@plugins/quick-menu/quick-menu-content-plugin';
import { TranslateYoutubeContentPlugin } from '@plugins/translate-yt/translate-yt-content-plugin';
import { LinkPreviewContentPlugin } from '@plugins/link-preview/link-preview-content-plugin';
import { createRoot } from 'react-dom/client';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';

refreshOnUpdate('core');
refreshOnUpdate('plugins');
refreshOnUpdate('pages/content');

const root = document.createElement('div');
root.id = 'myga-extension-root-container';

document.body.append(root);

const rootIntoShadow = document.createElement('div');
rootIntoShadow.id = 'shadow-root';

const shadowRoot = root.attachShadow({ mode: 'open' });
shadowRoot.appendChild(rootIntoShadow);

const app = AppContent.init({
  plugins: [
    BookTocPlugin,
    DocBeautifyPlugin,
    QuickMenuContentPlugin,
    TranslateYoutubeContentPlugin,
    LinkPreviewContentPlugin,
  ],
});

// antd5 针对 shadow dom 的支持
// https://ant-design.gitee.io/docs/react/compatible-style-cn#shadow-dom-%E5%9C%BA%E6%99%AF
createRoot(rootIntoShadow).render(
  <StyleProvider container={shadowRoot}>{app.start()}</StyleProvider>,
);
