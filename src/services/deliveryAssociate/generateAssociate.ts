import * as turf from '@turf/turf';
import { randEmail, randUserName } from '@ngneat/falso';
import {
  DeliveryAssociateStatus,
  IDeliveryAssociate,
} from '../../models/DeliveryAssociate';

const generateAssociate = async (): Promise<IDeliveryAssociate> => {
  try {
    const BBOX_GEORGE_TOWN: [number, number, number, number] = [
      80.274868, 13.082266, 80.294523, 13.120292,
    ];
    const randomLocation = turf.randomPoint(1, {
      bbox: BBOX_GEORGE_TOWN,
    });
    const randomPoint = randomLocation.features[0].geometry;
    const deliveryAssociate: IDeliveryAssociate = {
      email: randEmail(),
      name: randUserName(),
      status: DeliveryAssociateStatus.available,
      currentLocation: randomPoint,
    };
    return deliveryAssociate;
  } catch (error) {
    throw error;
  }
};
export default generateAssociate;
