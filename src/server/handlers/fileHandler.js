const { fileServer } = require("../servers/fileServer");
const {ipv6Toipv4} = require("../utils/ipConverter");

class FileHandler {
    constructor() {
        this.fileHandlers = [];
    }

    addFileHandler(handler) {
        this.dataHandlers.push(handler);
    }
}

const fileHandler = new FileHandler();

fileServer.on("connection", (socket) => {
    socket.on("data", (data) => fileHandler.fileHandlers.forEach(handler => handler(ipv6Toipv4(socket.remoteAddress), data)));
});

// fileServer.listen(addresses.TCP_PORT);

module.exports = {fileHandler};
