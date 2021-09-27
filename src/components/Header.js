import React from "react";
import logo from '../assets/logo.jpeg';
import '../styles/header.scss';

export function Header () {
    return (
        <div className="headerWrapper">
            <img src={logo} alt="#"/>
        </div>
    )
}
