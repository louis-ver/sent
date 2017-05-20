import React, { Component } from 'react';
import {Connect} from './Connect.js';
import {Main} from './Main.js';

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {user: null};
        this.login = this.login.bind(this);
    }
    render() {
        let content = null;
        if(this.state.user === null)
        {
            content = (<Connect login={this.login}/>);
        }else{
            content = (<Main user={this.state.user}/>);
        }
        
        return (
            <div>
                {content}
            </div>
        );
    }
    
    login(user){
        localStorage.setItem('TOKEN', JSON.stringify(user));
        this.setState({user});
    }
    
    componentDidMount() {
        //Issues call to server to get all the people nearby
        if(localStorage.getItem('TOKEN') !== null){
            this.setState({user : JSON.parse(localStorage.getItem('TOKEN'))});
        }
    }
}

export {Body};
