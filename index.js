const http = require("http");
const fs = require("fs");
var path = require("path");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceval = (tempval, orgval) => {
	let temperature = tempval.replace("{%tempval%}", orgval.main.temp);
	temperature = temperature.replace("TempMin", orgval.main.temp_min);
	temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max);
	temperature = temperature.replace("{%location%}", orgval.name);
	temperature = temperature.replace("{%country%}", orgval.sys.country);

	return temperature;
};

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		// res.end(homeFile);
		const data = requests(
			"https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=51b8bd06158ab1f28c055f67c04118fa"
		)
			.on("data", (chunk) => {
				const objData = JSON.parse(chunk);
				const arrData = [objData];
				const realTimeData = arrData
					.map((val) => replaceval(homeFile, val))
					.join("");

				res.write(realTimeData);
			})
			.on("end", (err) => {
				if (err)
					return console.log(
						"connection closed due to errors",
						err
					);
				res.end();
			});
		// data.pipe(res);
	}
});

server.listen(8000, "127.0.0.1");
