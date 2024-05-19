import { readFile } from "node:fs";
import fs from "node:fs/promises";
import PATH_URL from "../constans/path.js";
import { log } from "node:console";
import chalk from "chalk";

const logProducts = async () => {
  try {
    const data = await fs.readFile(PATH_URL);
    const dataParse = JSON.parse(data);
    if (dataParse.length === 0) {
      console.log(chalk.red("Array is empty"));
      return;
    }

    console.table(dataParse);
  } catch (error) {
    console.error(error);
  }
};

logProducts();
