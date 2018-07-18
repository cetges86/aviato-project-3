import React, { Component } from 'react';
// import logo from "../../img/logo.png";
//import { Route, Redirect } from "react-router-dom"
import API from "../../util/API.js";
import "./Yearbook.css";
import "./YearbookCard.js"


class Yearbook extends Component {

    componentDidMount() {
        API.getAllUsers().then(res => {
            console.log(res) 
        })
        .catch(err => console.log(err))
    }
    render() {
        return(
            {res.state (user => {
        return <ImgCard
            name={this.state.name}
            email={this.state.email}
            lang={this.state.lang}
            job={this.state.job}
            photo={this.state.photo}
            {...user} />
    })}
)
    };
 

   
};


export default Yearbook;