const {Network} = require("./network");

class Join extends Network{
    constructor(me){
        super("JOIN");
        this.user = me;
    }
}

module.exports = {
    Join : Join
}