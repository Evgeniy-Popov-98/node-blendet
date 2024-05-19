import PATH_URL from "../constans/path.js";
import fs from "node:fs/promises";
import { createFakeProduct } from "../utils/createFakeProduct.js";

const createProducts = async (amount) => {
  try {
    const dataPoducts = await fs.readFile(PATH_URL);

    const data = JSON.parse(dataPoducts);

    for (let i = 0; i < amount; i += 1) {
      data.push(createFakeProduct());
    }

    const newData = JSON.stringify(data, null, 2);

    await fs.writeFile(PATH_URL, newData);
    console.log(`Products created success`);
  } catch (error) {
    console.log(error);
  }
};

createProducts(3);
