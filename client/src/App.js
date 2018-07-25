import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login/Login";
import Welcome from "./pages/Welcome/Welcome";
import SignUp from "./pages/SignUp/SignUp";
import Yearbook from "./pages/Yearbook/Yearbook";
import Logout from "./components/Logout";
import API from "./util/API";

import "./main.css"

class App extends Component {

    state = {
        loggedIn: false
    }

    componentDidMount() {
        API.checkAuthenticated().then(res => {
            if (res.data !== "Not Logged In")
            this.setState({ loggedIn: true })
            console.log(this.state.loggedIn);
        })
    }


    render() {
        return (
            <Router>
                <div>
                    <Nav loggedIn = {this.state.loggedIn} />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/user/:id" component={Welcome} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/yearbook" component={Yearbook} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        )
    };
};

export default App;
