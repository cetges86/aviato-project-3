import React, { Component } from 'react';
import YearbookCard from './YearbookCard.js'
import API from "../../util/API.js";
import "./Yearbook.css";



class Yearbook extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        API.getAllUsers().then(res => {
            console.log(res)
            this.setState({ users: res.data })
        })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="container">
            <div id="yearbook-card" className="columns">
                {this.state.users.map(user => {
                    return <YearbookCard
                        key={user._id}
                        {...user} />
                })}
                </div>
            </div>
        )
    }





};


export default Yearbook;