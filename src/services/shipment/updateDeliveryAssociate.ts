import Shipment, { IShipmentSchema } from '../../models/Shipment';

const updateDeliveryAssociate = async (
  id: string,
  deliveryAssociateId: string
): Promise<IShipmentSchema> => {
  try {
    const shipment = await Shipment.findByIdAndUpdate(id, {
      deliveryAssociateId: deliveryAssociateId,
    });
    return shipment;
  } catch (error) {
    throw error;
  }
};
export default updateDeliveryAssociate;
