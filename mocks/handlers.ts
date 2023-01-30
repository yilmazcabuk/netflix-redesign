import { rest } from 'msw';

import { generateResponseResolver } from './utils';

const handlers = [
  rest.get(
    '/api/hello',
    generateResponseResolver<Local.Movie>({
      backdrop_path: '',
      first_air_date: '',
      genre_ids: [],
      id: 0,
      name: '',
      origin_country: [],
      original_language: '',
      original_name: '',
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
