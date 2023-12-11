import { yuqueApi } from '@plugins/yuque-biz/yuque-api';
import { IYoutubeComment } from '../interfaces/i-youtube';
import { storage } from '@core/hosts/storage';
import { youtubeCommentCacheKey } from '../constants';

// 翻译 youtube 评论数据
class TranslateYoutubeCommentService {
  private _cache: Map<string, IYoutubeComment> = new Map();

  constructor() {
    this.init();
  }

  async init() {
    const cacheData = await storage.get(youtubeCommentCacheKey);
    this._cache = cacheData ? JSON.parse(cacheData) : new Map();
  }

  getCacheComment(commentId: string) {
    return this._cache.get(commentId);
  }

  setCacheComment(commentId: string, content: string) {
    this._cache.set(commentId, {
      id: commentId,
      content,
      translatedAt: new Date().getTime(),
    });
    storage.set(youtubeCommentCacheKey, JSON.stringify(this._cache));
  }

  async translate(comment: IYoutubeComment): Promise<string | null> {
    if (!comment) return null;
    const cacheComment = this.getCacheComment(comment.id);
    if (cacheComment) return cacheComment.content;
    const content = await yuqueApi.translate.text(comment.content);
    if (content) {
      this.setCacheComment(comment.id, content);
    }
    return content;
  }
}

const youtubeCommentTranslateService = new TranslateYoutubeCommentService();
export { youtubeCommentTranslateService };
