import { connect } from "react-redux";
import { setFile } from "../actions/index";
import { getFile } from "../reducers/state";
import Dropzone from "../components/Dropzone";

const mapStateToProps = (state, ownProps) => {
  return {
    file: getFile(state)
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFile: file => {
      dispatch(setFile(file));
    }
  };
};

const DropzoneContainer = connect(mapStateToProps, mapDispatchToProps)(
  Dropzone
);

export default DropzoneContainer;
