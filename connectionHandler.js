const dgram = require("dgram");
const action = require("./constants/ActionTypes");
const actionCreator = require("./messages");

const BROADCAST_IP = "255.255.255.255";
const UDP_PORT = 8081;

const connectionServer = dgram.createSocket("udp4");

// When server first launches, announce to everyone
connectionServer.on("listening", () => {
  let join = JSON.stringify(
    actionCreator.addJoinMessage({ name: "John Dole", ip: "34.65.75.234" })
  );
  broadcastMessage(join);
});

// Connection Server receives a JOIN, PING, or LEAVE message
connectionServer.on("message", (msg, rinfo) => {
  let message = JSON.parse(msg);
  switch (message.type) {
    case action.JOIN:
      // Broadcast PING message to everyone
      console.log("Received JOIN message");
    case action.PING:
    // If user not in online user list, add to list
    case action.LEAVE:
    // Remove user from online user list
    default:
    // Do default
  }
});

connectionServer.bind(UDP_PORT);

// Helper functions

/* Sends msg to all hosts on the network */
function broadcastMessage(msg) {
  let message = new Buffer(msg);
  var datagram = dgram.createSocket("udp4");
  datagram.bind(() => {
    datagram.setBroadcast(true);
  });
  datagram.send(
    message,
    0,
    message.length,
    UDP_PORT,
    BROADCAST_IP,
    (err, bytes) => {
      if (err) throw err;
      // Do what you have to do on successful broadcast...(nothing?)
      console.log(`${JSON.parse(msg).type} successfully sent to all hosts`);
    }
  );
}
