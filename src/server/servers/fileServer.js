const net = require('net');
const addresses = require("../../constants/Addresses");
const ip = require("ip");


const fileServer = net.createConnection({port: addresses.TCP_PORT, localPort: 8080, host: ip.address(), localAddress: ip.address()});

module.exports = {fileServer};
