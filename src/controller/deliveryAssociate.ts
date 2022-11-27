import { Request, Response, NextFunction } from 'express';
import AppRequest from 'AppRequest';
import AppResponse from '../types/AppResponse';
import createOne from '../services/deliveryAssociate/createOne';
import generateAssociate from '../services/deliveryAssociate/generateAssociate';
import getOne from '../services/deliveryAssociate/getOne';

export const createDeliveryAssociate = async (
  _req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const randomDeliveryAssociate = await generateAssociate();
    const deliveryAssociate = await createOne(randomDeliveryAssociate);
    const response: AppResponse = { data: deliveryAssociate, isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export const getDAById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id
    const deliveryAssociate = await getOne(id);
    const response: AppResponse = { data: deliveryAssociate, isError: false };
    res.send(response);
  } catch (error) {
    next(error);
  }
};
