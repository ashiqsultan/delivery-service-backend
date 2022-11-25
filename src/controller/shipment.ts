import { Request, Response, NextFunction } from 'express';
import AppRequest from 'AppRequest';
import { IShipment, ShipmentStatus } from '../models/Shipment';
import AppResponse from '../types/AppResponse';
import createOne from '../services/shipment/createOne';
import updateDeliveryAssociate from '../services/shipment/updateDeliveryAssociate';
import updateStatus from '../services/shipment/updateStatus';

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

export const patchDeliveryAssociate = async (
  req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const shipmentId = req.params.id;
    const deliveryAssociateId = req.body.deliveryAssociateId;
    const shipmentWithDeliveryAssociate = await updateDeliveryAssociate(
      shipmentId,
      deliveryAssociateId
    );

    const response: AppResponse = {
      data: shipmentWithDeliveryAssociate,
      isError: false,
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export const patchStatus = async (
  req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const shipmentId = req.params.id;
    const status = req.body.status;
    const shipment = await updateStatus(shipmentId, status);
    const response: AppResponse = {
      data: shipment,
      isError: false,
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};
