import jwt from 'jsonwebtoken';
import IUserJWTPayload from '../types/IUserJWTPayload';
import config from '../config';

function jwtSignPromise(
  payload: string | object | Buffer,
  JWT_SECRET: string,
  jwtOptions: jwt.SignOptions
): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, jwtOptions, (err, token) => {
      if (err) return reject(err);
      else return resolve(token);
    });
  });
}

/**
 * Generate IUserJWTPayload given a userId and userEmail
 */
const generateUserJWTPayload = (
  userId: string,
  userEmail: string,
  organizationId: string
): IUserJWTPayload => ({ userId, userEmail, organizationId });

/**
 * Generate a jwt token for a user
 */
const generateToken = async (
  userId: string,
  userEmail: string,
  organizationId: string
): Promise<string> => {
  try {
    const payload = generateUserJWTPayload(userId, userEmail, organizationId);
    const jwtOptions: jwt.SignOptions = {
      expiresIn: '6h',
    };
    const token = await jwtSignPromise(payload, config.secretKey, jwtOptions);
    return token;
  } catch (error) {
    throw error;
  }
};

export default generateToken;
