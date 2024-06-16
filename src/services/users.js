import bcrypt from "bcryptjs";
import createHttpError from "http-errors";
import { User } from "../db/modals/user.js";

export const registerUser = async (payload) => {
  const user = await User.findOne({ email: payload.email });

  if (user) {
    throw createHttpError(409, "User with this email already exists");
  }
  const hashedPassword = await bcrypt.hash(payload.password, 10);

  return await User.create({ ...payload, password: hashedPassword });
};
