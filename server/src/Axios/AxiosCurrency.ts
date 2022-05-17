import axios from 'axios';

/**
 * Create axios instence to fetch currency
 * */
export const axiosCurrency = axios.create({
  baseURL: process.env.FIXER_API_BASE_URL,
});
