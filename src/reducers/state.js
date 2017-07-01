import _ from "lodash";
import { requestType, requestStatus } from "../constants/requests";

const initialState = {
  // me: {
  //   id: "CA69D6BC-918D-42BC-AD7C-DA3B22FE6DEF",
  //   name: "Stacia Kiosses",
  //   ip: "10.0.1.2"
  // },
  me: null,
  users: {
    // byId: {
    //   "43940E38-07DA-4800-A16B-D37E1EDDC5EE": {
    //     id: "43940E38-07DA-4800-A16B-D37E1EDDC5EE",
    //     name: "Louis-Olivier",
    //     ip: "10.0.0.1",
    //     selected: false
    //   },
    //   "15184910-538E-43ED-8294-863696EFCAB7": {
    //     id: "15184910-538E-43ED-8294-863696EFCAB7",
    //     name: "Simon",
    //     ip: "10.0.0.2",
    //     selected: false
    //   },
    //   "460D6927-8A80-4929-9F41-989F1F29BBB9": {
    //     id: "460D6927-8A80-4929-9F41-989F1F29BBB9",
    //     name: "Henri",
    //     ip: "10.0.0.3",
    //     selected: false
    //   },
    //   "38E0E8BC-B707-4B2D-A182-DCE6C0528BEA": {
    //     id: "38E0E8BC-B707-4B2D-A182-DCE6C0528BEA",
    //     name: "Lucy",
    //     ip: "10.0.0.4",
    //     selected: false
    //   }
    // },
    byId: {},
    allIds: [
      // "43940E38-07DA-4800-A16B-D37E1EDDC5EE",
      // "15184910-538E-43ED-8294-863696EFCAB7",
      // "460D6927-8A80-4929-9F41-989F1F29BBB9",
      // "38E0E8BC-B707-4B2D-A182-DCE6C0528BEA"
    ]
  },
  file : null,
  outgoingRequests: {
    byId: {

    }
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
        status: requestStatus.WAITING,
        type: requestType.INCOMING
      },
      "1C38E2F6-D556-45DE-AADB-F9384F68F551": {
        id: "1C38E2F6-D556-45DE-AADB-F9384F68F551",
        sender: "38E0E8BC-B707-4B2D-A182-DCE6C0528BEA",
        file: {
          name: "comp232_assignment2.pdf",
          progress: 10000,
          size: 75466
        },
        status: requestStatus.IN_PROGRESS,
        type: requestType.INCOMING
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
function getUserIDFromUserIP(state, ip) {
  const users = state.users.byId;
  return Object.values(users).find(user => {
    return user.ip === ip;
  });
}
function getAllUserIds(state) {
  return state.users.allIds;
}
function getUserList(state) {
  const users = state.users.byId;
  return Object.keys(users).map(key => {
    return {
      id: key,
      name: users[key].name,
      selected: users[key].selected
    };
  });
}
function getSelectedUsers(state) {
  const users = state.users.byId;
  return Object.values(users).filter(user => {
    return user.selected;
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
function getFile(state) {
  return state.file;
}

module.exports = {
  initialState: initialState,
  getAllUserIds: getAllUserIds,
  getUser: getUser,
  getUserList: getUserList,
  getSelectedUsers: getSelectedUsers,
  getRequestIDs: getRequestIDs,
  getRequest: getRequest,
  filteredIncomingRequestsForUser: filteredIncomingRequestsForUser,
  getFile: getFile
};
