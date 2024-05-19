import fs from "node:fs/promises";
import PATH_URL from "../constans/path.js";

const removeRandomProduct = async () => {
  try {
    const data = await fs.readFile(PATH_URL, "utf-8");
    const parsedData = JSON.parse(data);
    const arrayAfterRandomOperation = parsedData.reduce((acc, product) => {
      if (Math.random() >= 0.5) {
        acc.push(product);
      }
      return acc;
    }, []);
    await fs.writeFile(PATH_URL, JSON.stringify(arrayAfterRandomOperation, null, 2));
  } catch (error) {
    console.error(error);
  }
};

removeRandomProduct();
