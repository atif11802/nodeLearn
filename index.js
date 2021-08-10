const express = require("express");

const app = express();
const port = 8000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen(port, () => {
	console.log(`listening to port ${port}`);
});
