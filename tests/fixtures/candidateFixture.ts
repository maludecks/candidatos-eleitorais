import { Candidato } from '../../src/candidates/Types';

export const candidate = (candidate?: Partial<Candidato>): Candidato => ({
  ...defaultFixture,
  ...candidate,
});

const defaultFixture: Candidato = {
  numero: 99,
  nome: 'Erlich Backman',
  descricao:
    'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  partido: 'PX',
  redesSociais: [
    {
      nome: 'twitter',
      url: 'https://twitter.com/user1',
    },
  ],
  elegivel: true,
  confirmado: true,
  eleicoes: 'gerais',
  cargo: 'presidencia',
  ano: 2022,
};
