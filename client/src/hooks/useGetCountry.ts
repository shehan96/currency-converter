import { useLazyQuery } from '@apollo/client';
import { GET_COUNTRY_QUERY } from '../graphql/Query';

/**
 * useGetCountry hook
 * Get data using GET_COUNTRY_QUERY from graphql server
 * */
export const useGetCountry = (countryName: string) => {
  const [getData, { loading, data, error }] = useLazyQuery(GET_COUNTRY_QUERY, {
    variables: { searchCountry : countryName },
  });

  let getCountryData = getData,
    countryLoading = loading,
    countryData = data,
    countryError = error;

  return { getCountryData, countryLoading, countryData, countryError };
};
