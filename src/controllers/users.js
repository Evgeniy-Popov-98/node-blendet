import { loginUser, registerUser } from '../services/users.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);
  res.status(201).json({ name: user.name, email: user.email });
};

export const loginUserController = async (req, res) => {
  const session = await loginUser(req.body);

  const { userId, accessToken, refreshToken } = session;

  res.cookie('sessionId', userId);
  res.cookie('sessionToken', refreshToken);

  res.json({ accessToken });
};
