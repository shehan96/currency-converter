import { CurrencyType } from './Currency';
import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { GetCurrencyByCode } from '../Resolvers/Currency';

export const CountryType = new GraphQLObjectType({
  name: 'CountryType',
  description: 'This represent country type',
  fields: () => ({
    common_name: { type: new GraphQLNonNull(GraphQLString) },
    official_name: { type: new GraphQLNonNull(GraphQLString) },
    flag: { type: GraphQLString },
    population: { type: new GraphQLNonNull(GraphQLInt) },
    currency_code: { type: new GraphQLNonNull(GraphQLString) },
    currency: {
      type: CurrencyType,
      resolve: async (parent, args, context, info) => {
        let result = await GetCurrencyByCode(parent, args, context, info);
        return result;
      },
    },
  }),
});

export const CountryNameType = new GraphQLObjectType({
  name: 'CountryNameType',
  description: 'This represent country name type',
  fields: () => ({
    common_name: { type: new GraphQLNonNull(GraphQLString) },
    official_name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
