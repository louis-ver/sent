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
          console.log(`Own props: ${JSON.stringify(ownProps)}`);
          connectionService.welcome(rinfo.address, ownProps.me);
        case actionType.PING:
          connectionService.addUser(message.content, rinfo.address, dispatch);
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
