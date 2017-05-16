const actionType = require("../constants/ActionTypes");

const initialState = {
  me: { name: "", ip: "" },
  users: [],
  transfersInProgress: [],
  completedTransfers: [],
  requests: []
};

function sent(action, state = initialState) {
  // Modifies the state according to action type
  // Returns the modified state
  switch (action.type) {
    // If JOIN, add user to users list
    case actionType.JOIN:
    case actionType.PING:
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

const JOINaction = {
  type: "JOIN",
  user: {
    name: "Louis-Olivier",
    ip: "10.0.0.1"
  }
};
const PINGaction = {
  type: "PING"
};
console.log(sent(initialState, JOINaction));

module.exports =
{
  sent:sent
  
}
