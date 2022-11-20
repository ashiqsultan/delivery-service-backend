import mongoose, { Schema, Document } from 'mongoose';
import { IOrganization } from './Organization';

export enum Roles {
  admin = 'admin',
  default = 'default',
}
export interface IUser {
  email: string;
  name: string;
  roles: Array<Roles>;
  organization: string | IOrganization;
}

export interface IUserSchema extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: 'organization',
      required: true,
    },
    roles: {
      type: [
        {
          type: String,
          enum: Object.values(Roles),
        },
      ],
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<IUserSchema>('user', UserSchema);
export default UserModel;
