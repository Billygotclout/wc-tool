const fs = require("fs");
const path = require("path");
const countWords = (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const words = fileContent.split(/\s+/);
    const wordCount = words.length;
    const filename = path.basename(filePath);
    console.log(wordCount, `${filename}`);
  } catch (error) {
    console.error("Error occurred:", error);
    return null;
  }
};
module.exports = countWords;
