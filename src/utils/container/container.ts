import { createClient } from '@supabase/supabase-js';
import { Container, raw } from 'containor';
import CandidatesRepository from '../../candidates/CandidatesRepository';
import ResponseFactory from '../ResponseFactory';
import tokens from './tokens';

const container = new Container();

container.add(tokens.databaseClient, createClient, [
  raw(process.env.DB_HOST || ''),
  raw(process.env.DB_ACCESS_KEY || ''),
]);
container.add(tokens.responseFactory, ResponseFactory);
container.add(tokens.candidatesRepository, CandidatesRepository, [
  tokens.databaseClient,
]);

export default container;
