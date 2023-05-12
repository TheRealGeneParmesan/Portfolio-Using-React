import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
        color: '#9C95DC',
        fontWeight: 'bold',
        fontFamily: "Merriweather",
        textDecoration: 'none',
        fontSize: '1rem',

    }
    return (
        <footer style={footerStyle}>
            <a href="https://github.com/TheRealGeneParmesan" style={footerStyle}><BsGithub /></a>
            <a href="https://www.linkedin.com/in/gene-parmesan-02b495266/" style={footerStyle}><BsLinkedin /></a>
            <a href="https://musical-chairs.herokuapp.com/login" style={footerStyle}>Musical-Chairs-Full-Stack-App</a>
            <a href="#contact" style={footerStyle}>Contact Me</a>

        </footer>
    )
}

export default Footer;