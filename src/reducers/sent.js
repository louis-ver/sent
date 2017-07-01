const actionType = require("../constants/ActionTypes");
const requestStatus = require("../constants/requests").requestStatus;
const requestType = require("../constants/requests").requestType;
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
    case actionType.SET_FILE:
      return setFile(state, action.file);
    case actionType.ADD_OUTGOING_REQUEST:
      return addOutgoingRequest(state, action.request);
    case actionType.ADD_INCOMING_REQUEST:
      return addIncomingRequest(state, action.request);
    case actionType.RESET_CURRENT_MESSAGE:
      return resetCurrentMessage(state);
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
function removeUser(state, id) {
  let newState = stateDeepCopy(state);
  delete newState.users.byId[id];
  newState.users.byId = _.omit(newState.users.byId, [id]);
  _.pull(newState.users.allIds, id);
  return newState;
}
function setFile(state, file) {
  let newState = stateDeepCopy(state);
  newState.file = file;
  return newState;
}
function addOutgoingRequest(state, request) {
  let newState = stateDeepCopy(state);
  newState.outgoingRequests.byId[request.id] = _.cloneDeep(request);
  return newState;
}
function addIncomingRequest(state, request) {
  let newState = stateDeepCopy(state);
  newState.incomingRequests.byId[request.id] = {
    id: request.id,
    sender: request.sender,
    file: request.file,
    status: requestStatus.WAITING,
    type: requestType.INCOMING
  }
  return newState;
}
function resetCurrentMessage(state) {
  let newState = stateDeepCopy(state);
  newState.file = null;

  const users = state.users.byId;
  newState.users.byId = Object.keys(users).map(key => {
    let user = users[key];
    user.selected = false;
    return user;
  });

  return newState;
}
function stateDeepCopy(state) {
  return _.cloneDeep(state);
}
module.exports = {
  sent: sent
};
