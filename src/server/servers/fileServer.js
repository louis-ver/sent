const net = require('net');
const addresses = require("../../constants/Addresses");

const fileServer = net.createConnection({port: addresses.TCP_PORT});

module.exports = {fileServer};
