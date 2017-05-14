var net = require("net");
var fs = require("fs");
var dgram = require("dgram");

var HOST = "127.0.0.1";
var PORT = 8080;

var askObject = {
  type: "ASK",
  sender: {
    name: "John Appleseed",
    ip: "75.34.652.12"
  },
  receivers: [
    {
      name: "Bob Dole",
      ip: "75.34.652.13"
    }
  ],
  file: {
    name: "todo2017-05-05.txt",
    length: 75,
    type: "text/plain",
    hash: "ff893030ffa59fd0c328118df5f8b5c2"
  },
  time: "2017-05-05 14:33:32"
};
var joinObject = {
  type: "JOIN",
  user: {
    name: "John Appleseed",
    ip: "75.34.652.12"
  }
};
var ask = JSON.stringify(askObject);
var message = new Buffer(JSON.stringify(joinObject));

var client = new net.Socket();
client.connect(PORT, HOST, () => {
  client.write(ask);
});
client.on("data", function(data) {
  console.log(`DATA: ${data}`);
  client.destroy;
});

client.on("close", () => {
  console.log("Connection Closed");
});

var udpClient = dgram.createSocket("udp4");
udpClient.send(message, 0, message.length, 8081, HOST, function(err, bytes) {
  if (err) throw err;
  console.log("UDP message sent to " + HOST + ":" + 8081);
});
