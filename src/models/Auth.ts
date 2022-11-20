import mongoose, { Schema, Document } from "mongoose";
import hashPassword from "../utils/hashPassword";

export interface IAuth {
  user: string;
  password: string;
}

export interface IAuthSchema extends IAuth, Document {}

const AuthSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

AuthSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    user.password = await hashPassword(user.password);
    next();
  } catch (error) {
    next(error);
  }
});

const AuthModel = mongoose.model<IAuthSchema>("auth", AuthSchema);
export default AuthModel;
