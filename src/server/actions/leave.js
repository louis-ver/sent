const { Network } = require("./network");
const {LEAVE} = require("../../constants/ActionTypes");

class Leave extends Network {
  constructor(id) {
    super(LEAVE, id);
  }
}

export default Leave;
