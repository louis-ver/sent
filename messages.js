module.exports = {
  createJoinMessage: usr => {
    return createConnectionMessage("JOIN", usr);
  },
  createPingMessage: usr => {
    return createConnectionMessage("PING", usr);
  },
  createLeaveMessage: usr => {
    return createConnectionMessage("LEAVE", usr);
  }
};

function createAskMessage(usr, receiverList, sentFile) {
  return createFileMessage("ASK", usr, receiverList, sentFile);
}
function createRefuseMessage(usr, receiverList, sentFile) {
  return createFileMessage("REFUSE", usr, receiverList, sentFile);
}
function createAcceptMessage(usr, receiverList, sentFile) {
  return createFileMessage("ACCEPT", usr, receiverList, sentFile);
}
/*
Formats a Connection message (PING, JOIN, or LEAVE)
usr <Object> required. A user has the following properties:
  -name <string>
  -ip <string>
*/
function createConnectionMessage(methodType, usr) {
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
function createFileMessage(methodType, usr, receiverList, sentFile) {
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
