import { Router } from "express";
import { checkToken } from "../middlewares/checkToken.js";
import { contactController } from "../controllers/contact.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get('/', checkToken, ctrlWrapper(contactController));
export default router;