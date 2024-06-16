import { Router } from 'express';
import { createUserSchema } from '../validation/createUserSchema.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUserController,
  registerUserController,
} from '../controllers/users.js';
import { valideBody } from '../utils/validateBody.js';
import { loginUserSchema } from '../validation/loginUserSchema.js';

const router = Router();

router.post(
  '/register',
  valideBody(createUserSchema),
  ctrlWrapper(registerUserController)
);

router.post(
  '/login',
  valideBody(loginUserSchema),
  ctrlWrapper(loginUserController)
);

export default router;
