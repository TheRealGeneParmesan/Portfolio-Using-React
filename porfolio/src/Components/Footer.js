import React from 'react';
import CustomLogo from './Logo';

function Footer() {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: '#95B8D1',
        color: '#fff',
        fontWeight: 'bold',
        textDecoration: 'none',

    }
    return (
        <footer style={footerStyle}>
            <a href="#" style={footerStyle}>Home</a>
            <a href="#" style={footerStyle}>Home</a>
            <a href="#" style={footerStyle}>Home</a>
            <a href="#" style={footerStyle}>Home</a>
            <CustomLogo />

        </footer>
    )
}

export default Footer;