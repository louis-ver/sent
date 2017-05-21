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
        <div className="Header" style={{backgroundColor:this.props.me.color || '#6E00B9'}}>
            <div>
                Sent
            </div>
            <div>
                <span>
                    {this.props.me.name}
                </span>
            </div>
        </div>
    );
  }
}

Header = connect((store, props) => {
  return {me : store.me};
})(Header);

export default Header;
