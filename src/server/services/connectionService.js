const ip = require("ip");
const broadcaster = require("../utils/broadcaster");
const { addUserFromJoin } = require("../../actions/index");
const Join = require("../actions/join");
const { Ping } = require("../actions/ping");

function join(me) {
  let join = new Join(me);
  broadcaster.broadcast(join);
}

function welcome(senderIp, me) {
  if (senderIp === ip.address()) return; //We don't want to welcome ourselves. That would be odd...

  //Send ping back
  console.log(me);
  let ping = new Ping(me);
  broadcaster.broadcast(ping);
}

function addUser(user, senderIp, dispatch) {
  console.log("addUser");
  console.log(user);
  if (senderIp === ip.address()) return; //We don't want to add ourselves to the the user list
  user.ip = senderIp;
  dispatch(addUserFromJoin(user));
  // action.user.ip = senderIp;
  // sent.sent(action);
}

module.exports = {
  join: join,
  addUser: addUser,
  welcome: welcome
};

console.log(ip.address());
