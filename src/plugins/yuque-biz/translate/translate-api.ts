import { request } from '@plugins/yuque-request';
import { detectLanguage } from '@lib/hosts/i18n';

export class TranslateApi {
  async text(text: string) {
    let result;

    try {
      const language = await detectLanguage(text);
      result = await this._translateText(text, language);
    } catch (err) {
      // 如果失败就尝试一次 auto
      result = await this._translateText(text, 'auto');
    }

    return result;
  }

  async _translateText(text: string, language: string) {
    const res: any = await request({
      url: `/api/services/translate/text`,
      config: {
        baseURL: 'https://www.yuque.com',
        method: 'POST',
        data: {
          srcLanguage: language,
          srcTextList: text.split('. '),
          tgtLanguage: 'zh',
        },
      },
    });
    return res?.data ? res?.data.join('。') : '';
  }
}
