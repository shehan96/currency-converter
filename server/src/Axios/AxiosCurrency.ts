import axios from 'axios';

export const axiosCurrency = axios.create({
  baseURL: process.env.FIXER_API_BASE_URL,
});
