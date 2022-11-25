import { Point } from 'geojson';
import DeliveryAssociate, {
  IDeliveryAssociateSchema,
} from '../../models/DeliveryAssociate';

export default async (
  id: string,
  location: Point
): Promise<IDeliveryAssociateSchema> => {
  try {
    const deliveryAssociate = await DeliveryAssociate.findByIdAndUpdate(
      id,
      {
        currentLocation: location,
      },
      { new: true }
    );
    return deliveryAssociate;
  } catch (error) {
    throw error;
  }
};
