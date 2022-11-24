import { Point } from 'geojson';
import { IDeliveryAssociate, IDeliveryAssociateSchema } from '../../models/DeliveryAssociate';
import createNearByAssociate from './createNearByAssociate';

export default async (location: Point): Promise<IDeliveryAssociateSchema> => {
  try {
    // Create fake associate nearby
    const deliveryAssociate = await createNearByAssociate(location);
    return deliveryAssociate;
  } catch (error) {
    throw error;
  }
};
