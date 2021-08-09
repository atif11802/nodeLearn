const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
// console.log(__dirname);

console.log(path.join(__dirname, "/public"));

const staticPath = path.join(__dirname, "/public");
//built in middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
	res.write(" <h1> hellooo atif</h1>");
	res.write(" <h1> hellooo 1 atif</h1>");
	res.write(" <h1> hellooo  2 atif</h1>");
	res.send();
});

app.get("/about", (req, res) => {
	res.send(" <h1> hellooo about</h1> ");
});
app.get("/contact", (req, res) => {
	res.send(" <h1> hellooo contact</h1> ");
});
// app.get("/temp", (req, res) => {
// 	res.send([
// 		{
// 			name: "atif",
// 			id: 1,
// 			nationality: "bangladeshi",
// 		},
// 		{
// 			name: "aslam",
// 			id: 1,
// 			nationality: "bangladeshi",
// 		},
// 	]);
// });

// app.get("/temp", (req, res) => {
// 	res.json([
// 		{
// 			name: "atif",
// 			id: 1,
// 			nationality: "bangladeshi",
// 		},
// 		{
// 			name: "aslam",
// 			id: 1,
// 			nationality: "bangladeshi",
// 		},
// 	]);
// });

app.listen(port, () => console.log(`app listening on port ${port}!`));
