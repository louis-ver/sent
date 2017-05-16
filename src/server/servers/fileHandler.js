const net = require("net");
const action = require("../constants/ActionTypes");
const addresses = require("../constants/Addresses");

function startTCP() {
  // Create TCP server
  const fileServer = net.createServer(socket => {
    socket.on("data", data => {
      switch (data.type) {
        case action.PING:
        case action.ASK:
        case action.ACCEPT:
        case action.REFUSE:
        case action.SEND:
        default: // Do default
      }
    });
  });

  fileServer.listen(addresses.TCP_PORT, () => {
    console.log(`File server is listening on port ${addresses.TCP_PORT}`);
  });

}

module.exports = {
  startTCP: startTCP
};
