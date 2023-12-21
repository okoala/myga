import { detectLanguage } from '@lib/hosts/i18n';
import { request } from './request-proxy';

class DeepTranslateService {
  async translate(text: string) {
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

  async _translateText(text: string, source: string) {
    const res: any = await request({
      url: `/language/translate/v2`,
      config: {
        baseURL: 'https://deep-translate1.p.rapidapi.com',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key':
            '93d44b9190msha358aed14e12198p1ce925jsnb64af8757451',
          'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
        },
        data: {
          q: text,
          source,
          target: 'zh',
        },
      },
    });
    return res?.data?.translations?.translatedText || '';
  }
}

const deepTranslateSerivce = new DeepTranslateService();
export { deepTranslateSerivce };
