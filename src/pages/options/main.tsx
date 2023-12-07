import { AppSetup } from '@core';
import { SettingManagePlugin } from '@plugins/setting-manage';
import { BookTocPlugin } from '@plugins/book-toc';
import { DocBeautifyPlugin } from '@plugins/doc-beautify';
import { LinkPreviewPlugin } from '@plugins/link-preview';
import { QuickMenuPlugin } from '@plugins/quick-menu';

export function AppMain() {
  const app = AppSetup.init({
    plugins: [
      SettingManagePlugin,
      BookTocPlugin,
      DocBeautifyPlugin,
      LinkPreviewPlugin,
      QuickMenuPlugin,
    ],
  });

  return app.renderSetting();
}
