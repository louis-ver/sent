const {connectionServer} = require("../servers/connectionServer");

class ConnectionHandler{
    constructor(){
        this.listeningHandlers = [];
        this.messageHandlers = [];
        this.closeHandlers = [];
    }

    addListeningHandler(handler){
        this.listeningHandlers.push(handler);
    }

    addMessageHandler(handler){
        this.messageHandlers.push(handler);
    }

    addCloseHandler(handler){
        this.closeHandlers.push(handler);
    }
}

const connectionHandler = new ConnectionHandler();

connectionServer.on("listening", () => {
    return connectionHandler.listeningHandlers.forEach(handler => handler());
});

connectionServer.on("message", (msg, rinfo) => {
    return connectionHandler.messageHandlers.forEach(handler => handler(msg, rinfo));
})

connectionServer.on("close", () => {
    return connectionHandler.closeHandlers.forEach(handler => handler());
})

module.exports = {connectionHandler};
