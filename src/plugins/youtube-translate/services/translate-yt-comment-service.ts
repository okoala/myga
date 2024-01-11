import { deepTranslateSerivce } from '@plugins/rapidapi';
import { yuqueApi } from '@plugins/yuque-biz';
import { IYoutubeComment } from '../interfaces/i-youtube';
import { storage } from '@lib/hosts/storage';
import { maxTranslateCacheLength, youtubeCommentCacheKey } from '../constants';
import _ from 'lodash';

// 翻译 youtube 评论数据
class TranslateYoutubeCommentService {
  private _cache: Record<string, IYoutubeComment> = {};

  constructor() {
    this.init();
  }

  async init() {
    const cacheData = await storage.get(youtubeCommentCacheKey);
    this._cache = cacheData ? JSON.parse(cacheData) : {};
  }

  getCacheComment(commentId: string) {
    return this._cache[commentId];
  }

  setCacheComment(commentId: string, content: string) {
    this._cache[commentId] = {
      id: commentId,
      content,
      translatedAt: new Date().getTime(),
    };
    const keys = Object.keys(this._cache);
    if (keys.length > maxTranslateCacheLength) {
      const deleteCount = keys.length - maxTranslateCacheLength;
      const values = Object.values(this._cache);
      const orderdValues = _.orderBy(values, ['translatedAt', 'asc']);
      for (let i = 0; i <= deleteCount; i++) {
        delete this._cache[orderdValues[i].id];
      }
    }
    storage.set(youtubeCommentCacheKey, JSON.stringify(this._cache));
  }

  async translate(comment: IYoutubeComment): Promise<string | null> {
    if (!comment) return null;
    const cacheComment = this.getCacheComment(comment.id);
    if (cacheComment) return cacheComment.content;
    let content;
    try {
      content = await deepTranslateSerivce.translate(comment.content);
    } catch (err) {
      content = await yuqueApi.translate.text(comment.content);
    }
    if (content) {
      this.setCacheComment(comment.id, content);
    }
    return content;
  }
}

const youtubeCommentTranslateService = new TranslateYoutubeCommentService();
export { youtubeCommentTranslateService };
