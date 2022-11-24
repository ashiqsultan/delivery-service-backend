import DeliveryAssociate, {
  IDeliveryAssociate,
  IDeliveryAssociateSchema,
} from '../../models/DeliveryAssociate';

const createOne = async (
  deliveryAssociateObj: IDeliveryAssociate
): Promise<IDeliveryAssociateSchema> => {
  try {
    const deliveryAssociate = new DeliveryAssociate(deliveryAssociateObj);
    await deliveryAssociate.save();
    return deliveryAssociate;
  } catch (error) {
    throw error;
  }
};
export default createOne;
