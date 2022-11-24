import { Request, Response, NextFunction } from 'express';
import AppRequest from 'AppRequest';
import { IShipment, ShipmentStatus } from '../models/Shipment';
import AppResponse from '../types/AppResponse';
import createOne from '../services/shipment/createOne';

export const createShipment = async (
  req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const newShipment: IShipment = {
      pickupLocation: req.body.pickupLocation,
      dropLocation: req.body.dropLocation,
      status: ShipmentStatus.requested,
      userId: req.user.userId,
    };
    const createdShipment = await createOne(newShipment);
    const response: AppResponse = {
      data: createdShipment,
      isError: false,
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};
