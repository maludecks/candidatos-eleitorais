import { token } from 'containor';
import CandidatesRepository from '../../candidates/CandidatesRepository';
import DatabaseService from '../../database/DatabaseService';
import ResponseFactory from '../ResponseFactory';

export default {
  databaseService: token<DatabaseService>('databaseService'),
  responseFactory: token<ResponseFactory>('responseFactory'),
  candidatesRepository: token<CandidatesRepository>('candidatesRepository'),
};
