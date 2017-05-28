const ip = require("ip");
const broadcaster = require("../utils/broadcaster");
const net = require("net");

const { Join } = require("../actions/join");
const {Ping} = require("../actions/ping");
const { Store } = require("../store");
const actionCreator = require("../../actions/index");

function join(me) {
  let join = new Join(me);
  broadcaster.broadcast(join);
  let socket = new net.Socket();
  console.log(socket);
}

function welcome(senderIp) {
  if (senderIp === ip.address()) return; //We don't want to welcome ourselves. That would be odd...

  //Send ping back
  let ping = new Ping("Simon");
  broadcaster.broadcast(ping);
}

function addUser(user, senderIp) {
  console.log("addUser");
  if (senderIp === ip.address()) return; //We don't want to add ourselves to the the user list

  console.log(`${user.name}:${senderIp}`);

  // Add user to store
  let store = Store;
  console.log("Store:");
  console.log(store);
  store.dispatch(actionCreator.addUserFromLogin({name: user.name, ip: senderIp}));
}

module.exports = {
  join: join,
  addUser: addUser,
  welcome: welcome
};

console.log(ip.address());
