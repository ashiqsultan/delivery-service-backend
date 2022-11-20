import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/User';
import AppResponse from '../types/AppResponse';
import { createLocalUser } from '../services/user/createOne';
import getById from '../services/user/getById';
import deleteById from '../services/user/deleteById';
import AppRequest from 'AppRequest';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser: IUser = {
      email: req.body.email || '',
      name: req.body.name || '',
      roles: req.body.roles || '',
      organization: req.body.organization || '',
    };
    const password = req.body.password || '';
    const createdUser = await createLocalUser(newUser, password);
    const response: AppResponse = { data: createdUser, isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};
export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId: string = req.params.userId;
    const userData = await getById(userId);
    const response: AppResponse = { data: userData, isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};
export const deleteOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId: string = req.params.userId;
    const deleteUser = await deleteById(userId);
    const response: AppResponse = { data: deleteUser, isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export const getMe = async (
  req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get user id form token
    const userId: string = req.user.userId;
    const userData = await getById(userId);
    const response: AppResponse = { data: userData, isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};
