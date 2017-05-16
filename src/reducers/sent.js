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
    case actionType.PING:
      return Object.assign({}, state, {
        users: [...state.users, action.user]
      });
    case actionType.LEAVE:
      return Object.assign({}, state, {
        users: state.users.filter(quitUser => {
          return JSON.stringify(quitUser) != JSON.stringify(action.user);
        })
      });
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
// const user1 = { name: "Louis-Olivier", ip: "10.0.0.1" };
// const user2 = { name: "Simon", ip: "10.0.0.2" };
// const initialState2 = {
//   me: { name: "", ip: "" },
//   users: [user1, user2],
//   transfersInProgress: [],
//   completedTransfers: [],
//   requests: []
// };
// const JOINaction = {
//   type: "JOIN",
//   user: {
//     name: "Simon",
//     ip: "10.0.0.1"
//   }
// };
// const LEAVEaction = {
//   type: "LEAVE",
//   user: {
//     name: "Bob",
//     ip: "10.0.0.2"
//   }
// };
// console.log(sent(initialState, JOINaction));
