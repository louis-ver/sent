let action = require("../constants/ActionTypes");
let uuid = require("uuid");
let ip = require("ip");

function addUserFromLogin(name) {
  return {
    type: action.LOGIN,
    me: { id: uuid(), name: name, ip: ip.address() }
  };
}

module.exports = {
  addUserFromLogin: addUserFromLogin
};
