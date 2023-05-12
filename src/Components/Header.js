import React from 'react';

function Header() {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
    };

    const logoStyle = {
        fontSize: '3rem',
        textDecoration: 'none',
        color: '#9C95DC',
        fontFamily: "Merriweather",
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "Merriweather",
        fontSize: '2rem',
    };

    const linkStyle = {
        marginLeft: '2rem',
        textDecoration: 'none',
        color: '#9C95DC',
        position: 'relative',
    };

    const logoHoverStyle = {
        color: '#f7971e',
    };

    const aboutLinkHoverStyle = {
        color: '#3494e6',
    };

    const projectsLinkHoverStyle = {
        color: '#b2fefa',
    };

    const contactLinkHoverStyle = {
        color: '#a80077',
    };

    const resumeLinkHoverStyle = {
        color: '#00f260',
    };

    return (
        <header id="header" style={headerStyle}>
            <a href="#header" style={logoStyle}
                onMouseEnter={(e) => e.target.style.color = logoHoverStyle.color}
                onMouseLeave={(e) => e.target.style.color = logoStyle.color}>
                Jeremy's Portfolio
            </a>
            <nav style={navStyle}>
                <a href="#about" style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = aboutLinkHoverStyle.color}
                    onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                    About Me</a>
                <a href="#projects" style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = projectsLinkHoverStyle.color}
                    onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                    Projects</a>
                <a href="#contact" style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = contactLinkHoverStyle.color}
                    onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                    Contact</a>
                <a href="https://drive.google.com/file/d/1e3Zb2WcTcovOG6Jd4n3QcgBsLFgbtDGs/view"
                    style={linkStyle}
                    onMouseEnter={(e) => e.target.style.color = resumeLinkHoverStyle.color}
                    onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                    Resume</a>
            </nav>
        </header>
    );
}

export default Header;
