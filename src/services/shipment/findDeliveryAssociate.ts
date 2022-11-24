import Shipment, { IShipmentSchema } from '../../models/Shipment';
import findNearByAssociate from '../deliveryAssociate/findNearByAssociate';
import updateDeliveryAssociate from './updateDeliveryAssociate';

export default async (id: string): Promise<IShipmentSchema> => {
  try {
    const shipment = await Shipment.findById(id);
    const deliveryAssociate = await findNearByAssociate(
      shipment.pickupLocation
    );
    const shipmentWithAssociateId = await updateDeliveryAssociate(
      id,
      deliveryAssociate._id
    );
    return shipmentWithAssociateId;
  } catch (error) {}
};
