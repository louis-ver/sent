module.exports = {
  addJoinMessage: usr => {
    return addConnectionMessage("JOIN", usr);
  },
  addPingMessage: usr => {
    return addConnectionMessage("PING", usr);
  },
  addLeaveMessage: usr => {
    return addConnectionMessage("LEAVE", usr);
  }
};

function addAskMessage(usr, receiverList, sentFile) {
  return addFileMessage("ASK", usr, receiverList, sentFile);
}
function addRefuseMessage(usr, receiverList, sentFile) {
  return addFileMessage("REFUSE", usr, receiverList, sentFile);
}
function addAcceptMessage(usr, receiverList, sentFile) {
  return addFileMessage("ACCEPT", usr, receiverList, sentFile);
}
/*
Formats a Connection message (PING, JOIN, or LEAVE)
usr <Object> required. A user has the following properties:
  -name <string>
  -ip <string>
*/
function addConnectionMessage(methodType, usr) {
  return {
    type: methodType,
    user: {
      name: usr["name"],
      ip: usr["ip"]
    }
  };
}
/*
Formats a File Sending message (ASK, ACCEPT, or REFUSE)
  - methodType <string>
  - usr <Object>
    - name <string>
    - ip: <string>
  - receiverList <list>
  - sentFile <Object>
    - name <string>
    - length <int>
    - type <string>
    - hash <string>
*/
function addFileMessage(methodType, usr, receiverList, sentFile) {
  return {
    type: methodType,
    sender: {
      name: usr["name"],
      ip: usr["ip"]
    },
    receivers: receiverList,
    file: sentFile,
    time: new Date()
  };
}
