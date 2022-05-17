import { CurrencyType } from './Currency';
import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { GetCurrencyByCode } from '../Resolvers/Currency';

/**
 * This graphql object represnt country data type
 * */
export const CountryType = new GraphQLObjectType({
  name: 'CountryType',
  description: 'This object represent country type',
  fields: () => ({
    common_name: { type: new GraphQLNonNull(GraphQLString) },
    official_name: { type: new GraphQLNonNull(GraphQLString) },
    flag: { type: GraphQLString },
    population: { type: new GraphQLNonNull(GraphQLInt) },
    currency_codes: { type: new GraphQLList(GraphQLString) },
    currencies: {
      type: new GraphQLList(CurrencyType),
      resolve: async (parent, args, context, info) => {
        let result = await GetCurrencyByCode(parent, args, context, info);
        return result;
      },
    },
  }),
});

/**
 * This graphql object represnt country name data type
 * */
export const CountryNameType = new GraphQLObjectType({
  name: 'CountryNameType',
  description: 'This object represent country name type',
  fields: () => ({
    common_name: { type: new GraphQLNonNull(GraphQLString) },
    official_name: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
