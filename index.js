const express = require("express");

const app = express();
const port = 8000;
const path = require("path");
const hbs = require("hbs");

//to set the view engine
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "templates/views"));

hbs.registerPartials(path.join(__dirname, "templates/partials"));
const staticPath = path.join(__dirname, "public");

app.use(express.static(staticPath));
// app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
	res.render("index", { name: "atif aslam ratul" });
});

// app.get("/", (req, res) => {
// 	res.send("hello");
// });

app.get("/about", (req, res) => {
	res.render("about", { name: "atif  ratul" });
});

///if you go about page then search more and that page doesnt exist than show something so /about/*

app.get("/about/*", (req, res) => {
	res.render("404", {
		error: "oops!! this about page couldn't be found",
	});
});

app.get("*", (req, res) => {
	res.render("404", { error: "oops!! page didnt found" });
});

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
