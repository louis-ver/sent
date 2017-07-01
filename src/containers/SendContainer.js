import { connect } from "react-redux";
import { addOutgoingRequest, resetCurrentMessage } from "../actions/index";
import { getFile, getSelectedUsers } from "../reducers/state";
import Send from "../components/Send";
import OutgoingRequest from "../classes/outgoingRequest";
import fileService from "../server/services/fileService";

const mapStateToProps = (state, ownProps) => {
  return {
    users: getSelectedUsers(state),
    file: getFile(state)
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    send: (userIds, file) => {
        let outgoingRequest = new OutgoingRequest(userIds, file);
        dispatch(addOutgoingRequest(outgoingRequest));
        dispatch(resetCurrentMessage());

        fileService.proposeTransfer(outgoingRequest);
    }
  };
};

const SendContainer = connect(mapStateToProps, mapDispatchToProps)(
  Send
);

export default SendContainer;
