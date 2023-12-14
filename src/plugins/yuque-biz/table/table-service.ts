import { yuqueApi } from '..';
import { docService } from '../doc/doc-service';

export class TableService {
  async safeGetUserOkrrrTable(docSlug: string, docTitle: string) {
    const doc = await docService.safeGetTableDoc(docSlug, docTitle);
    const table = await yuqueApi.table.getTable(doc.id);
    // const records = await yuqueApi.table.getRecords(doc.id, table.sheet[0].id);
    return table;
  }
}

const tableService = new TableService();
export { tableService };
