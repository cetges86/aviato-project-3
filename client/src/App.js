import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import "./main.css"

const App = () => (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Sign-Up} />

                {/* <Route exact path="/yearbook" component={Yearbook} /> */}
                {/* <Route exact path="/user/:id" component={Profile} /> */}
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

export default App;
