const {Network} = require("./network");
const {PING} = require("../../constants/ActionTypes");

class Ping extends Network{
    constructor(me){
        super(PING, me);
    }
}

module.exports = {
    Ping
}