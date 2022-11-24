import { Point } from 'geojson';
import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { IDeliveryAssociate } from './DeliveryAssociate';
import PointSchema from './PointSchema';

export enum ShipmentStatus {
  requested = 'requested',
  pickupLocationReached = 'pickupLocationReached',
  transporting = 'transporting',
  dropLocationReached = 'dropLocationReached',
  delivered = 'delivered',
  cancelled = 'cancelled',
}
export interface IShipment {
  pickupLocation: Point;
  dropLocation: Point;
  userId: string | IUser;
  deliveryAssociateId?: string | IDeliveryAssociate;
  status: ShipmentStatus;
}

export interface IShipmentSchema extends IShipment, Document {}

const ShipmentSchema: Schema = new Schema(
  {
    pickupLocation: {
      type: PointSchema,
      required: true,
    },
    dropLocation: {
      type: PointSchema,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(ShipmentStatus),
      required: true,
    },
    deliveryAssociateId: {
      type: Schema.Types.ObjectId,
      ref: 'deliveryassociate',
      required: false,
    },
  },
  { timestamps: true }
);

const ShipmentModel = mongoose.model<IShipmentSchema>(
  'shipment',
  ShipmentSchema
);
export default ShipmentModel;
