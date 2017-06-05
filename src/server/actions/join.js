const { Network } = require("./network");
const {JOIN} = require("../../constants/ActionTypes");

class Join extends Network {
  constructor(me) {
    super(JOIN, me);
  }
}

module.exports = {
  Join
}
