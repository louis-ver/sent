const {Network} = require("./network");

class Ping extends Network{
    constructor(me){
        super("PING", me);
    }
}

module.exports = {
    Ping : Ping
}