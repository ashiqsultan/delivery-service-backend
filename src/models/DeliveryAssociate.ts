import { Point } from 'geojson';
import mongoose, { Schema, Document } from 'mongoose';
import PointSchema from './PointSchema';

export enum DeliveryAssociateStatus {
  available = 'available', // ready to accept new shipment
  delivering = 'delivering', // transporting goods
  off = 'off', // on leave
}
export interface IDeliveryAssociate {
  email: string;
  name: string;
  status: DeliveryAssociateStatus;
  currentLocation: Point;
}

export interface IDeliveryAssociateSchema
  extends IDeliveryAssociate,
    Document {}

const DeliveryAssociateSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      // unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(DeliveryAssociateStatus),
    },
    currentLocation: {
      type: PointSchema,
      required: false,
    },
  },
  { timestamps: true }
);

const DeliveryAssociateModel = mongoose.model<IDeliveryAssociateSchema>(
  'deliveryassociate',
  DeliveryAssociateSchema
);
export default DeliveryAssociateModel;
