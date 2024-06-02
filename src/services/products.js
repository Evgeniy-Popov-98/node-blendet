import Product from "../db/modals/product.js";

export const getAllProducts = () => Product.find();
