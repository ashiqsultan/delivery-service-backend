import { Request, Response, NextFunction } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import IUserJWTPayload from '../types/IUserJWTPayload';
import AppRequest from '../types/AppRequest';
import { invalidToken, tokenExpired } from '../commonRes';
import config from '../config';

/**
 * Verifies JWT Bearer token and adds user to request object
 */
const verifyJwt = (
  req: AppRequest,
  res: Response,
  next: NextFunction
): void => {
  try {
    const bearerToken = req.headers.authorization || '';
    if (!bearerToken) {
      res.status(invalidToken.statusCode).json(invalidToken);
      return;
    }
    const token = bearerToken.split(' ')[1] || '';
    if (token) {
      jwt.verify(token, config.secretKey, (err, decoded) => {
        if (err) {
          if (err instanceof TokenExpiredError) {
            res.status(tokenExpired.statusCode).json(tokenExpired);
            return;
          }
          next(err);
        } else {
          req.user = decoded as IUserJWTPayload;
          next();
        }
      });
    } else {
      res.status(invalidToken.statusCode).json(invalidToken);
      return;
    }
  } catch (error) {
    res.status(invalidToken.statusCode).json(invalidToken);
    return;
  }
};
export default verifyJwt;
