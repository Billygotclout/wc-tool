const fs = require("fs");
const path = require("path");
const displayAll = (filePath) => {
  try {
    const stats = fs.statSync(filePath);
    const getLines = fs.readFileSync(filePath, "utf-8").split("\n");
    const getWords = fs.readFileSync(filePath, "utf-8").split(/\s+/);

    const bytes = stats.size;
    const lines = getLines.length;
    const words = getWords.length;
    const filename = path.basename(filePath);
    console.log(words, lines, bytes, filename);
  } catch (error) {
    console.error("Error occurred:", error);
    return null;
  }
};

module.exports = displayAll;
