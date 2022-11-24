import Shipment, { IShipment } from '../../models/Shipment';

const createOne = async (shipment: IShipment): Promise<IShipment> => {
  try {
    const newShipment = new Shipment(shipment);
    await newShipment.save();
    return newShipment;
  } catch (error) {
    throw error;
  }
};
export default createOne;
