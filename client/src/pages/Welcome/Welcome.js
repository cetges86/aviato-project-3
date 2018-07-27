import React, { Component } from "react";
//import { Route, Redirect } from "react-router-dom"
import API from "../../util/API"
import "./Welcome.css";
import ClassmateCard from "../../components/ClassmateCard";
import Youtube from "../../components/Youtube";
import JobSearch from "../../components/JobSearch";



class Welcome extends Component {

    componentDidMount() {
        API.getUser(this.props.match.params.id).then(res => {
            this.setState({ userdata: res.data })
        });

        API.getAllUsers().then(res => this.setState({ classmates: res.data }))

    }

    state = {
        userdata: {},
        classmates: []
    }

    render() {
        return (
            // yearbook profile
            <div className='container'>
                <div className='columns'>
                    {/* profile picture */}
                    <div id='photo' className='column is-one-quarter'>
                        <figure className="image is-128x128">
                            <img alt="user-profile" src={this.state.userdata.photo} />
                        </figure>
                    </div>

                    {/*name and info*/}
                    <div className='column is-half'>
                        <h1 className="is-size-1">{this.state.userdata.name}</h1>
                        <hr/>
                        <p>Contact:<a href={"mailto:" + this.state.userdata.email}> {this.state.userdata.email}</a></p>
                        <p>Primary Programming Language: {this.state.userdata.lang}</p>
                        <p>Job Desired: {this.state.userdata.job}</p>
                        <p>Currently Seeking Employment: {
                            (this.state.userdata.looking)
                                ? "Yes" : "No"
                        } </p>
                    </div>
                    <div id='photo' className='column is-one-quarter'>
                        career links
                        <hr />
                        <ul>
                            <li><a href={this.state.userdata.linked}>LinkedIn Profile</a></li>
                            <li><a href={this.state.userdata.github}>Github Profile</a></li>
                            <li><a href={this.state.userdata.portfolio}>Portfolio Page</a></li>
                        </ul>
                    </div>

                </div>
                <div className='columns'>
                    {/* career links */}
                    <div className="column is-two-thirds">

                        <div className="box">
                            <Youtube user={this.state.userdata} />
                        </div>
                        <div className='card is-full'>
                            <JobSearch job={this.state.userdata.job} />
                        </div>
                    </div>
                    {/*classmates*/}
                    <div className='column is-one-third'>
                        <p className="has-text-left">classmates</p>
                        <hr />
                        <a href="/yearbook"><p className="has-text-left">View Yearbook</p></a>

                        <div className="box">
                                {/* first row of photos */}
                                {this.state.classmates
                                .filter(student => student.name !== this.state.userdata.name)
                                .map(student => {
                                    return <ClassmateCard
                                        key={student._id}
                                        {...student} />
                                })}
                        </div>
                    </div>
                </div>
            </div>



        )
    }



}

export default Welcome;