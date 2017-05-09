const net = require("net");
const dgram = require("dgram");
const messages = require("./messages");

// Creating TCP server
const TCPServer = net.createServer(socket => {
  socket.on("data", data => {
    console.log(data);
  });
});
TCPServer.listen(8080, () => {
  console.log("TCP server listening");
});

// Creating UDP server for JOIN, LEAVE, and PING transmissions
const UDPServer = dgram.createSocket("udp4");
UDPServer.on("message", (msg, rinfo) => {
  let message = JSON.parse(msg);
  console.log(
    `The UDP Server received: ${msg} from ${message["user"]["name"]} at ${message["user"]["ip"]}`
  );
});
UDPServer.bind(8081);
UDPServer.on("listening", () => {
  let join = JSON.stringify(
    messages.createJoinMessage({ name: "John Dole", ip: "34.65.75.234" })
  );
  let message = new Buffer(join);
  let client = dgram.createSocket("udp4");
  client.send(message, 0, message.length, 8081, "127.0.0.1", function(
    err,
    bytes
  ) {
    if (err) throw err;
    console.log("UDP message sent!");
  });
});
