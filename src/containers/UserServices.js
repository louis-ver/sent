import { connect } from "react-redux";
import { getUserList, getUserIdFromUserIp } from "../reducers/state";
import { setUserSelected, addIncomingRequest } from "../actions/index";
import UserList from "../components/UserList";
import IncomingRequest from "../classes/incomingRequest";

const mapStateToProps = state => {
  return {
    users: getUserList(state),
    getUserIdFromUserIp: (ip) => getUserIdFromUserIp(state, ip)};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleUserSelected: id => {
      dispatch(setUserSelected(id));
    },
    addProposition: (senderId, incomingRequestDTO) => {
      debugger;
      dispatch(addIncomingRequest(new IncomingRequest(incomingRequestDTO, senderId)));
    }
  };
};

const UserServices = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserServices;
