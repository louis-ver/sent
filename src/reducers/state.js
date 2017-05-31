import _ from "lodash";
import { requestType, requestStatus } from "../constants/requests";

const initialState = {
  // me: {
  //   id: "CA69D6BC-918D-42BC-AD7C-DA3B22FE6DEF",
  //   name: "Louis-Olivier",
  //   ip: "10.0.1.2"
  // },
  me: null,
  users: {
    byId: {
      "43940E38-07DA-4800-A16B-D37E1EDDC5EE": {
        id: "43940E38-07DA-4800-A16B-D37E1EDDC5EE",
        name: "Louis-Olivier",
        ip: "10.0.0.1",
        selected: false
      },
      "15184910-538E-43ED-8294-863696EFCAB7": {
        id: "15184910-538E-43ED-8294-863696EFCAB7",
        name: "Simon",
        ip: "10.0.0.2",
        selected: false
      }
    },
    allIds: [
      "43940E38-07DA-4800-A16B-D37E1EDDC5EE",
      "15184910-538E-43ED-8294-863696EFCAB7"
    ]
  },
  requests: {
    byId: {
      "B41B37C4-D0C6-40CD-BE12-AF9138D9CCA0": {
        id: "B41B37C4-D0C6-40CD-BE12-AF9138D9CCA0",
        sender: "43940E38-07DA-4800-A16B-D37E1EDDC5EE",
        file: {
          name: "raiders.mkv",
          progress: 45,
          size: 324987
        },
        status: requestStatus.WAITING,
        type: requestType.INCOMING
      },
      "3DE395DD-DAB7-4EF9-8F9E-77F369B3F918": {
        id: "3DE395DD-DAB7-4EF9-8F9E-77F369B3F918",
        sender: "43940E38-07DA-4800-A16B-D37E1EDDC5EE",
        file: {
          name: "test.txt",
          progress: 0,
          size: 86379387
        },
        status: requestStatus.WAITING,
        type: requestType.INCOMING
      },
      "D29275F8-9CF3-4A61-9D61-0FD678263F6E": {
        id: "D29275F8-9CF3-4A61-9D61-0FD678263F6E",
        sender: "15184910-538E-43ED-8294-863696EFCAB7",
        file: {
          name: "wowowow.pdf",
          progress: 34,
          size: 75466
        },
        status: requestStatus.IN_PROGRESS,
        type: requestType.OUTGOING
      }
    },
    allIds: [
      "B41B37C4-D0C6-40CD-BE12-AF9138D9CCA0",
      "D29275F8-9CF3-4A61-9D61-0FD678263F6E"
    ]
  }
};

// selectors
function getUser(state, id) {
  return state.users.byId[id];
}
function getAllUserIds(state) {
  return state.users.allIds;
}
function getUserList(state) {
  const users = state.users.byId;
  return Object.keys(users).map(key => {
    return {
      id: key,
      name: users[key].name
    };
  });
}
function getRequestIDs(state) {
  return state.requests.allIds;
}
function getRequest(state, id) {
  return state.requests.byId[id];
}
function filteredIncomingRequestsForUser(state, userId, filter) {
  const requests = state.requests.byId;
  const filteredRequests = _.pickBy(requests, (value, key) => {
    return (
      requests[key].sender === userId &&
      requests[key].type === requestType.INCOMING
    );
  });
  return Object.keys(filteredRequests).map(key => {
    return {
      id: key,
      status: filteredRequests[key].status,
      file: filteredRequests[key].file
    };
  });
}

module.exports = {
  initialState: initialState,
  getAllUserIds: getAllUserIds,
  getUser: getUser,
  getUserList: getUserList,
  getRequestIDs: getRequestIDs,
  getRequest: getRequest,
  filteredIncomingRequestsForUser: filteredIncomingRequestsForUser
};
