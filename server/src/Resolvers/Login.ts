import jwt from 'jsonwebtoken';

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
      expiresIn: '1h',
    });
  } catch (error) {
    throw new Error('' + error);
  }

  return { token: token, email: email };
};
