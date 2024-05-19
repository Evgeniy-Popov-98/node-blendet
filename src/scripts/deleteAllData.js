import fs from "node:fs/promises";
import PATH_URL from "../constans/path.js";

const deleteAllData = async () => {
  const data = await fs.writeFile(PATH_URL, "[]");
  return data;
};
deleteAllData();
