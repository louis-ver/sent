const { fileServer } = require("../servers/fileServer");
const {ipv6Toipv4} = require("../utils/ipConverter");

class FileHandler {
    constructor() {
        this.messageHandlers = [];
    }

    addMessageHandler(handler) {
        this.messageHandlers.push(handler);
    }
}

const fileHandler = new FileHandler();

fileServer.on("connection", (socket) => {
    socket.on("data", (data) => {
      fileHandler.messageHandlers.forEach(handler => handler(ipv6Toipv4(socket.remoteAddress), JSON.parse(data.toString())));
    });
});

// fileServer.listen(addresses.TCP_PORT);

module.exports = {fileHandler};
