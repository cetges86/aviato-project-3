import React, { Component } from 'react';
import API from "../util/API";

class Logout extends Component {

    componentDidMount(){
        API.logout().then(res => {
            console.log(res)
        })
    }


    render() {
        return (
            <div>
                <h1>You have been successfully logged out</h1>
                <a href="/">Log Back In</a>
            </div>
        )
    }
}

export default Logout;