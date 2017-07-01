const net = require('net');
const addresses = require("../../constants/Addresses");

const fileServer = net.createConnection({port: addresses.TCP_PORT, localPort: 8080});

module.exports = {fileServer};
