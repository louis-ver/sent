import {
  JOIN,
  PING,
  LEAVE,
  ASK,
  ACCEPT,
  REFUSE,
  SEND
} from "../constants/ActionTypes";

const initialState = [
  {
    users: [],
    transfersInProgress: [],
    completedTransfers: [],
    requests: []
  }
];

export default function sent(state = initialState, action) {
  // Modifies the state according to action type
  // Returns the modified state
  switch (action.type) {
    case JOIN:
    case PING:
    case LEAVE:
    case ASK:
    case ACCEPT:
    case REFUSE:
    case SEND:
    default:
      return state;
  }
}
