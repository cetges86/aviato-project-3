import React, { Component } from "react";
import logo from "../../img/logo.png";
import API from "../../util/API"
import "./Login.css";


class Login extends Component {

    state = {
        email: "",
        password: "",
        message:"please login below",
        checkAuth:""
    }

    componentDidMount(){
        API.checkAuthenticated().then(res => {
            this.setState({checkAuth:res.data})
            console.log("check auth " + this.state.checkAuth );
            if (this.state.checkAuth !== "Not Logged In"){
               this.props.history.push(`/user/${this.state.checkAuth.user._id}`)
            }
        })

    }

    onSubmit = () => {

        let loginInfo = { email: this.state.email, password: this.state.password }
        API.login(loginInfo).then(((res,err) => {
            console.log(res);
            if (res.request.status === 200) {
                console.log(res);
                this.props.history.push(`/user/${res.data._id}`)
            } 
        }))
        .catch(err => this.setState({message: "user name or password incorrect"})
    );
    }


    render() {
        return (
            <div className="columns">
                <div id="loginDiv" className="column is-half is-offset-one-quarter">
                    <div className="card">
                        <div className="card-image has-text-centered">
                            <img src={logo} alt="yearbook logo" className="" />
                            {/* <h1 id="logo" className="is-size-1"> yearbook() </h1> */}
                            <p>{this.state.message}</p>
                        </div>
                        <div className="card-content">
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input is-rounded" type="email" placeholder="Email"
                                        onChange={event => this.setState({ email: event.target.value })} />
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
                                    onClick={this.onSubmit} />
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