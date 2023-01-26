import React from "react";
import "./NavBar.css"; 
import shoeters from "../../assets/logo.png"

const NavBar = () => {
    return (
        <header className="navbar">
            <img src={shoeters} alt="logo"/>
            <nav className="navbar-link" >
                <a href="/#" >Accueil</a>
                <a href="/#" >Hommes</a>
                <a href="/#" >Femmes</a>
                <a href="/#" >Enfants</a>
            </nav>
        </header>
    )
}

export default NavBar;