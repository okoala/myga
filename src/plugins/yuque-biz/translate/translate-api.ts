import { request } from '@plugins/yuque-request';
import { detectLanguage } from '@lib/hosts/i18n';

export class TranslateApi {
  async text(text: string) {
    const language = await detectLanguage(text);
    const res: any = await request({
      url: `/api/services/translate/text`,
      config: {
        baseURL: 'https://www.yuque.com',
        method: 'POST',
        data: {
          srcLanguage: language,
          srcTextList: [text],
          tgtLanguage: 'zh',
        },
      },
    });
    return res?.data?.[0] || '';
  }
}
