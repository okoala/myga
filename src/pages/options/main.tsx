import { AppSetup } from '@core';
import { SettingManagePlugin } from '@plugins/setting-manage';
import { BookTocPlugin } from '@plugins/book-toc';
import { DocBeautifyPlugin } from '@plugins/doc-beautify';
import { LinkPreviewPlugin } from '@plugins/link-preview';
import { QuickMenuPlugin } from '@plugins/quick-menu';

export function AppMain() {
  const app = AppSetup.initSetting({
    plugins: [
      SettingManagePlugin,
      BookTocPlugin,
      DocBeautifyPlugin,
      LinkPreviewPlugin,
      QuickMenuPlugin,
    ],
  });

  return app.render();
}
