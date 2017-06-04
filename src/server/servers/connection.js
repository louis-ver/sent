const dgram = require("dgram");
const addresses = require("../../constants/Addresses")

const connectionServer = dgram.createSocket("udp4");
connectionServer.bind(addresses.UDP_PORT);

module.exports = connectionServer;