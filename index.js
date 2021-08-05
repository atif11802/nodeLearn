const http = require("http");

const server = http.createServer((req, res) => {
	res.end("hello from the other sides");
});

server.listen(8000, "127.0.0.1", () => {
	console.log("listen on 9000");
});
