export type RedeSocial = {
  nome: 'twitter' | 'instagram' | 'facebook' | 'tiktok';
  url: string;
};

export type Cargo = 'presidencia' | 'vice-presidencia';

export type Eleicoes = 'gerais' | 'estaduais' | 'municipais';

export type Candidato = {
  nome: string;
  partido: string;
  numero: number;
  descricao: string;
  redesSociais: RedeSocial[];
  confirmado: boolean;
  elegivel: boolean;
  cargo: Cargo;
  eleicoes: Eleicoes;
  ano: number;
};

export type ListQueryFilters = {
  ano?: number;
};

/* eslint-disable @typescript-eslint/no-explicit-any*/
export type DbRow = Record<string, any>;
