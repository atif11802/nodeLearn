const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
	// console.log(req.url);
	if (req.url === "/") {
		res.end("hello from the home");
	} else if (req.url === "/about") {
		res.end("hello from the about");
	} else if (req.url === "/contact") {
		res.writeHead(200, { "Content-type": "text/html" });
		res.end("hello from the contaxt 122");
	} else {
		res.writeHead(404, { "Content-type": "text/html" });
		res.end("<h1>404 error </h1>");
	}
});

server.listen(8000, "127.0.0.1", () => {
	console.log("listen on 8000");
});
