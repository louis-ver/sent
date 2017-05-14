const dgram = require("dgram");
const action = require("./messages");

BROADCAST_IP = "255.255.255.255";
UDP_PORT = 8081;

const connectionServer = dgram.createSocket("udp4");

// When server first launches, announce to everyone
connectionServer.on("listening", () => {
  let join = JSON.stringify(
    action.addJoinMessage({ name: "John Dole", ip: "34.65.75.234" })
  );
  let joinSignal = new Buffer(join);
  var joinDatagram = dgram.createSocket("udp4");
  joinDatagram.bind(() => {
    joinDatagram.setBroadcast(true);
  });
  joinDatagram.send(
    joinSignal,
    0,
    joinSignal.length,
    UDP_PORT,
    BROADCAST_IP,
    (err, bytes) => {
      if (err) throw err;
      console.log("JOIN signal successfully sent to all hosts");
    }
  );
});

// Connection Server receives a JOIN, PING, or LEAVE message
connectionServer.on("message", (msg, rinfo) => {
  let message = JSON.parse(msg);
  switch (message.type) {
    case action.JOIN:
    // Broadcast PING message to everyone
    case action.PING:
    // If user not in online user list, add to list
    case action.LEAVE:
    // Remove user from online user list
    default:
    // Do default
  }
});

connectionServer.bind(UDP_PORT);
