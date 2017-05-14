const connectionHandler = require('./servers/connectionHandler');
const fileHandler = require('./servers/fileHandler');

const init = () => {
    connectionHandler.startUDP();
    fileHandler.startTCP();
};

module.exports = {
    init: init
};