import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./nav.css";
import Logo from "./images/logo.png";

const currentTab = (history, path) =>{
    if(history.location.pathname===path){
        return {color: "#2ecc72"};
    }
    else{
        return {color: "#FFFFFF"};
    }
}

const Navbar = ({history}) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} height="50px" width="50px"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link style={currentTab(history, "/")} className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/buy")} className="nav-link" to="/buy">Buy Now</Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/signUp")} className="nav-link" to="/signUp">SignUp</Link>
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history, "/signIn")} className="nav-link" to="/signIn">SignIn</Link> 
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default withRouter(Navbar);