const fs = require("fs");

const bioData = {
	name: "atif",
	age: 22,
	nationality: "bangladeshi",
};

// // console.log(bioData.nationality);
// const jsonData = JSON.stringify(bioData);

// console.log(jsonData);

// console.log(JSON.parse(jsonData));

// 1 convert to jsonData ...
//2 how to add this another file
//3 read file
//4 conver json to obj
//consolelog

const jsonData = JSON.stringify(bioData);

// fs.writeFile("json1.json", jsonData, (err) => {
// 	console.log(err);
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
	const objData = JSON.parse(data);
	console.log(data, objData);
});
