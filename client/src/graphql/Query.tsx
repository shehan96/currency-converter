import { gql } from '@apollo/client';

export const GET_COUNTRY_QUERY = gql`
  query GetCountryDetails($searchCountry: String!) {
    GetCountryDetails(searchCountry: $searchCountry) {
      common_name
      official_name
      flag
      population
      currency_codes
      currencies {
        code
        exchange_rate
      }
    }
  }
`;

export const GET_ALL_COUNTRY_QUERY = gql`
  query GetAllCountries {
    GetAllCountries {
      common_name
    }
  }
`;

export const LOGIN_QUERY = gql`
  mutation Login($email: String!, $password: String!) {
    Login(email: $email, password: $password) {
      token
    }
  }
`;
