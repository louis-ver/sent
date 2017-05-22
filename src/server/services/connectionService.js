// const sent = require("../../reducers/sent");
const ip = require("ip");

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
  addUser: addUser,
  welcome: welcome
};

console.log(ip.address());
