import Shipment, {
  ShipmentStatus,
  IShipmentSchema,
} from '../../models/Shipment';

export default async (
  id: string,
  status: ShipmentStatus
): Promise<IShipmentSchema> => {
  try {
    const shipment = await Shipment.findByIdAndUpdate(id, {
      status,
    });
    return shipment;
  } catch (error) {
    throw error;
  }
};
