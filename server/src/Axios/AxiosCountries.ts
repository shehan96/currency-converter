import axios from 'axios';

export const axiosCountries = axios.create({
  baseURL: process.env.REST_COUNTRIES_BASE_URL,
});
