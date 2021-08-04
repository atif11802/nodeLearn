const fs = require("fs");

//creating folder
// fs.mkdir("Thapa", (err) => {
// 	console.log(err);
// });

//creating file name
// fs.writeFile("Thapa/bio.txt", "hwllo my name is ratul", (err) => {
// 	console.log(err);
// });

//append data in file
// fs.appendFile("Thapa/bio.txt", " appending here", (err) => {
// 	console.log(err);
// });

//read data without buffer data
// fs.readFile("Thapa/bio.txt", "utf-8", (error, data) => {
// 	console.log(data);
// });

//rename the file
fs.rename("Thapa/bio.txt", "Thapa/mybio.txt", (err) => {
	console.log(err);
});
