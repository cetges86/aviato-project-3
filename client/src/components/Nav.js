import React from "react";

const Nav = () => (
    // eslint-disable-next-line
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>
        </div>
        <div className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item">
                    Sign Up
                </a>
            </div>
            <div className="navbar-end">
                <a className="navbar-item">
                    Sign Up
                    </a>
            </div>
        </div>
        {/* <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true">My Profile</span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a> */}

    </nav>

)

export default Nav;