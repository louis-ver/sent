const net = require("net");
const Addresses = require("../../constants/Addresses");
const IncomingRequestDTO = require("../../classes/DTO/incomingRequestDTO").default;
const { Propose } = require("../actions/propose");

function proposeTransfer(outgoingRequest){
    let propose = new Propose(new IncomingRequestDTO(outgoingRequest.id, outgoingRequest.file));
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
