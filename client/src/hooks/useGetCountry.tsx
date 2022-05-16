import { useLazyQuery } from '@apollo/client';
import { GET_COUNTRY_QUERY } from '../graphql/Query';

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
