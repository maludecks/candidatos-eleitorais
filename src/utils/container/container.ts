import { Container } from 'containor';
import CandidatesRepository from '../../candidates/CandidatesRepository';
import DatabaseService from '../../database/DatabaseService';
import ResponseFactory from '../ResponseFactory';
import tokens from './tokens';

const container = new Container();

container.add(tokens.databaseService, DatabaseService);
container.add(tokens.responseFactory, ResponseFactory);
container.add(tokens.candidatesRepository, CandidatesRepository, [
  tokens.databaseService,
]);

export default container;
