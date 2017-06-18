import { connect } from "react-redux";
import { addOutgoingRequest, resetCurrentMessage } from "../actions/index";
import { getFile, getSelectedUsers } from "../reducers/state";
import Send from "../components/Send";
import OutgoingRequest from "../classes/outgoingRequest";

const mapStateToProps = (state, ownProps) => {
  return {
    users: getSelectedUsers(state),
    file: getFile(state)
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    send: (userIds, file) => {
        let outgoinRequest = new OutgoingRequest(userIds, file);
        dispatch(addOutgoingRequest(outgoinRequest));

        dispatch(resetCurrentMessage());
    }
  };
};

const SendContainer = connect(mapStateToProps, mapDispatchToProps)(
  Send
);

export default SendContainer;
