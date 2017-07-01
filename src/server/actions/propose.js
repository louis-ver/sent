const {Network} = require("./network");
const {PROPOSE} = require("../../constants/ActionTypes");
const {InfoFile} = require("./classes/infoFile");

class Propose extends Network{
    constructor(files){
        super(PROPOSE, new InfoFile(files[0]));
    }
}
module.exports = {
    Propose
}