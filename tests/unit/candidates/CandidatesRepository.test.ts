import { mock } from 'jest-mock-extended';
import CandidatesRepository from '../../../src/candidates/CandidatesRepository';
import DatabaseService from '../../../src/database/DatabaseService';
import { candidate } from '../../fixtures/candidateFixture';

describe('CandidatesRepository', () => {
  const databaseService = mock<DatabaseService>();
  const candidatesRepository = new CandidatesRepository(databaseService);

  describe('getAll', () => {
    test('retorna lista de candidatos e candidatas', async () => {
      const candidateFixture = candidate();

      databaseService.query.mockResolvedValue([candidateFixture]);

      const res = await candidatesRepository.getAll();

      expect(res).toEqual([candidateFixture]);
    });
  });
});
