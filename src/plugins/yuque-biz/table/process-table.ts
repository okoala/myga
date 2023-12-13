export type ITableRecord = {
  uuid: string;
  doc_id: number;
  doc_type: string;
  user_id: number;
  modifier_id: number;
  created_at: string;
  updated_at: string;
  data: string;
};

export function getTexts(records: ITableRecord[]) {
  const texts: string[] = [];
  records.forEach(record => {
    const data = JSON.parse(record.data);
    const cellValues: any[] = Object.values(data);
    for (const cellValue of cellValues) {
      if (cellValue.value && typeof cellValue.value === 'string') {
        texts.push(cellValue.value);
      }
    }
  });
  return texts;
}
