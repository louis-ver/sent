import React from "react";
import { connect } from "react-redux";
import "./css/Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if(!this.props.me) return null;

    return (
        <div className="header" style={{backgroundColor:this.props.me.color || '#6E00B9'}}>
            <div className="headerContent" style={{backgroundColor:this.props.me.color || '#6E00B9'}}>
                <div className="appName">
                    sent
                </div>
                <div className="user">
                    {this.props.me.name}
                </div>
            </div>
        </div>
    );
  }
}

Header = connect((store, props) => {
  return {me : store.me};
})(Header);

export default Header;
