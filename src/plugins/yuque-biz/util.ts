import { uid } from '@lib/uid';
import { DocType } from './interfaces/i-doc';

export function getDefaultDocSlug() {
  return uid(16);
}

export function getDefaultTitle(type: DocType) {
  if (type === 'Doc') return '无标题文档';
  if (type === 'Sheet') return '无标题表格';
  if (type === 'Board') return '无标题画板';
  if (type === 'Table') return '无标题数据表';
}

export function getDocFormat(type: DocType) {
  if (type === 'Doc') return 'lake';
  if (type === 'Sheet') return 'lakesheet';
  if (type === 'Board') return 'lakeboard';
  if (type === 'Table') return 'laketable';
}
