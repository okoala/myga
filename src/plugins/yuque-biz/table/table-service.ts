import { yuqueApi } from '..';
import { docService } from '../doc/doc-service';

export class TableService {
  async safeGetUserOkrrrTable(docSlug: string, docTitle: string) {
    const doc = await docService.safeGetTableDoc(docSlug, docTitle);
    const table = JSON.parse(doc.body);
    const res = await yuqueApi.table.getRecords(doc.id, table.sheet[0].id);
    table.records = res.records;
    table.users = res.users;
    return table;
  }
}

const tableService = new TableService();
export { tableService };
