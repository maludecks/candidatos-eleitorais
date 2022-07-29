import { Request } from 'express';
import { ListQueryFilters } from './candidates/types';
import container from './utils/container/container';
import tokens from './utils/container/tokens';
import { Response } from './utils/types';

const responseFactory = container.get(tokens.responseFactory);
const candidatesRepository = container.get(tokens.candidatesRepository);

export const getAll = async (request: Request): Promise<Response> => {
  let filters: ListQueryFilters = {};

  if (request.query?.ano) {
    filters.ano = Number(request.query.ano);
  }

  return responseFactory.success(await candidatesRepository.list(filters));
};
