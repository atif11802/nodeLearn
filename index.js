const EventEmitter = require("events");

const event = new EventEmitter();

event.on("checkpage", (sc, msg) => {
	console.log(`status code is ${sc} and the page msg id ${msg}`);
});

event.emit("checkpage", 200, "ok");
