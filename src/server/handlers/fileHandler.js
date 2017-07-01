const { fileServer } = require("../servers/fileServer");

class FileHandler{
    constructor(){
        this.dataHandlers = [];
    }

    addListeningHandler(handler){
        this.dataHandlers.push(handler);
    }

}

const fileHandler = new FileHandler();

fileServer.on("data", (data) => {
    debugger;
    return fileHandler.dataHandlers.forEach(handler => handler(data));
});

module.exports = {fileHandler};
