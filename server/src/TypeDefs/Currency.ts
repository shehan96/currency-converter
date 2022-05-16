import { GraphQLFloat, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const CurrencyType = new GraphQLObjectType({
  name: 'CurrencyType',
  description: 'This represent currency type',
  fields: () => ({
    code: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    symbol: { type: new GraphQLNonNull(GraphQLString) },
    exchange_rate_to_sek: { type: new GraphQLNonNull(GraphQLFloat) },
  }),
});
