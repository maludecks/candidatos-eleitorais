import { Candidato } from '../../src/candidates/Types';

export const candidate = (candidate?: Partial<Candidato>): Candidato => ({
  ...defaultFixture,
  ...candidate,
});

const defaultFixture: Candidato = {
  numero: 1,
  nome: 'Nome',
  descricao:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  partido: {
    nome: 'Nome do Partido',
    sigla: 'XX',
  },
  redesSociais: [
    {
      nome: 'instagram',
      url: 'https://instagram.com/',
    },
  ],
  elegivel: true,
  confirmado: true,
  eleicoes: 'federais',
  cargo: 'presidencia',
  ano: 2022,
};
