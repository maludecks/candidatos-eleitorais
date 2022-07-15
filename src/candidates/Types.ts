export type Partido = {
  nome: string;
  sigla: string;
};

export type RedeSocial = {
  nome: 'twitter' | 'instagram' | 'facebook' | 'tiktok';
  url: string;
};

export type Cargo = 'presidencia' | 'vice-presidencia';

export type Eleicoes = 'federais';

export type Candidato = {
  nome: string;
  partido: Partido;
  numero: number;
  descricao: string;
  redesSociais: RedeSocial[];
  confirmado: boolean;
  elegivel: boolean;
  cargo: Cargo;
  eleicoes: Eleicoes;
  ano: number;
};
