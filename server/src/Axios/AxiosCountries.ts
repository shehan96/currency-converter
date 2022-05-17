import axios from 'axios';

/**
 * Create axios instence to fetch countries
 * */
export const axiosCountries = axios.create({
  baseURL: process.env.REST_COUNTRIES_BASE_URL,
});
