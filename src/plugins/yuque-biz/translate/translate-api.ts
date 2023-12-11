import { request } from '@plugins/request';
import { detectLanguage } from '@core/hosts/i18n';

export class TranslateApi {
  async translate(text: string) {
    const language = await detectLanguage(text);
    const res: any = await request({
      url: `/api/services/translate/text`,
      config: {
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
