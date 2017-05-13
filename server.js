const net = require("net");
const dgram = require("dgram");
const messages = require("./messages");
const User = require("./User");

BROADCAST_IP = "255.255.255.255";
TCP_PORT = 8080;
UDP_PORT = 8081;

// Creating TCP server
const TCPServer = net.createServer(socket => {
  socket.on("data", data => {
    console.log(data);
  });
});
TCPServer.listen(TCP_PORT, () => {
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
UDPServer.bind(UDP_PORT);
UDPServer.on("listening", () => {
  let join = JSON.stringify(
    messages.addJoinMessage({ name: "John Dole", ip: "34.65.75.234" })
  );
  let message = new Buffer(join);
  var joinDatagram = dgram.createSocket("udp4");
  joinDatagram.bind(() => {
    joinDatagram.setBroadcast(true);
  });
  joinDatagram.send(
    message,
    0,
    message.length,
    UDP_PORT,
    "255.255.255.255",
    function(err, bytes) {
      if (err) throw err;
      console.log("UDP message sent!");
    }
  );
});

let oneUser = new User("Louis-Olivier");
console.log(oneUser);
