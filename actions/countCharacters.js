const fs = require("fs");
const path = require("path");

const countCharacters = (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const characterCount = fileContent.length;
    const filename = path.basename(filePath);
    console.log(characterCount, filename);
  } catch (error) {
    console.error("Error occurred:", error);
    return null;
  }
};
module.exports = countCharacters;
