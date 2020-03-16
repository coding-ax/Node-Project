var events = require("events");
var eventEmitter = new events.EventEmitter();

function listen1() {
  console.log("listen1 start ");
}

function listen2() {
  console.log("listen2 start ");
}

eventEmitter.on("connection", listen1);

eventEmitter.addListener("connection", listen2);

var len = eventEmitter.listenerCount();

console.log(len);

eventEmitter.emit("connection");

// eventEmitter.removeListener(listen2);

eventEmitter.emit("connection");

len = eventEmitter.listenerCount();

console.log(len);
