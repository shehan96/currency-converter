import { useMutation } from '@apollo/client';
import { LOGIN_QUERY } from '../graphql/Query';

export const useLogin = (props: any) => {
  const [runLogin, { data, loading, error }] = useMutation(LOGIN_QUERY, {
    variables: {
      email: props.email,
      password: props.password,
    },
  });

  let runLoginMutation = runLogin,
    loginMutationData = data,
    loginMutationLoading = loading,
    loginMutationError = error;

  return { runLoginMutation, loginMutationData, loginMutationLoading, loginMutationError };
};
