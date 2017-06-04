let action = require("../constants/ActionTypes");
let uuid = require("uuid");
let ip = require("ip");

function addUserFromLogin(name) {
  return {
    type: action.LOGIN,
    me: { id: uuid(), name: name, ip: ip.address() }
  };
}
function ping(user) {
  return {
    type: action.PING,
    user: { id: user.id, name: user.name, ip: user.ip }
  };
}
function addUserFromJoin(user) {
  return {
    type: action.JOIN,
    user: user
  };
}
function removeUserFromLeave(id){
  return{
    type: action.LEAVE,
    id: id
  }
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
  addUserFromLogin,
  ping,
  addUserFromJoin,
  acceptRequest,
  declineRequest,
  cancelRequest,
  setUserSelected,
  removeUserFromLeave
};
