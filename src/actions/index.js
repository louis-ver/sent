let action = require("../constants/ActionTypes");

module.exports = {
  addUserFromLogin: usr => {
    return addConnectionMessage(action.LOGIN, usr);
  },
  addUserFromJoin: usr => {
    return addConnectionMessage(action.JOIN, usr);
  },
  addUserFromPing: usr => {
    return addConnectionMessage(action.PING, usr);
  },
  removeUser: usr => {
    return addConnectionMessage(action.LEAVE, usr);
  },
  acceptRequest: (usr, sentFile) => {
    return addFileMessage(action.ASK, usr, sentFile);
  },
  declineRequest: (usr, sentFile) => {
    return addFileMessage(action.REFUSE, usr, sentFile);
  },
  cancelRequest: (usr, sentFile) => {
    return addFileMessage(action.ACCEPT, usr, sentFile);
  }
};

function addConnectionMessage(methodType, usr) {
  return {
    type: methodType,
    content: usr // {ip: , name: , icon: }
  };
}

function addFileMessage(methodType, usr, sentFile) {
  return {
    type: methodType,
    content: {
      user: usr,
      file: sentFile // {name: , length: , type: , hash: }
    }
  };
}
