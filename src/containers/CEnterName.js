import React from "react";
import { connect } from "react-redux";
import EnterName from "../components/EnterName"
import { addUserFromLogin } from "../actions/index";
import Me from "../classes/me";
const connectionService = require("../server/services/connectionService");

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUserFromLogin: (name) => {
        let me = new Me(name);
        dispatch(addUserFromLogin(me));
        connectionService.join(me);
    }
  }
}

const CEnterName = connect(
    null,
    mapDispatchToProps
)(EnterName)

export default CEnterName
