import { connect } from "react-redux";
import { addUserFromJoin, ping } from "../actions/index";
import { broadcast } from "../server/utils/broadcaster";
import actionType from "../constants/ActionTypes";
import Main from '../components/Main';
import ip from "ip";

let listeningHandler = () => {
    broadcast(addUserFromJoin(this.props.me));
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        listeningHandler,
        messageHandler : (msg, rinfo) => {
            const message = JSON.parse(msg.toString());
            if (rinfo.address === ip.address()) {
                return;
            }

            switch (message.type) {
            case actionType.JOIN:
                broadcast(ping(ownProps.me));
            case actionType.PING:
                dispatch(addUserFromJoin(message.user));
                break;
            default:
                console.log("Unrecognized actionType");
            }
        }
    }
}

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default MainContainer;