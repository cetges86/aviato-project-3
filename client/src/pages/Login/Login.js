import React, { Component } from "react";
import logo from "../../img/logo.png";
import API from "../../util/API"
import "./Login.css";


class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    onSubmit = () => {
        API.login(this.state.email, this.state.password).then(res => {
            if(res.request.status === 200){
                console.log(res);
                //this.props.history.push(`/user/${res.data._id}`)
            }else {
                console.log("user name or password incorrect")
            }
        })
        .catch(err => console.log(err));
    }


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
                                    <input className="input is-rounded" type="email" placeholder="Email"
                                        onChange={event => this.setState({ name: event.target.value })} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input is-rounded" type="password" placeholder="Password"
                                        onChange={event => this.setState({ password: event.target.value })} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                            <div className="field is-grouped">
                                <input className="button is-rounded is-primary" type="submit" value="Login"
                                onClick = {this.onSubmit} />
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