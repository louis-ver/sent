const {Network} = require("./network");
const {PROPOSE} = require("../../constants/ActionTypes");

class Propose extends Network{
    constructor(incomingRequestDTO){
        super(PROPOSE, incomingRequestDTO);
    }
}
module.exports = {
    Propose
}
