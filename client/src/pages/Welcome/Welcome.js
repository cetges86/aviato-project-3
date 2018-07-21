import React, { Component } from "react";
//import { Route, Redirect } from "react-router-dom"
import API from "../../util/API"
import "./Welcome.css";



class Welcome extends Component {

    componentDidMount(props) {
        console.log(this.props.match.params.id)
        API.getUser(this.props.match.params.id).then(res => {
            this.setState({ userdata: res.data })
            console.log(res);
        });


    }

    state = {
        userdata : {}
    }

    render() {
        return (
            // yearbook profile
            <div className='container'>
                <div className='columns'>
                    <div id='header' className='column is-full'>
                        Profile
                    </div>
                </div>

                <div className='columns'>
                    {/* profile picture */}
                    <div id='photo' className='column is-half'>
                        photo
                        <figure className="image is-128x128">
                            <img alt="user-profile" src={this.state.userdata.photo} />
                        </figure>
                    </div>

                    {/*name and info*/}
                    <div className='column is-half'>
                       <h1>{this.state.userdata.name}</h1>
                       <p>{this.state.userdata.lang}</p>
                    </div>
                </div>


                <div className='columns'>
                    {/* career links */}
                    <div id='photo' className='column is-half'>
                        career links
                        </div>
                    {/*classmates*/}
                    <div className='column is-half'>
                        classmates
                            <div className='card is-full'>
                            {/* first row of photos */}
                            <div className='columns'>
                                <div className='column is-third'>
                                    <figure className="image is-128x128">
                                        <img alt="profile" src="https://bulma.io/images/placeholders/128x128.png" />
                                    </figure>
                                </div>

                                <div className='column is-third'>
                                    <figure className="image is-128x128">
                                        <img alt="profile" src="https://bulma.io/images/placeholders/128x128.png" />
                                    </figure>
                                </div>

                                <div className='column is-third'>
                                    <figure className="image is-128x128">
                                        <img alt="profile" src="https://bulma.io/images/placeholders/128x128.png" />
                                    </figure>
                                </div>
                            </div>
                            {/* first row of photos */}
                            <div className='columns is-centered'>
                                <div className='column is-third'>
                                    <figure className="image is-128x128">
                                        <img alt="profile" src="https://bulma.io/images/placeholders/128x128.png" />
                                    </figure>
                                </div>

                                <div className='column is-third'>
                                    <figure className="image is-128x128">
                                        <img alt="profile" src="https://bulma.io/images/placeholders/128x128.png" />
                                    </figure>
                                </div>

                                <div className='column is-third'>
                                    <figure className="image is-128x128">
                                        <img alt="profile" src="https://bulma.io/images/placeholders/128x128.png" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>






                    <div id="loginDiv" className="column is-half is-offset-one-quarter">
                        <div className="card">
                            <div className="card-image has-text-centered">
                                <h1 id="logo" className="is-size-1"> yearbook() </h1>
                                <p>USER PAGE</p>
                            </div>
                            <div className="card-content">
                                <div className="field">
                                    <p className="control has-icons-left has-icons-right">
                                        <input className="input is-rounded" type="email" placeholder="Email" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-check"></i>
                                        </span>
                                    </p>
                                </div>
                                <div className="field">
                                    <p className="control has-icons-left">
                                        <input className="input is-rounded" type="password" placeholder="Password" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-lock"></i>
                                        </span>
                                    </p>
                                </div>
                                <input className="button is-rounded is-primary" type="submit" value="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        )
    }



}

export default Welcome;