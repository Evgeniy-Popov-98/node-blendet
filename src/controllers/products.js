import { getAllProducts } from "../services/products.js";
export const getAllProductsController = async (req, res, next) => {
  const products = await getAllProducts();
  res.json(products);
};
