import React, { Component } from 'react';
import './App.css';
import {Header, Footer} from './HeaderFooter.js';
import {Body} from './Body.js';

class App extends Component {
    render() {
    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
  }
}

export default App;
