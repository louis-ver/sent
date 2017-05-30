const actionType = require("../constants/ActionTypes");

function sent(state, action) {
  // Modifies the state according to action type
  // Returns the modified state
  switch (action.type) {
    case actionType.LOGIN:
      return Object.assign({}, state, {
        me: action.me
      });
    // If JOIN, add user to users list
    default:
      return state;
  }
}

module.exports = {
  sent: sent
};
