import { AppSetup } from '@core';
import { BookTocPlugin } from '@plugins/book-toc';
import { DocBeautifyPlugin } from '@plugins/doc-beautify';
import { LinkPreviewPlugin } from '@plugins/link-preview';
import { QuickMenuPlugin } from '@plugins/quick-menu';
import { createRoot } from 'react-dom/client';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
refreshOnUpdate('pages/content');

const root = document.createElement('div');
root.id = 'myga-extension-root-container';

document.body.append(root);

const rootIntoShadow = document.createElement('div');
rootIntoShadow.id = 'shadow-root';

const shadowRoot = root.attachShadow({ mode: 'open' });
shadowRoot.appendChild(rootIntoShadow);

const app = AppSetup.initContent({
  plugins: [
    BookTocPlugin,
    DocBeautifyPlugin,
    LinkPreviewPlugin,
    QuickMenuPlugin,
  ],
});
createRoot(rootIntoShadow).render(app.render());
