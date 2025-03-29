import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { createToken } from '../auth/auth.utils';
import config from '../../config';
import { generateHashedPassword } from '../../utils/generateHashedPasswod';
import { startSession } from 'mongoose';

const addUserIntoDB = async (payload: IUser) => {
  const { password, ...userPayload } = payload;

  const session = await startSession();

  try {
    session.startTransaction();

    //hashed password
    let hashedPassword: string | null = null;
    if (password) {
      hashedPassword = await generateHashedPassword(password);
    }

    //create user
    const result = await User.create(
      [
        {
          ...userPayload,
          password: hashedPassword,
        },
      ],
      { session },
    );

    if (!result) {
      throw new AppError(httpStatus.NOT_FOUND, 'something going wrong');
    }

    //create token and sent to the  client
    const jwtPayload = {
      email: result[0].email,
      role: result[0].role,
      id: result[0]._id,
    };

    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expires_in as string,
    );

    await session.commitTransaction();
    await session.endSession();

    return { accessToken };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, err?.message);
  }
};

const getUserFromDB = async (email: string) => {
  const result = await User.findOne({ email });

  return result;
};

const updateUserIntoDB = async (id: string, payload: Partial<IUser>) => {
  const user = await User.findById(id);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not Found');
  }

  const session = await startSession();
  try {
    session.startTransaction();

    const result = await User.findByIdAndUpdate(id, payload, {
      session,
      runValidators: true,
      new: true,
    });

    await session.commitTransaction();
    await session.endSession();

    return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(400, err?.message);
  }
};

export const UserServices = { addUserIntoDB, getUserFromDB, updateUserIntoDB };
