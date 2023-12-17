export const pluginId = 'translate-yt';
export const pluginName = 'Youtube 翻译';
export const pluginDesc = '支持评论翻译翻译快捷操作';
export const pluginUrls = [
  'http{s}?://*.youtube.com/?*',
  'http{s}?://*.youtube.com/watch?*',
  'http{s}?://*.youtube.com',
  'http{s}?://*.youtube.com/shorts/:id',
];
export const youtubeCommentCacheKey = 'youtube-comment';
// 只缓存最多 1000 条的翻译数据
export const maxTranslateCacheLength = 1000;
