import { Candidato, ListQueryFilters, DbRow } from './types';
import { SupabaseClient } from '@supabase/supabase-js';

export default class CandidatesRepository {
  constructor(private readonly databaseClient: SupabaseClient) {}

  public async list(filters: ListQueryFilters = {}): Promise<Candidato[]> {
    const query = this.databaseClient
    .from<DbRow>('candidatura')
    .select(`
      elegivel,
      confirmado,
      cargo,
      partido,
      numero,
      candidato (
        nome,
        descricao,
        rede_social (
          plataforma,
          url
        )
      ),
      eleicao!inner (
        ano,
        tipo
      )
    `);

    if (filters.ano) {
      query.eq('eleicao.ano', filters.ano);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(`Erro ao tentar consultar banco de dados: ${error.message}`);
    }

    const candidates: Candidato[] = data.map(item => {
      return {
        nome: item.candidato.nome,
        numero: item.numero,
        descricao: item.candidato.descricao,
        partido: item.partido,
        redesSociais: item.candidato.rede_social.map((s: DbRow) => ({ nome: s.plataforma, url: s.url })),
        confirmado: item.confirmado,
        elegivel: item.elegivel,
        ano: item.eleicao.ano,
        eleicoes: item.eleicao.tipo,
        cargo: item.cargo,
      };
    });

    return candidates;
  }
}
