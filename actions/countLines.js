const fs = require("fs");
const path = require("path");
const { exit } = require("process");

const countLines = (filePath) => {
  try {
    const lines = fs.readFileSync(filePath, "utf-8").split("\n");

    const lineCount = lines.length;

    const filename = path.basename(filePath);

    console.log(lineCount, `${filename}`);
  } catch (error) {
    console.error("Error occurred:", error);

    exit(0);
  }
};

module.exports = countLines;
