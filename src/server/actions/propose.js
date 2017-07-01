const {Network} = require("./network");
const {PROPOSE} = require("../../constants/ActionTypes");
const {InfoFile} = require("./classes/infoFile");

class Propose extends Network{
    constructor(file){
        super(PROPOSE, new InfoFile(file));
    }
}
module.exports = {
    Propose
}