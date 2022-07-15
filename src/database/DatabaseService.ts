import type { DbRow } from './Types';

export default class DatabaseService {
  public async query(): Promise<DbRow[]> {
    return Promise.resolve([]);
  }
}
