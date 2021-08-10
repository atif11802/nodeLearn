const express = require("express");

const app = express();
const port = 8000;
const path = require("path");

//to set the view engine
app.set("view engine", "hbs");

const staticPath = path.join(__dirname, "public");

app.use(express.static(staticPath));
// app.use(express.static(path.join(__dirname, "/public")));

app.get("/about", (req, res) => {
	res.render("index", { name: "atif aslam" });
});

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
