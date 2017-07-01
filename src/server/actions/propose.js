const {Network} = require("./network");
const {PROPOSE} = require("../../constants/ActionTypes");

class Propose extends Network{
    constructor(file){
        super(PROPOSE, file);
    }
}
module.exports = {
    Propose
}