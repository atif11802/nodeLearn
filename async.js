const fs = require("fs");

//sync
// const data = fs.readFileSync("read.txt", "utf-8");

// console.log(data);

// console.log("after the data");

fs.readFile("read.txt", "utf-8", (err, data) => {
	console.log(data);
});
console.log("after the data");
