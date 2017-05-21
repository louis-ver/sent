const actionType = require("../constants/ActionTypes");

const initialState = {
  me: null,
  users: [], // {ip : 192.168.0.3, name: Simon, incomingRequests: [incomingRequest]}
  outgoingRequests: [] // {usersTransfers : [userTransfer], file: {file}} //UserTransfer {ip: 192.168.0.3, state: "waiting"}
};

function sent(state = initialState, action) {
  // Modifies the state according to action type
  // Returns the modified state
  switch (action.type) {
    case actionType.LOGIN:
      return Object.assign({}, state, {
        me: action.content
      });
    // If JOIN, add user to users list
    case actionType.JOIN:
    case actionType.PING:
      return Object.assign({}, state, {
        users: [...state.users, action.content]
      });
    case actionType.LEAVE:
      return Object.assign({}, state, {
        users: state.users.filter(quitUser => {
          return JSON.stringify(quitUser) !== JSON.stringify(action.content);
        })
      });
    case actionType.ASK:
      return Object.assign({}, state, {
        requests: [...state.requests, action.content]
      });
    case actionType.ACCEPT:
    case actionType.REFUSE:
      return Object.assign({}, state, {
        requests: state.requests.filter(acceptedRequest => {
          return (
            JSON.stringify(acceptedRequest) !== JSON.stringify(action.content)
          );
        })
      });
    case actionType.SEND:
    default:
      return state;
  }
}

module.exports = {
  sent: sent,
  initialState: initialState
};
