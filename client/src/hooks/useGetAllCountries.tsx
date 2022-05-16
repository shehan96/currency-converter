import { useLazyQuery } from '@apollo/client';
import { GET_ALL_COUNTRY_QUERY } from '../graphql/Query';

export const useGetAllCountries = () => {
  const [getData, { loading, data, error }] = useLazyQuery(GET_ALL_COUNTRY_QUERY);

  let getAllCountryData = getData,
    allCountryLoading = loading,
    allCountryData = data,
    allCountryError = error;

  return { getAllCountryData, allCountryLoading, allCountryData, allCountryError };
};
