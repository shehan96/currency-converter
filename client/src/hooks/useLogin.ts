import { useMutation } from '@apollo/client';
import { LOGIN_QUERY } from '../graphql/Query';

type UseLoginProps = {
  email: string;
  password: string;
};

/**
 * useLogin hook
 * Mutation login function using LOGIN_QUERY from graphql server
 * */
export const useLogin = ({ email, password }: UseLoginProps) => {
  const [runLogin, { data, loading, error }] = useMutation(LOGIN_QUERY, {
    variables: {
      email: email,
      password: password,
    },
  });

  let runLoginMutation = runLogin,
    loginMutationData = data,
    loginMutationLoading = loading,
    loginMutationError = error;

  return { runLoginMutation, loginMutationData, loginMutationLoading, loginMutationError };
};
