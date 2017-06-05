const actionType = require("../constants/ActionTypes");
const requestStatus = require("../constants/requests").requestStatus;
const _ = require("lodash");

function sent(state, action) {
  // Modifies the state according to action type
  // Returns the modified state
  switch (action.type) {
    case actionType.LOGIN:
      return Object.assign({}, state, {
        me: action.me
      });
    case actionType.JOIN:
      return addUser(state, action.user);
    case actionType.LEAVE:
      return removeUser(state, action.id);
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
  let newState = stateDeepCopy(state);
  newState.requests.byId[requestId].status = status;
  return newState;
}
function changeUserSelected(state, userID) {
  let newState = stateDeepCopy(state);
  let isUserSelected = newState.users.byId[userID].selected;
  newState.users.byId[userID].selected = !isUserSelected;
  return newState;
}
function addUser(state, user) {
  let newState = stateDeepCopy(state);
  newState.users.byId[user.id] = {
    id: user.id,
    name: user.name,
    ip: user.ip,
    selected: false
  };
  newState.users.allIds.push(user.id);
  return newState;
}
function removeUser(state, id){
  let newState = stateDeepCopy(state);
  delete newState.users.byId[id];
  newState.users.byId = _.omit(newState.users.byId, [id]);
  _.pull(newState.users.allIds, id);
  return newState;
}
function stateDeepCopy(state) {
  return JSON.parse(JSON.stringify(state));
}
module.exports = {
  sent: sent
};
