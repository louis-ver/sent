const connectionHandler = require('./servers/connectionHandler');
const fileHandler = require('./servers/fileHandler');

function init(){
    connectionHandler.startUDP();
    fileHandler.startTCP();
};

module.exports = {
    init: init
};