const { fileServer } = require("../servers/fileServer");
const addresses = require("../../constants/Addresses");

class FileHandler{
    constructor(){
        this.dataHandlers = [];
    }

    addListeningHandler(handler){
        this.dataHandlers.push(handler);
    }

}

const fileHandler = new FileHandler();


fileServer.on("connection", (socket) => {
    debugger;
    // return fileHandler.dataHandlers.forEach(handler => handler(data));
});

// fileServer.listen(addresses.TCP_PORT);

module.exports = {fileHandler};
