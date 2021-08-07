const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
	// fs.readFile("input.txt", (err, data) => {
	// 	res.end(data.toString());
	// });

	//streaming
	// const rstream = fs.createReadStream("input.txt");

	// rstream.on("data", (chunkdata) => {
	// 	res.write(chunkdata);
	// });
	// rstream.on("end", () => {
	// 	res.end();
	// });
	// rstream.on("error", (err) => {
	// 	console.log(err);
	// 	res.end;
	// });

	const rstream = fs.createReadStream("input.txt");

	rstream.pipe(res);
});

server.listen(9000, "127.0.0.1");
