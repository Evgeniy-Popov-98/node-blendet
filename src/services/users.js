import bcrypt from 'bcryptjs';
import createHttpError from 'http-errors';
import { User } from '../db/modals/user.js';
import { Session } from '../db/modals/session.js';
import crypto from 'crypto';

export const registerUser = async (payload) => {
  const user = await User.findOne({ email: payload.email });

  if (user) {
    throw createHttpError(409, 'User with this email already exists');
  }
  const hashedPassword = await bcrypt.hash(payload.password, 10);

  return await User.create({ ...payload, password: hashedPassword });
};

export const loginUser = async (payload) => {
  const { email, password } = payload;

  const user = await User.findOne({ email });

  if (!user) {
    throw createHttpError(401, 'Email/password is incorrect.');
  }

  const isCorrectPassword = await bcrypt.compare(password, user.password);

  if (!isCorrectPassword) {
    throw createHttpError(401, 'Email/password is incorrect.');
  }

  await Session.findOneAndDelete({ userId: user._id });
  const session = {
    userId: user._id,
    accessToken: crypto.randomBytes(40).toString('base64'),
    refreshToken: crypto.randomBytes(40).toString('base64'),
    accessTokenValidUntil: new Date() + 15 * 60 * 1000,
    refreshTokenValidUntil: new Date() + 14 * 24 * 60 * 60 * 1000,
  };

  return await Session.create(session);
};
