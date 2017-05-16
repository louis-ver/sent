const dgram = require("dgram");
const addresses = require("../constants/Addresses");

/* Sends msg to all hosts on the network */
function broadcast(msg) {
  let message = new Buffer(msg);
  var datagram = dgram.createSocket("udp4");
  datagram.bind(() => {
    datagram.setBroadcast(true);
  });
  datagram.send(
    message,
    0,
    message.length,
    addresses.UDP_PORT,
    addresses.BROADCAST_IP,
    (err, bytes) => {
      if (err) throw err;
      // Do what you have to do on successful broadcast...(nothing?)
      console.log(`${JSON.parse(msg).type} successfully sent to all hosts`);
    }
  );
}

module.exports = {
    broadcast : broadcast
}