import React from 'react';

function Footer() {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'right',
        padding: '1rem',
        backgroundColor: '#95B8D1',
        color: '#fff',
        fontWeight: 'bold',

    }
    return (
        <footer style={footerStyle}>
            Jeremys Portfolio 2023
        </footer>
    )
}

export default Footer;