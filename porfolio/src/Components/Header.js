import React from 'react';

function Header() {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        backgroundColor: '#95B8D1',
        color: '#fff'
    };

    const logoStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: '#fff'
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold'
    };

    const linkStyle = {
        marginLeft: '2rem',
        textDecoration: 'none',
        color: '#fff'
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