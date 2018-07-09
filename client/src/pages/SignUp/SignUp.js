import React, { Component } from 'react';
// import logo from "../../img/logo.png";
import "./SignUp.css";


class SignUp extends Component {

    state = {
        fileLabel: "Choose a profile photo...",
        imgSrc:"https://bulma.io/images/placeholders/128x128.png"
    }

    getFileName = () => {
        var file = document.getElementById("file");
        console.log(file.files);
        file.onchange = function () {
            if (file.files.length > 0) {
                document.getElementById('filename').innerHTML = file.files[0].name;
            }
        };
        this.setState({ fileLabel: "Select a different photo" })
    }

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
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-128x128">
                                            <img alt="profile" src={this.state.imgSrc} />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <div className="file has-name">
                                            <label className="file-label">
                                                <input onInput={this.getFileName} id="file" className="file-input" type="file" name="resume" />
                                                <span className="file-cta">
                                                    <span className="file-icon">
                                                        <i className="fas fa-upload"></i>
                                                    </span>
                                                    <span className="file-label">
                                                        {this.state.fileLabel}
                                                    </span>
                                                </span>
                                                <span id="filename" className="file-name">Upload</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <br />
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
                                        <label className="label">Desired Job</label>
                                        <div className="control has-icons-left">
                                            <input className="input is-primary" type="text" placeholder="Job Title" />
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