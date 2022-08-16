insert into public.candidato (candidato_uid, nome, descricao)
values (
  '905ca611-f541-4a61-9aee-c90bd2556f48',
  'Erlich Backman',
  'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.'
);

insert into public.eleicao (eleicao_uid, ano, tipo)
values (
  '0e2c34bb-153b-4128-8f79-57d08e852183',
  2022,
  'gerais'
);

insert into public.rede_social (rede_social_uid, candidato_uid, url, plataforma)
values (
  '31cac6f7-2859-4782-bc79-a62b5be57d76',
  '905ca611-f541-4a61-9aee-c90bd2556f48',
  'https://twitter.com/user1',
  'twitter'
);

insert into public.candidatura (candidatura_uid, candidato_uid, eleicao_uid, partido, numero, elegivel, confirmado, cargo)
values (
  '459d5695-3bee-4fa2-b322-7ad50009624e',
  '905ca611-f541-4a61-9aee-c90bd2556f48',
  '0e2c34bb-153b-4128-8f79-57d08e852183',
  'PX',
  '99',
  true,
  true,
  'presidencia'
);

insert into public.candidato (candidato_uid, nome, descricao)
values (
  'e187b4d2-308b-47ba-85ff-52c9faf4918e',
  'Jayda Berger',
  'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
);

insert into public.eleicao (eleicao_uid, ano, tipo)
values (
  '62446ba1-6e3b-40ee-9bbd-3cd158030a47',
  2018,
  'gerais'
);

insert into public.rede_social (rede_social_uid, candidato_uid, url, plataforma)
values (
  '5cd17959-fd97-4a8b-b3a3-5e311bc69922',
  'e187b4d2-308b-47ba-85ff-52c9faf4918e',
  'https://twitter.com/user2',
  'twitter'
);

insert into public.candidatura (candidatura_uid, candidato_uid, eleicao_uid, partido, numero, elegivel, confirmado, cargo)
values (
  '45a20b7b-6105-426d-8f50-411ecd166c8d',
  'e187b4d2-308b-47ba-85ff-52c9faf4918e',
  '62446ba1-6e3b-40ee-9bbd-3cd158030a47',
  'PY',
  '66',
  false,
  true,
  'presidencia'
);
