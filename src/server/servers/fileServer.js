const net = require('net');
const addresses = require("../../constants/Addresses");

const fileServer = net.createConnection({port: addresses.TCP_PORT});

fileServer.on("data", (data) => {
    
})

module.exports = {fileServer};
