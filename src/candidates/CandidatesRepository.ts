import { Candidato } from './Types';
import type DatabaseService from '../database/DatabaseService';

export default class CandidatesRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  public async getAll(): Promise<Candidato[]> {
    const items = await this.databaseService.query();

    const candidates: Candidato[] = items.map(item => ({
      nome: item.nome,
      numero: item.numero,
      descricao: item.descricao,
      partido: item.partido,
      redesSociais: item.redesSociais,
      confirmado: item.confirmado ? true : false,
      elegivel: item.elegivel ? true : false,
      ano: item.ano,
      eleicoes: item.eleicoes,
      cargo: item.cargo,
    }));

    return candidates;
  }
}
