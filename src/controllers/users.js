import { registerUser } from "../services/users.js";

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);
  res.status(201).json({ name: user.name, email: user.email });
};
