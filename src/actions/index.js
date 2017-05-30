let action = require("../constants/ActionTypes");
let uuid = require("uuid");
let ip = require("ip");

function addUserFromLogin(name) {
  return {
    type: action.LOGIN,
    me: { id: uuid(), name: name, ip: ip.address() }
  };
}
function acceptRequest(id) {
  return {
    type: action.ACCEPT,
    id: id
  };
}
function declineRequest(id) {
  return {
    type: action.DECLINE,
    id: id
  };
}

module.exports = {
  addUserFromLogin: addUserFromLogin,
  acceptRequest: acceptRequest,
  declineRequest: declineRequest
};
