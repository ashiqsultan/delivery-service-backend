import { Request, Response, NextFunction } from 'express';
import AppRequest from 'AppRequest';
import AppResponse from '../types/AppResponse';
import createOne from '../services/deliveryAssociate/createOne';
import generateAssociate from '../services/deliveryAssociate/generateAssociate';

export const createDeliveryAssociate = async (
  _req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const randomDeliveryAssociate = await generateAssociate();
    const deliveryAssociate = await createOne(randomDeliveryAssociate);
    res.send(deliveryAssociate);
  } catch (error) {
    next(error);
  }
};
