import mongoose, { Schema, Document } from 'mongoose';

export interface IOrganization {
  name: string;
  email: string;
}

export interface IOrganizationSchema extends IOrganization, Document {}

const OrganizationSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const OrganizationModel = mongoose.model<IOrganizationSchema>(
  'organization',
  OrganizationSchema
);
export default OrganizationModel;
