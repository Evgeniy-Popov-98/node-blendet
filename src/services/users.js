import { User } from '../db/models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../utils/env.js';

export const findUserByEmail = (email) => User.findOne({ email });

export const updateUserWithAToken = (userId) => {
  const token = jwt.sign({ id: userId }, env('JWT_SECRET'), {
    expiresIn: '30m',
  });
  return User.findByIdAndUpdate(userId, { token });
};

export const createUser = async (userData) => {
  const { name, email, password } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ name, email, password: hashedPassword });
  return updateUserWithAToken(newUser._id);
};
