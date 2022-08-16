import { SupabaseClient } from '@supabase/supabase-js';
import { token } from 'containor';
import CandidatesRepository from '../../candidates/CandidatesRepository';
import ResponseFactory from '../ResponseFactory';

export default {
  databaseClient: token<SupabaseClient>('databaseClient'),
  responseFactory: token<ResponseFactory>('responseFactory'),
  candidatesRepository: token<CandidatesRepository>('candidatesRepository'),
};
