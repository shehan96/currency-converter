import jwt from 'jsonwebtoken';

/**
 * Takes arguments from the login mutation and authenticated the user
 * @params parent, args, context, info
 * */
export const UserAuthentication = (parent, args, context, info) => {
  let { email, password } = args;

  if (email != process.env.EMAIL) {
    throw new Error('Email incorrect');
  }

  if (password != process.env.PASSWORD) {
    throw new Error('Passowrd incorrect');
  }

  let token: string;

  try {
    token = jwt.sign({ email: email }, '' + process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  } catch (error) {
    throw new Error('' + error);
  }

  return { token: token, email: email };
};
