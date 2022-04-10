import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'sandwhale',
  apiKey: process.env.API_KEY || '',
});
