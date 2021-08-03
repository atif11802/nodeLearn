//async file system operations

const fs = require("fs");

//add data
// fs.writeFile("read.txt", "7th video of playlist", (err) => {
// 	console.log("file is created");
// 	console.log(err);
// });

//append file

// fs.appendFile("read.txt", " appending here", (err) => {
// 	console.log(err);
// });

//read file in nodejs
fs.readFile("read.txt", "utf-8", (err, data) => {
	if (err) throw err;
	console.log(data);
});
