import { Point } from 'geojson';
import DeliveryAssociate, {
  DeliveryAssociateStatus,
  IDeliveryAssociate,
  IDeliveryAssociateSchema,
} from '../../models/DeliveryAssociate';
import { randEmail, randUserName } from '@ngneat/falso';

const createNearByAssociate = async (
  location: Point
): Promise<IDeliveryAssociateSchema> => {
  try {
    const newDeliveryAssociate: IDeliveryAssociate = {
      email: randEmail(),
      name: randUserName(),
      status: DeliveryAssociateStatus.available,
      currentLocation: {
        type: 'Point',
        coordinates: [80.29213899074955, 13.093710978294226],
      },
    };
    const deliveryAssociate = new DeliveryAssociate(newDeliveryAssociate);
    await deliveryAssociate.save();
    return deliveryAssociate;
  } catch (error) {
    throw error;
  }
};
export default createNearByAssociate;
