import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { Router } from "express";
import { getAllProductsController } from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get("/", ctrlWrapper(getAllProductsController));

export default productsRouter;
