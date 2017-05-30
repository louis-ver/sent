import { connect } from "react-redux";
import { getUserList } from "../reducers/state";
import { setUserSelected } from "../actions/index";
import UserList from "../components/UserList";

const mapStateToProps = state => {
  return { users: getUserList(state) };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      dispatch(setUserSelected(id));
    }
  };
};

const UserServices = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserServices;
