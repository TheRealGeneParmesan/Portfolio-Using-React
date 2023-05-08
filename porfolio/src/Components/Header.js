import React from 'react';

function Header() {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
    };

    const logoStyle = {
        fontSize: '2rem',
        textDecoration: 'none',
        color: '#9C95DC',
        fontFamily: "Merriweather",
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "Merriweather",
        fontSize: '1.5rem',
    };

    const linkStyle = {
        marginLeft: '2rem',
        textDecoration: 'none',
        color: '#9C95DC',
    };

    return (
        <header style={headerStyle}>
            <a href="#" style={logoStyle}>Jeremy's Portfolio</a>
            <nav style={navStyle}>
                <a href="#" style={linkStyle}>Home</a>
                <a href="#" style={linkStyle}>About</a>
                <a href="#" style={linkStyle}>Projects</a>
                <a href="#" style={linkStyle}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;