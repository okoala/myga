export type ITodoStatus = 'waiting' | 'done' | 'doing';

export type ITodoItem = {
  // 单个记录id
  recordId: string;
  // 正文
  content: string;
  // 任务进度
  status: ITodoStatus;
  // 计划时间
  planAt: Date;
  // 创建时间
  createdAt: Date;
  // 更新时间
  updatedAt: Date;
};

export type ITodoList = ITodoItem[];
