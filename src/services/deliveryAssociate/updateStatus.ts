import DeliveryAssociate, {
  DeliveryAssociateStatus,
  IDeliveryAssociateSchema,
} from '../../models/DeliveryAssociate';

export default async (
  id: string,
  status: DeliveryAssociateStatus
): Promise<IDeliveryAssociateSchema> => {
  try {
    const deliveryAssociate = await DeliveryAssociate.findByIdAndUpdate(id, {
      status,
    });
    return deliveryAssociate;
  } catch (error) {
    throw error;
  }
};
