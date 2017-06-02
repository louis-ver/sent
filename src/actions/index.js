let action = require("../constants/ActionTypes");
let uuid = require("uuid");
let ip = require("ip");

function addUserFromLogin(name) {
  return {
    type: action.LOGIN,
    me: { id: uuid(), name: name, ip: ip.address() }
  };
}
function addUserFromJoin(user) {
  return {
    type: action.JOIN,
    user: user
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
function cancelRequest(id) {
  return {
    type: action.CANCEL,
    id: id
  };
}
function setUserSelected(id) {
  return {
    type: action.SELECT_USER,
    id: id
  };
}

module.exports = {
  addUserFromLogin: addUserFromLogin,
  addUserFromJoin: addUserFromJoin,
  acceptRequest: acceptRequest,
  declineRequest: declineRequest,
  cancelRequest: cancelRequest,
  setUserSelected: setUserSelected
};
