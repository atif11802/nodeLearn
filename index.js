const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "templates/views"));

hbs.registerPartials(path.join(__dirname, "templates/partials"));
app.get("/", (req, res) => {
	res.render("index", { name: "ratul" });
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.listen(8000, () => {
	console.log("listening on");
});
