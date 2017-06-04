const dgram = require("dgram");
const addresses = require("../../constants/Addresses");

/* Sends msg to all hosts on the network */
// TODO: Function needs to be rewritten as async with callback
function broadcast(msg) {
  let message = new Buffer(JSON.stringify(msg));
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
    }
  );
}

module.exports = {
  broadcast
};
