const actionType = require("../constants/ActionTypes");

const initialState = {
  me: { name: "", ip: "" },
  users: [],
  transfersInProgress: { outgoing: [], incoming: [] },
  completedTransfers: [],
  requests: []
};

function sent(state = initialState, action) {
  // Modifies the state according to action type
  // Returns the modified state
  switch (action.type) {
    // If JOIN, add user to users list
    case actionType.JOIN:
    case actionType.PING:
      return Object.assign({}, state, {
        users: [...state.users, action.user]
      });
    case actionType.LEAVE:
      return Object.assign({}, state, {
        users: state.users.filter(quitUser => {
          return JSON.stringify(quitUser) !== JSON.stringify(action.user);
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
  sent: sent
};
