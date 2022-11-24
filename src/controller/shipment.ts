import { Request, Response, NextFunction } from 'express';
import AppRequest from 'AppRequest';
import { IShipment, ShipmentStatus } from '../models/Shipment';
import AppResponse from '../types/AppResponse';
import createOne from '../services/shipment/createOne';
import { default as findDA } from '../services/shipment/findDeliveryAssociate';
import { default as updateDAStatus } from '../services/deliveryAssociate/updateStatus';
import { DeliveryAssociateStatus } from '../models/DeliveryAssociate';

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

export const findDeliveryAssociate = async (
  req: AppRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const shipmentId = req.params.id || '';
    const shipmentWithAssociate = await findDA(shipmentId);
    const deliveryAssociateId =
      shipmentWithAssociate.deliveryAssociateId as string;
    // Update deliveryAssociate status to delivering
    if (deliveryAssociateId) {
      await updateDAStatus(
        deliveryAssociateId,
        DeliveryAssociateStatus.delivering
      );
    }
    const response: AppResponse = {
      data: shipmentWithAssociate,
      isError: false,
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};
