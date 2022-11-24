import AppResponse from 'AppResponse';
import { Request } from 'express';
import { NoAuthorizationHeader } from '../../commonRes';
import login from './login';
/**
 * Function to authenticate a user using basic auth.
 */
const basicAuth = async (req: Request): Promise<AppResponse> => {
  try {
    const authHeader = req.headers.authorization || '';
    if (authHeader) {
      const [username, password] = Buffer.from(
        authHeader.split(' ')[1],
        'base64'
      )
        .toString()
        .split(':');
      return await login(username, password);
    } else {
      return NoAuthorizationHeader;
    }
  } catch (error) {
    console.error(error);
    return NoAuthorizationHeader;
  }
};

export default basicAuth;
