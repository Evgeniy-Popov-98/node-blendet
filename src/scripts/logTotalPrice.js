import fs from "node:fs/promises";
import PATH_URL from "../constans/path.js";
import chalk from "chalk";

const logTotalPrice = async () => {
  try {
    const productsParse = await fs.readFile(PATH_URL);
    const products = JSON.parse(productsParse);

    const totalPrice = products.reduce((acc, product) => {
      return acc + Number(product.price);
    }, 0);
    console.log(chalk.green(`Total price is: ${totalPrice}`));
  } catch (error) {
    console.error(error);
  }
};
logTotalPrice();
