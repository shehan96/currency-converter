import { GraphQLString } from 'graphql';
import { UserAuthentication } from '../Resolvers/Login';
import { LoginType } from '../TypeDefs/Login';

/**
 * Login mutation to authenticate the user
 * @args email : useremail, password : userpassword
 * */
export const Login = {
  type: LoginType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  description: 'This is mutation for user authentication',
  resolve: (parent, args, context, info) => {
    return UserAuthentication(parent, args, context, info);
  },
};
