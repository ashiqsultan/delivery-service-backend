/**
 * Constants for common responses.
 */
import AppResponse from './types/AppResponse';

export const userNotFound: AppResponse = {
  data: null,
  isError: true,
  errMsg: 'User not found',
  statusCode: 404,
};

export const incorrectPassword: AppResponse = {
  data: null,
  isError: true,
  errMsg: 'Incorrect password',
  statusCode: 401,
};

export const invalidToken: AppResponse = {
  data: null,
  isError: true,
  errMsg: 'Invalid Token',
  statusCode: 401,
};
export const tokenExpired: AppResponse = {
  data: null,
  isError: true,
  errMsg: 'Token expired',
  statusCode: 401,
};

export const NoAuthorizationHeader: AppResponse = {
  data: null,
  isError: true,
  errMsg: 'No authorization header provided',
  statusCode: 401,
};

export const userOrgDifferent: AppResponse = {
  data: null,
  isError: true,
  errMsg: 'User and organization are different',
  statusCode: 401,
};
