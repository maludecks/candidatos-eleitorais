import DatabaseService from '../../../src/database/DatabaseService';

describe('DatabaseService', () => {
  const databaseService = new DatabaseService();

  describe('query', () => {
    test('query retorna items', async () => {
      const res = await databaseService.query();

      expect(res).toEqual([]);
    });
  });
});
