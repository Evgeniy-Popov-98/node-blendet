import { Router } from "express";
import { createUserSchema } from "../validation/createUserSchema.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { registerUserController } from "../controllers/users.js";
import { valideBody } from "../utils/validateBody.js";

const router = Router();

router.post(
  "/register",
  valideBody(createUserSchema),
  ctrlWrapper(registerUserController)
);

export default router;
