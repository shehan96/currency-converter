import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

/**
 * This graphql object represnt login data type
 * */
export const LoginType = new GraphQLObjectType({
  name: 'LoginType',
  description: 'This represent login type',
  fields: () => ({
    token: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
