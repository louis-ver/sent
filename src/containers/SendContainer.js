import { connect } from "react-redux";
import { addOutgoingRequest, resetCurrentMessage } from "../actions/index";
import { getFile, getSelectedUsers } from "../reducers/state";
import Send from "../components/Send";
import OutgoingRequest from "../classes/outgoingRequest";
import fileService from "../server/services/fileService";
import IncomingRequestDTO from "../classes/DTO/incomingRequestDTO";

const mapStateToProps = (state, ownProps) => {
  return {
    users: getSelectedUsers(state),
    file: getFile(state)
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    send: (users, file) => {
        let outgoingRequest = new OutgoingRequest(users, file);
        dispatch(addOutgoingRequest(outgoingRequest));
        dispatch(resetCurrentMessage());

        fileService.proposeTransfer(new IncomingRequestDTO(outgoingRequest.id, outgoingRequest.file));
    }
  };
};

const SendContainer = connect(mapStateToProps, mapDispatchToProps)(
  Send
);

export default SendContainer;
