import PATH_URL from "../constans/path.js";
import fs from "node:fs/promises";

const logExpensiveProducts = async () => {
  const PRICE = 500;
  try {
    const productsParse = await fs.readFile(PATH_URL);
    const products = JSON.parse(productsParse);

    const expensiveProducts = products.filter(
      (product) => product.price >= PRICE
    );
    console.table(expensiveProducts);
  } catch (error) {
    console.error(error);
  }
};

logExpensiveProducts();
