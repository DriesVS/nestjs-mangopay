// eslint-disable-next-line
require('dotenv').config();

const { MANGOPAY_CLIENT_ID, MANGOPAY_API_KEY } = process.env;

if (!MANGOPAY_CLIENT_ID || !MANGOPAY_API_KEY)
  throw new Error('No testing authorization provided in env!');
