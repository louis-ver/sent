let action = require("../constants/ActionTypes");

module.exports = {
  addUserFromJoin: usr => {
    return addConnectionMessage(action.JOIN, usr);
  },
  addUserFromPing: usr => {
    return addConnectionMessage(action.PING, usr);
  },
  removeUser: usr => {
    return addConnectionMessage(action.LEAVE, usr);
  },
  addIncomingRequest: (usr, sentFile) => {
    return addFileMessage(action.ASK, usr, sentFile);
  },
  addRefuseMessage: (usr, sentFile) => {
    return addFileMessage(action.REFUSE, usr, sentFile);
  },
  addAcceptMessage: (usr, sentFile) => {
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
