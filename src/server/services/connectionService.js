const ip = require("ip");
const broadcaster = require("../utils/broadcaster");
const {Join} = require("../actions/join");
const {Ping} = require("../actions/ping");

function join(me){
  let join = new Join(me);
  broadcaster.broadcast(join);
}

function welcome(senderIp) {
  if (senderIp === ip.address()) return; //We don't want to welcome ourselves. That would be odd...

  //Send ping back
  let ping = new Ping("Simon");
  broadcaster.broadcast(ping);
}

function addUser(action, senderIp) {
  console.log("addUser");
  if (senderIp === ip.address()) return; //We don't want to add ourselves to the the user list

  console.log(`Inconnu:${senderIp}`);
  // action.user.ip = senderIp;
  // sent.sent(action);
}

module.exports = {
  join : join,
  addUser: addUser,
  welcome: welcome
};

console.log(ip.address());
