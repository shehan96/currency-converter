import jwt from 'jsonwebtoken';

export const Auth = (req, res, next) => {
  let accessToken = req.headers['authorization'];
  
  if (!accessToken) {
    req.isAuthenticated = false;
    return next();
  }

  let token = accessToken.split(' ')[1];

  if (!token || token === '') {
    req.isAuthenticated = false;
    return next();
  }

  let decodedToken: any;

  try {
    decodedToken = jwt.verify(token, '' + process.env.JWT_SECRET);
  } catch (error) {
    req.isAuthenticated = false;
    return next();
  }

  if (!decodedToken) {
    req.isAuthenticated = false;
    return next();
  }

  req.isAuthenticated = true;
  req.userEmail = decodedToken.email;

  next();
};
