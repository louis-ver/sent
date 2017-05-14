const net = require("net");
const action = require("../constants/ActionTypes");

TCP_PORT = 8080;

function startTCP(){
    // Create TCP server
    const fileServer = net.createServer(socket => {
      socket.on("data", data => {
        switch (data.type) {
          case action.ASK:
          case action.ACCEPT:
          case action.REFUSE:
          case action.SEND:
          default: // Do default
        }
      });
    });

    fileServer.listen(TCP_PORT, () => {
      console.log(`File server is listening on port ${TCP_PORT}`);
    });
}

module.exports = {
    startTCP : startTCP
}