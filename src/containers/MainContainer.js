import { connect } from "react-redux";
import { addUserFromJoin, ping } from "../actions/index";
import { broadcast } from "../server/utils/broadcaster";
import actionType from "../constants/ActionTypes";
import Main from "../components/Main";
import connectionService from "../server/services/connectionService";
import ip from "ip";

let listeningHandler = () => {
  broadcast(addUserFromJoin(this.props.me));
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    listeningHandler,
    messageHandler: (msg, rinfo) => {
      let message = JSON.parse(msg);
      switch (message.type) {
        case actionType.JOIN:
          connectionService.welcome(rinfo.address);
        case actionType.PING:
          connectionService.addUser(message, rinfo.address);
          break;
        // If user not in online user list, add to list
        case actionType.LEAVE:
        // Remove user from online user list
        default:
        // Do default
      }
    }
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
