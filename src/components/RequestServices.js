import { connect } from "react-redux";
import { acceptRequest, declineRequest, cancelRequest } from "../actions/index";
import { filteredIncomingRequestsForUser } from "../reducers/state";
import RequestList from "./RequestList";
import { requestType } from "../constants/requests";

const mapStateToProps = (state, ownProps) => {
  return {
    requests: filteredIncomingRequestsForUser(
      state,
      ownProps.userId,
      requestType.INCOMING
    )
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRequestAccept: id => {
      dispatch(acceptRequest(id));
    },
    onRequestDecline: id => {
      dispatch(declineRequest(id));
    },
    onRequestCancel: id => {
      dispatch(cancelRequest(id));
    }
  };
};

const RequestServices = connect(mapStateToProps, mapDispatchToProps)(
  RequestList
);

export default RequestServices;
