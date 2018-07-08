import React, { Component } from 'react';
// import logo from "../../img/logo.png";
import "./SignUp.css";


class SignUp extends Component {



    render() {
        return (
            <div className="section">
                <div className="container">
                    <h1 className="has-text-centered is-size-2"> sign up for yearbook()</h1>
                </div>
                <br />
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <div className="card">
                            <div className="card-content">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control has-icons-left">
                                        <input className="input is-primary" type="text" placeholder="Name" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">E-mail</label>
                                    <div className="control has-icons-left">
                                        <input className="input is-primary" type="email" placeholder="e.g. person@email.com" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input className="input is-primary" type="password" placeholder="Type Password" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <br />
                                <div className="columns">
                                    <div className="column is-half">
                                        <label className="label">Programming Language</label>
                                        <div className="control has-icons-left">
                                            <div className="select is-rounded">
                                                <select>
                                                    <option defaultValue="true">Primary Language</option>
                                                    <option>JavaScript</option>
                                                    <option>PHP</option>
                                                    <option>C/C++/C#</option>
                                                    <option>Python</option>
                                                    <option>Java</option>

                                                </select>
                                            </div>
                                            <span className="icon is-left">
                                                <i className="fas fa-language"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="column is-half">
                                        <label className="label">Current Job</label>
                                        <div className="control has-icons-left">
                                            <input className="input is-primary" type="text" placeholder="Company or Job Title" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-briefcase"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;