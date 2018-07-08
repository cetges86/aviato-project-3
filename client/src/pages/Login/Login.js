import React, { Component } from "react";
import logo from "../../img/logo.png";

import "./Login.css";


class Login extends Component {



    render() {
        return (
            <div className="columns">
                <div id="loginDiv" className="column is-half is-offset-one-quarter">
                    <div className="card">
                        <div className="card-image has-text-centered">
                            <img src={logo} alt="yearbook logo" className="" />
                            {/* <h1 id="logo" className="is-size-1"> yearbook() </h1> */}
                            <p>please login below</p>
                        </div>
                        <div className="card-content">
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input is-rounded" type="email" placeholder="Email" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
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
                            <div className="field is-grouped">
                                <input className="button is-rounded is-primary" type="submit" value="Login" />
                                {/* <a href="/signup"> <input className="button is-rounded" value="Sign Up" /> </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



}

export default Login;