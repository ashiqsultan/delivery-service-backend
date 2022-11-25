import Shipment, {
  ShipmentStatus,
  IShipmentSchema,
} from '../../models/Shipment';

export default async (
  id: string,
  status: ShipmentStatus
): Promise<IShipmentSchema> => {
  try {
    console.log({ id, status });
    const shipment = await Shipment.findByIdAndUpdate(
      id,
      {
        status,
      },
      { new: true }
    );
    console.log(shipment);
    return shipment;
  } catch (error) {
    throw error;
  }
};
