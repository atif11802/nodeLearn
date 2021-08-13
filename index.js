const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
var requests = require("requests");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "templates/views"));

hbs.registerPartials(path.join(__dirname, "templates/partials"));
app.get("/", (req, res) => {
	res.render("index", { name: "ratul" });
});

app.get("/about", (req, res) => {
	// res.render("about");
	requests(
		`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=51b8bd06158ab1f28c055f67c04118fa`
	)
		.on("data", (chunk) => {
			const objData = JSON.parse(chunk);
			const arrData = [objData];
			// const realTimeData = arrData
			// 	.map((val) => replaceval(homeFile, val))
			// 	.join("");

			// res.write(realTimeData);
			console.log(arrData[0].main.temp);
			res.send(
				`temperature is  ${arrData[0].main.temp} and city is ${arrData[0].name}`
			);
		})
		.on("end", (err) => {
			if (err)
				return console.log(
					"connection closed due to errors",
					err
				);
			res.end();
		});
});

app.get("/contact", (req, res) => {
	res.render("contact", { name: req.query.name, age: req.query.age });
});

app.listen(8000, () => {
	console.log("listening on");
});
