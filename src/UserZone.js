import React, { Component } from 'react';
import './UserZone.css'

class UserZone extends Component {
    render(){
        let rows = [];
        let _this = this;
        this.props.users.forEach(function(user){
            rows.push(<User key={user.id} u={user} onUserSelect={_this.props.onUserSelect} selected={_this.props.selectedUser !== null && user === _this.props.selectedUser}/>);
        })

        return(
            <div className="UserZone">
                <h3>These people are nearby. Who are you sending this file to?</h3>
                <div className="UserZone-container">
                    <div className="row">
                        {rows}
                    </div>
                </div>
            </div>
        );
    }

//    componentDidMount() {
//        //Issues call to server to get all the people nearby
//        $.getJSON('url', function(users){
//           this.setState({users});
//        });
//    }
}

class User extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="User">
                <div className={"User-icon " + (this.props.selected ? 'active' : '')}  onClick={() =>this.props.onUserSelect(this.props.u)}>{this.props.u.img}</div>
                <div className="User-name">{this.props.u.name}</div>
            </div>
        );
    }
}

export {UserZone};
