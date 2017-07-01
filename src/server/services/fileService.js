const net = require("net");
const OutgoingRequest = require("../../classes/outgoingRequest");
const state = require("../../reducers/state");
const Addresses = require("../../constants/Addresses");
const { Propose } = require("../actions/propose");
const { fileHandler } = require("../handlers/fileHandler")

function proposeTransfer(outgoingRequest){
    let propose = new Propose(outgoingRequest.file);
    outgoingRequest.users.forEach(ur =>{
        let client = new net.Socket();
        client.connect(Addresses.TCP_PORT, ur.user.ip, () => {
            client.write(new Buffer(JSON.stringify(propose)));
            client.destroy();
        })
    });
}



module.exports = {
  proposeTransfer
}