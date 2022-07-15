import container from './utils/container/container';
import tokens from './utils/container/tokens';
import { Response } from './utils/Types';

const responseFactory = container.get(tokens.responseFactory);
const candidatesRepository = container.get(tokens.candidatesRepository);

export const getAll = async (): Promise<Response> => {
  return responseFactory.success(await candidatesRepository.getAll());
};
