const {Network} = require("./network");
const {PROPOSE} = require("../../constants/ActionTypes");
const {InfoFile} = require("./classes/infoFile");

class Propose extends Network{
    constructor(incomingRequestDTO){
        super(PROPOSE, incomingRequestDTO);
    }
}
module.exports = {
    Propose
}
