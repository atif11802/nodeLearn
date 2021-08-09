const express = require("express");
var app = express();

// get-read post-create put-update delete-delete

app.get("/", (req, res) => {
	res.send("hello this is express js");
});

app.get("/about", (req, res) => {
	res.send("hello this is about");
});

app.listen(8000, () => {
	console.log("listenning to port 8000");
});
