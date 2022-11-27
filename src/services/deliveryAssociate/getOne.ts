import DeliveryAssociate, {
  IDeliveryAssociateSchema,
} from '../../models/DeliveryAssociate';

const getOne = async (id: string): Promise<IDeliveryAssociateSchema> => {
  try {
    const deliveryAssociate = await DeliveryAssociate.findById(id);
    return deliveryAssociate;
  } catch (error) {
    throw error;
  }
};
export default getOne;
