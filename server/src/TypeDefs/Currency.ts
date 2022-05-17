import { GraphQLFloat, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const CurrencyType = new GraphQLObjectType({
  name: 'CurrencyType',
  description: 'This object represent currency type',
  fields: () => ({
    code: { type: new GraphQLNonNull(GraphQLString) },
    exchange_rate: { type: new GraphQLNonNull(GraphQLFloat) },
  }),
});
