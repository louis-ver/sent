const connectionServer = require("../servers/connection");

class ConnectionService{
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

const connectionService = new ConnectionService();

connectionServer.on("listening", () => {
    return connectionService.listeningHandlers.forEach(handler => handler());
});

connectionServer.on("message", (msg, rinfo) => {
    return connectionService.messageHandlers.forEach(handler => handler(msg, rinfo));
})

module.exports = {connectionService};
