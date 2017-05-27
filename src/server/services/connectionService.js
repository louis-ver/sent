const ip = require("ip");
const broadcaster = require("../utils/broadcaster");
const actionCreator = require("../../actions/index");
const net = require("net");

const { Join } = require("../actions/join");

function join(me) {
  let join = new Join(me);
  broadcaster.broadcast(join);
  let socket = new net.Socket();
  console.log(socket);
}

function welcome(senderIp) {
  if (senderIp === ip.address()) return; //We don't want to welcome ourselves. That would be odd...

  //Add to user list
  //Send ping back
  const welcome = {
    type: "PING",
    user: {}
  };
}

function addUser(action, senderIp) {
  if (senderIp === ip.address()) return; //We don't want to add ourselves to the the user list

  // action.user.ip = senderIp;
  // sent.sent(action);
}

module.exports = {
  join: join,
  addUser: addUser,
  welcome: welcome
};

console.log(ip.address());
