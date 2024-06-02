import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { Router } from "express";
import { getAllProductsController, postProductsController, getProductByIdController } from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get("/", ctrlWrapper(getAllProductsController));

productsRouter.post("/", ctrlWrapper(postProductsController));

productsRouter.get("/:productId", ctrlWrapper(getProductByIdController));

export default productsRouter;
