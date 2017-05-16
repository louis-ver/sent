const dgram = require("dgram");
const action = require("../../constants/ActionTypes");
const actionCreator = require("../../actions/index");
const addresses = require("../../constants/Addresses");
const connectionService = require("../services/connectionService");
const broadcaster = require("../utils/broadcaster");

function startUDP() {
  const connectionServer = dgram.createSocket("udp4");

  // When server first launches, announce to everyone
  connectionServer.on("listening", () => {
    let join = JSON.stringify(
      actionCreator.addUserFromJoin({ name: "John Dole", ip: "34.65.75.234" })
    );
    broadcaster.broadcast(join);
  });

  // Connection Server receives a JOIN, PING, or LEAVE message
  connectionServer.on("message", (msg, rinfo) => {
    let message = JSON.parse(msg);
    switch (message.type) {
      case action.JOIN:
        connectionService.welcome(rinfo.address);
      case action.PING:
        connectionService.addUser(message, rinfo.address);
        // Broadcast PING message to everyone
        console.log("Received JOIN message");
      // If user not in online user list, add to list
      case action.LEAVE:
      // Remove user from online user list
      default:
      // Do default
    }
  });

  connectionServer.bind(addresses.UDP_PORT);
}

module.exports = {
  startUDP: startUDP
};
