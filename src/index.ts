import { Request } from 'express';
import { ListQueryFilters } from './candidates/Types';
import container from './utils/container/container';
import tokens from './utils/container/tokens';
import { Response } from './utils/Types';

const responseFactory = container.get(tokens.responseFactory);
const candidatesRepository = container.get(tokens.candidatesRepository);

export const getAll = async (request: Request): Promise<Response> => {
  let filters: ListQueryFilters = {};

  if (request.query?.ano) {
    filters.ano = Number(request.query.ano);
  }

  try {
    return responseFactory.success(await candidatesRepository.list(filters));
  } catch (e) {
    const errorMessage = 'Erro ao tentar consultar lista de candidatos';

    console.error(errorMessage, e);

    return responseFactory.internalServerError(errorMessage);
  }
};
