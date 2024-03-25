const fs = require("fs");
const path = require("path");
const { exit } = require("process");
const countBytes = (filePath) => {
  try {
    const stats = fs.statSync(filePath);

    if (!stats.isFile) {
      console.error("Specified path is not a file.");
      return null;
    }

    const fileSizeInBytes = stats.size;

    const filename = path.basename(filePath);

    console.log(fileSizeInBytes, `${filename}`);
  } catch (error) {
    console.error("Error occurred:", error);
    return null;
  }
};

module.exports = countBytes;
