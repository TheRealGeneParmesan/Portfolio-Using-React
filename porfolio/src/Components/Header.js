import React from 'react';

function Header({ scrollTo, aboutRef, portfolioRef }) {
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

    const handleAboutClick = () => {
        scrollTo(aboutRef);
    };

    const handlePortfolioClick = () => {
        scrollTo(portfolioRef);
    };

    return (
        <header style={headerStyle}>
            <a href="#" style={logoStyle}>Jeremy's Portfolio</a>
            <nav style={navStyle}>
                <a href="#" onClick={handleAboutClick} style={linkStyle}>
                    About Me</a>
                <a href="#" onClick={handlePortfolioClick} style={linkStyle}>Portfolio</a>
                <a href="#" style={linkStyle}>Contact</a>
                <a href="https://drive.google.com/file/d/1e3Zb2WcTcovOG6Jd4n3QcgBsLFgbtDGs/view" style={linkStyle}>Resume</a>
            </nav>
        </header>
    );
}

export default Header;