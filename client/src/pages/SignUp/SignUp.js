import React, { Component } from 'react';
// import logo from "../../img/logo.png";
import { Route, Redirect } from "react-router-dom"
import API from "../../util/API.js";
import "./SignUp.css";


class SignUp extends Component {

    state = {
        fileLabel: "Choose a profile photo...",
        imgSrc: "https://bulma.io/images/placeholders/128x128.png",
        name: "",
        address: "",
        password: "",
        lang: "",
        job: "",
        looking: false
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

    handleSubmit = () => {
        let newUser = {
            name: this.state.name,
            email: this.state.address,
            password: this.state.password,
            lang: this.state.lang,
            job: this.state.job,
            looking: this.state.looking,
            photo: this.state.imgSrc,
        };

        let completedForm = false;
        //input verification
        for (var prop in newUser) {
            if (newUser[prop] === "") {
                alert(`${prop} not completed!`)
            } else {
                console.log(`Form element ${prop} complete with "${newUser[prop]}"`)
                completedForm = true;
            }
        }

        console.log(newUser);
        //trigger a post using mongoose to database adding new user data
        if (completedForm) {
            API.createUser(newUser)
                .then(res => {
                    this.props.history.push(`/user/${res.data._id}`)
                        //<Redirect to ={`/user/${res.data._id}`}/>
                }) //go to welcome page 
                .catch(err => console.log(err));
        }
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
                                        <input className="input is-primary is-rounded" type="text" placeholder="Name"
                                            onChange={event => this.setState({ name: event.target.value })} />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">E-mail</label>
                                    <div className="control has-icons-left">
                                        <input className="input is-primary is-rounded" type="email" placeholder="e.g. person@email.com"
                                            onChange={event => this.setState({ address: event.target.value })} />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input className="input is-primary is-rounded" type="password" placeholder="Type Password"
                                            onChange={event => this.setState({ password: event.target.value })} />
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
                                                <select onChange={event => this.setState({ lang: event.target.value })}>
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
                                            <input className="input is-primary is-rounded" type="text" placeholder="Job Title"
                                                onChange={event => this.setState({ job: event.target.value })} />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-briefcase"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <label className="checkbox">
                                    <input type="checkbox" onChange={event => this.setState({ looking: !this.state.looking })} />
                                    &nbsp; Are you currently looking for jobs?
                                    </label>
                                <br />
                                <input className="button is-primary" type="submit" value="Submit" onClick={this.handleSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;