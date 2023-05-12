import React, { useState } from 'react';

function Header() {
    const [showNav, setShowNav] = useState(false);

    const handleToggle = () => {
        setShowNav(!showNav);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a
                className="navbar-brand"
                href="/"
                style={{ color: '#9c95dc', fontSize: '3rem', fontFamily: 'Merriweather', padding: '.1rem', marginLeft: '1rem' }}
                onMouseEnter={(e) => (e.target.style.color = 'turquoise')}
                onMouseLeave={(e) => (e.target.style.color = '#9C95DC')}
            >
                Jeremy's Portfolio
            </a>
            <button
                className="navbar-toggler"
                type="button"
                onClick={handleToggle}
                aria-controls="navbarMenu"
                aria-expanded={showNav}
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse${showNav ? ' show' : ''}`} id="navbarMenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#about"
                            onMouseEnter={(e) => (e.target.style.color = '#3494e6')}
                            onMouseLeave={(e) => (e.target.style.color = '#9C95DC')}
                        >
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#projects"
                            onMouseEnter={(e) => (e.target.style.color = '#b2fefa')}
                            onMouseLeave={(e) => (e.target.style.color = '#9C95DC')}
                        >
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="#contact"
                            onMouseEnter={(e) => (e.target.style.color = '#a80077')}
                            onMouseLeave={(e) => (e.target.style.color = '#9C95DC')}
                        >
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="https://drive.google.com/file/d/1e3Zb2WcTcovOG6Jd4n3QcgBsLFgbtDGs/view"
                            onMouseEnter={(e) => (e.target.style.color = '#00f260')}
                            onMouseLeave={(e) => (e.target.style.color = '#9C95DC')}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
