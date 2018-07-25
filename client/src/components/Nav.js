import React from "react";
import logo from "../img/logo.png";

document.addEventListener('DOMContentLoaded', () => {
    let burger = document.querySelector('.navbar-burger');
    let menu = document.querySelector('.navbar-menu');
    burger.addEventListener('click', function () {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});

const Nav = (props) => (
    
    // eslint-disable-next-line
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <img src={logo} alt="Yearbook() Logo" width="112" height="28" />
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div className="navbar-menu">
            {/* <div className="navbar-start">
                <a className="navbar-item" href="/signup">
                    Sign Up
                </a>
            </div> */}
            <div className="navbar-end">
                {
                    (props.loggedIn)
                        ? <a className="navbar-item" href="/yearbook">
                            Yearbook</a>
                        : <a className="navbar-item" href="/signup">
                            Sign Up</a>
                }
                <a className="navbar-item" href="/">
                    My Profile
                </a>
                <a className="navbar-item" href="/logout">
                    Log Out
                    </a>
            </div>
        </div>
    </nav>

)

export default Nav;