const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));

hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.get("/weather", (req, res) => {
	res.render("weather");
});

app.get("*", (req, res) => {
	res.render("404", {
		errorMessage: "	404 error page",
	});
});

app.listen(port, () => {
	console.log(`listenning to port ${port}`);
});
