import React, { Component } from 'react';
import YearbookCard from './YearbookCard.js'
// import logo from "../../img/logo.png";
//import { Route, Redirect } from "react-router-dom"
import API from "../../util/API.js";
import "./Yearbook.css";



class Yearbook extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        API.getAllUsers().then(res => {
            console.log(res)
            this.setState({users: res.data}) 
        })
        .catch(err => console.log(err))
    }
    render() {
        return(
            <div>
            {this.state.users.map(user => {
        return <YearbookCard
                key = {user._id}
            // name={this.state.name}
            // email={this.state.email}
            // lang={this.state.lang}
            // job={this.state.job}
            // photo={this.state.photo}
            {...user} /> })}
            </div>
    )}

    
 

   
};


export default Yearbook;