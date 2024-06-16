import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { Router } from "express";
import {
  getAllProductsController,
  postProductsController,
  getProductByIdController,
  deleteProductByIdController,
} from "../controllers/products.js";
import { valideBody } from "../utils/validateBody.js";
import { createProductsSchema } from "../validation/createProductsSchema.js";

const productsRouter = Router();

productsRouter.get("/", ctrlWrapper(getAllProductsController));

productsRouter.post(
  "/",
  valideBody(createProductsSchema),
  ctrlWrapper(postProductsController)
);

productsRouter.get("/:productId", ctrlWrapper(getProductByIdController));

productsRouter.delete("/:productId", ctrlWrapper(deleteProductByIdController));

export default productsRouter;
