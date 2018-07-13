import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login/Login";
import Welcome from "./pages/Welcome/Welcome";
import "./main.css"

const App = () => (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/welcome" component={Welcome} />
                    {/* <Route exact path="/yearbook" component={Yearbook} /> */}
                    {/* <Route exact path="/user/:id" component={Profile} /> */}
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

export default App;
