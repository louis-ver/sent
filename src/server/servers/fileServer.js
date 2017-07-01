const net = require('net');
const addresses = require("../../constants/Addresses");


const fileServer = net.createServer(socket => {
    debugger;
});
fileServer.listen(addresses.TCP_PORT);

module.exports = {fileServer};
