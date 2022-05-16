import { GetCountryByName, GetAllCountryNames } from './../Resolvers/Country';
import { CountryNameType, CountryType } from './../TypeDefs/Country';
import { GraphQLList, GraphQLString } from 'graphql';

export const GetCountryDetails = {
  type: CountryType,
  description: 'Get country details by using country name',
  args: {
    searchCountry: { type: GraphQLString },
  },
  resolve: async (parent, args, context, info) => {
    let result = await GetCountryByName(parent, args, context, info);
    return result;
  },
};

export const GetAllCountries = {
  type: new GraphQLList(CountryNameType),
  description: 'Get all country name details',
  resolve: async (parent, args, context, info) => {
    let result = await GetAllCountryNames(parent, args, context, info);
    return result;
  },
};
