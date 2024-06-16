import { Router } from "express";
import { createUserSchema } from "../validation/createUserSchema";
import { ctrlWrapper } from "../utils/ctrlWrapper";
import { registerUserCotroller } from "../controllers/users";

const router = Router();

router.post(
  "/register",
  valideBody(createUserSchema),
  ctrlWrapper(registerUserCotroller)
);

export default router;
