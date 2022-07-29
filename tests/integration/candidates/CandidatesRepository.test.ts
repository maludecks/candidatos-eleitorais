import { SupabaseClient } from '@supabase/supabase-js';
import CandidatesRepository from '../../../src/candidates/CandidatesRepository';
import { candidate } from '../../fixtures/candidateFixture';

describe('CandidatesRepository', () => {
  let databaseClient: SupabaseClient;
  let candidatesRepository: CandidatesRepository;

  beforeAll(() => {
    databaseClient = new SupabaseClient(
      'http://localhost:54321',
      // local env auto generated key
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSJ9.vI9obAHOGyVVKa3pD--kJlyxp-Z2zV9UUMAhKpNLAcU',
    );
    candidatesRepository = new CandidatesRepository(databaseClient);
  });

  describe('list', () => {
    test('retorna lista de candidatos e candidatas', async () => {
      const res = await candidatesRepository.list();

      expect(res.length).toBe(2);
      expect(res[0].nome).toEqual('Erlich Backman');
      expect(res[1].nome).toEqual('Jayda Berger');
    });

    test('filtra lista de candidatos', async () => {
      const fixture = candidate();

      const res = await candidatesRepository.list({
        ano: 2022
      });

      expect(res.length).toBe(1);
      expect(res).toEqual([fixture]);
    });

    test('retorna vazio se criterio do filtro nao retorna candidatos', async () => {
      const res = await candidatesRepository.list({
        ano: 2019
      });

      expect(res.length).toBe(0);
      expect(res).toEqual([]);
    });
  });
});
