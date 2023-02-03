import { rest } from 'msw';

import { generateResponseResolver } from './utils';

const handlers = [
  rest.get(
    '/api/hello',
    generateResponseResolver<Local.Movie>({
      media_type: 'movie',
      backdrop_path: '',
      genre_ids: [],
      id: 0,
      original_language: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      title: '',
      vote_average: 0,
      vote_count: 0,
    }),
  ),
];

export default handlers;
