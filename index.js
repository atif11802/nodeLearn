const fs = require("fs");

//make folder
// const folderName = "Thapa";

// try {
// 	if (!fs.existsSync(folderName)) {
// 		fs.mkdirSync(folderName);
// 	}
// } catch (err) {
// 	console.error("file already exist");
// }

// making file and data
// fs.writeFileSync(
// 	"./Thapa/bio.txt",
// 	"hello this is ratul,watching thapa technical"
// );

//append data to the file
// fs.appendFileSync("./Thapa/bio.txt", " so this is 6th video of the playlist");

//read data without buffer data
// const data = fs.readFileSync("./Thapa/bio.txt", "utf8");
// console.log(data);

//rename fila name
// fs.renameSync("Thapa/bio.txt", "Thapa/myBio.txt");

//delete a file
// fs.unlinkSync("Thapa/myBio.txt");

//delete a folder
fs.rmdirSync("Thapa");
