import React from 'react'
import './Footer.css'
import logo from './logo.png'

const Footer = () => {

    return (
        <div className="footer-div">

        <img src={logo} className="logo" alt="logo" />

        <a href="http://www.marianoram.com" className="footer-text"> Made by MarianoRam </a>

        </div>
    )
}

export default Footer