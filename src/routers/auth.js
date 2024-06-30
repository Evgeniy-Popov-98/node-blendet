import { Router } from 'express';

import { createUserSchema } from '../validation/createUserSchema.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { valideBody } from '../utils/validateBody.js';
import { loginUserSchema } from '../validation/loginUserSchema.js';
import { registerUserController } from '../controllers/users.js';

const router = Router();

router.post(
  '/signup',
  valideBody(createUserSchema),
  ctrlWrapper(registerUserController)
);

router.post('/login');

router.post('/logout');

router.get('/current');

export default router;
