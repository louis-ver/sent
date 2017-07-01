const net = require("net");
const OutgoingRequest = require("../../classes/outgoingRequest");
const state = require("../../reducers/state");
const Addresses = require("../../constants/Addresses");
const { Propose } = require("../actions/propose");

function proposeTransfer(outgoingRequest){
    let propose = new Propose(outgoingRequest.file);
    outgoingRequest.users.forEach(ur =>{
        debugger;
        let client = new net.Socket();
        client.connect(Addresses.TCP_PORT, ur.user.ip, () => {
            client.write(propose);
            client.destroy();
        })
    });
}

module.exports = {
  proposeTransfer
}