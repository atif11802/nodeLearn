//npm init at first to get package.json

const chalk = require("chalk");
//npm i chalk to color in termnal
// console.log(chalk.white.underline.inverse("Hello world!"));

var validator = require("validator");

const res = validator.isEmail("ratul@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
