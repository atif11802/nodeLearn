const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
	res.send(" <h1> hellooo atif</h1> ");
});

app.get("/about", (req, res) => {
	res.send(" <h1> hellooo about</h1> ");
});
app.get("/contact", (req, res) => {
	res.send(" <h1> hellooo contact</h1> ");
});
app.get("/temp", (req, res) => {
	res.send(" <h1> hellooo temperature</h1> ");
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
