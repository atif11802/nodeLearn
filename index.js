const fs = require("fs");

//creating a new file
// fs.writeFileSync("read.txt", "welcome to my world");

// fs.writeFileSync("read.txt", "welcome to my world 1");

// fs.appendFileSync("read.txt", " welcome to my world 2");

// const buf_data = fs.readFileSync("read.txt");

// org_data = buf_data.toString();

// console.log(org_data);

fs.renameSync("read.txt", "readWrite.txt");
