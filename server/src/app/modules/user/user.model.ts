import { model, Schema } from 'mongoose';
import { IAddress, IUser } from './user.interface';
import { UserRole } from './user.constant';

const addressSchema = new Schema<IAddress>(
  {
    street: {
      type: String,
      required: true,
    },
    city: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: Number, default: null },
  },
  {
    versionKey: false,
    _id: false,
  },
);

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: [...UserRole],
      required: true,
    },
    mobile: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'third'],
      default: null,
    },
    address: addressSchema,
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const User = model<IUser>('User', userSchema);
