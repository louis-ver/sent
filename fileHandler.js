const net = require("net");
const messages = require("./messages");

TCP_PORT = 8080;

// Create TCP server
const fileServer = net.createServer(socket => {
  socket.on("data", data => {
    switch (data.type) {
      case messages.ASK:
      case messages.ACCEPT:
      case messages.REFUSE:
      case messages.SEND:
      default: // Do default
    }
  });
});

fileServer.listen(TCP_PORT, () => {
  console.log(`File server is listening on port ${TCP_PORT}`);
});
