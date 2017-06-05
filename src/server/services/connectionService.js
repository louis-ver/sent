const ip = require("ip");
const { broadcast } = require("../utils/broadcaster");
const { addUserFromJoin, removeUserFromLeave} = require("../../actions/index");
const { Join } = require("../actions/join");
const { Ping } = require("../actions/ping");
const { Leave } = require("../actions/leave");

function join(me) {
  let join = new Join(me);
  broadcast(join);
}

function welcome(senderIp, me) {
  if (senderIp === ip.address()) return; //We don't want to welcome ourselves. That would be odd...

  //Send ping back
  let ping = new Ping(me);
  broadcast(ping);
}

function addUser(user, senderIp, dispatch) {
  if (senderIp === ip.address()) return; //We don't want to add ourselves to the the user list

  user.ip = senderIp;
  dispatch(addUserFromJoin(user));
}

function leave(id){
    broadcast(new Leave(id));
}

function removeUser(id, dispatch){
    dispatch(removeUserFromLeave(id));
}

module.exports = {
  join,
  addUser,
  welcome,
  leave,
  removeUser
};
