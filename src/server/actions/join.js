const {Network} = require("./network");

class Join extends Network{
    constructor(me){
        super("JOIN", me);
    }
}

module.exports = {
    Join : Join
}