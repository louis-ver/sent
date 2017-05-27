const ip = require("ip");
const broadcaster = require("../utils/broadcaster");
const {Join} = require("../actions/join");
const actionCreator = require("../../actions/index");


function join(me){
      let join = JSON.stringify(
      actionCreator.addUserFromJoin({ name: "John Dole", ip: "34.65.75.234" })
    );
    broadcaster.broadcast(join);
  // let join = JSON.stringify(new Join(me));
  // broadcaster.broadcast(join);  
}

function welcome(senderIp) {
  console.log(ip.address());
  console.log(senderIp);
  if (senderIp === ip.address()) return; //We don't want to welcome ourselves. That would be odd...

  const welcome = {
    type: "PING",
    user: {}
  };
}

function addUser(action, senderIp) {
  if (senderIp === ip.address()) return; //We don't want to add ourselves to the the user list

  action.user.ip = senderIp;
  // sent.sent(action);
}

module.exports = {
  join : join,
  addUser: addUser,
  welcome: welcome
};

console.log(ip.address());
