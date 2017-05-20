import React, { Component } from 'react';

 class Header extends Component {
     render() {
         return (
         <div className="Header">
             <h1 className="custom-margin">sent.</h1>
         </div>
     );
 }
}

class Footer extends Component {
  render() {
    return (
        <div className="Footer">
        </div>
    );
  }
}

export {Header, Footer}
