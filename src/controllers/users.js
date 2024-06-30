import createHttpError from "http-errors";
import { createUser, findUserByEmail } from "../services/users.js";

export const registerUserController = async (req, res, next) => {
  const isExisting = await findUserByEmail(req.body.email);

  if (isExisting) {
    throw createHttpError(409, "User with such email already exists.");
  }

  const user = await createUser(req.body);

  res.status(201).json({
    user: { name: user.name, email: user.email },
    token: user.token,
  });
};
