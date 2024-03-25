#!/usr/bin/env node
const { program } = require("commander");
const fs = require("fs");
const countBytes = require("./actions/countBytes");
const countLines = require("./actions/countLines");
const countWords = require("./actions/countWords");
const countCharacters = require("./actions/countCharacters");
const displayAll = require("./actions/displayAll");
const { argv, argv0 } = require("process");

const data = (name) => {
  console.log(`Hello, ${name}`);
};

program

  .version("1.0.0")
  .description("Outputs the number of bytes in a file")
  .option("-c, --count <name>", "Outputs the number of bytes in a file")
  .option("-l, --lines <lines>", "Outputs the number of lines in a file")
  .option("-w, --words <words>", "Outputs the number of words in a file")
  .option(
    "-m, --characters <characters>",
    "Outputs the number of characters in a file"
  )

  .parse(process.argv);

const options = program.opts();
if (options) {
  if (options.count) {
    countBytes(options.count);
  } else if (options.lines) {
    countLines(options.lines);
  } else if (options.words) {
    countWords(options.words);
  } else if (options.characters) {
    countCharacters(options.characters);
  } else {
    displayAll(argv[argv.length - 1]);
  }
}
