const actionType = require("../constants/ActionTypes");

const initialState = {
  me: { name: "", ip: "" },
  users: [],
  transfersInProgress: [],
  completedTransfers: [],
  requests: []
};

function sent(state = initialState, action) {
  // Modifies the state according to action type
  // Returns the modified state
  switch (action.type) {
    // If JOIN, add user to users list
    case actionType.JOIN:
      return Object.assign({}, state, {
        users: [...state.users, { name: action.user.name, ip: action.user.ip }]
      });
    // If PING and user not in users list, add to users list
    case actionType.PING:
      for (var i = 0; i < state.users.length; i++) {
        if (
          state.users[i].name === action.user.name &&
          state.users[i].ip === action.user.ip
        ) {
          return state;
        }
      }
      return Object.assign({}, state, {
        users: [...state.users, { name: action.user.name, ip: action.user.ip }]
      });
    case actionType.LEAVE:
    case actionType.ASK:
    case actionType.ACCEPT:
    case actionType.REFUSE:
    case actionType.SEND:
    default:
      return state;
  }
}

module.exports = {
  sent: sent
};
