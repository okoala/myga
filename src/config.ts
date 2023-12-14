import LinkPreviewConfiuration from '@plugins/yuque-link-preview/configuration';

export const AppConfig = {
  official: {
    master: 'okoala',
    repo: 'okrrr',
    docs: {
      piritwords: {
        id: 150088514,
        name: '鼓励词句',
        slug: 'gkuf7kp9a2u8zvy8',
        sheetId: 'lfrebrubs9f5y6q2shgz61zoskgd9467',
      },
    },
  },
  user: {
    // 知识库 slug
    repo: {
      name: 'okrrr 数据库',
      slug: 'okrrr-u',
      description:
        '由 okrrr 插件自动创建，用来存储来自插件的各类数据。请勿删除，以免造成数据丢失',
    },
  },
  configs: [LinkPreviewConfiuration],
  settingPage: {
    menus: ['link-preview', 'doc-beautify', 'book-toc', 'quick-menu'],
  },
};
