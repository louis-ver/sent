const actionType = require("../constants/ActionTypes");
const requestStatus = require("../constants/requests").requestStatus;

function sent(state, action) {
  // Modifies the state according to action type
  // Returns the modified state
  switch (action.type) {
    case actionType.LOGIN:
      return Object.assign({}, state, {
        me: action.me
      });
    case actionType.ACCEPT:
      return changeRequestStatus(state, action.id, requestStatus.ACCEPTED);
    case actionType.DECLINE:
      return changeRequestStatus(state, action.id, requestStatus.DECLINED);
    case actionType.CANCEL:
      return changeRequestStatus(state, action.id, requestStatus.CANCELED);
    case actionType.SELECT_USER:
      return changeUserSelected(state, action.id);
    default:
      return state;
  }
}

function changeRequestStatus(state, requestId, status) {
  let newState = JSON.parse(JSON.stringify(state));
  newState.requests.byId[requestId].status = status;
  return newState;
}
function changeUserSelected(state, userID) {
  let newState = JSON.parse(JSON.stringify(state));
  let isUserSelected = newState.users.byId[userID].selected;
  newState.users.byId[userID].selected = !isUserSelected;
  console.log(newState.users.byId[userID].selected);
  return newState;
}

module.exports = {
  sent: sent
};
