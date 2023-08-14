import React, { useState } from 'react';
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";



import SukiMo2 from "../images/SukiMo2.jpg";


function Introduction() {
    const [hover, setHover] = useState(false);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        color: '#9C95DC',
        height: '100%',
        marginTop: '3rem'
    };

    const introTitleStyle = {
        fontSize: '5rem',
        color: '#9C95DC',
        fontFamily: 'Oswald',
        padding: '2rem',
        transform: hover ? 'translateY(-10px)' : 'none',
        transition: 'transform 0.2s ease-out'
    };

    const introBodyStyle = {
        fontSize: '2rem',
        color: '#9C95DC',
        fontFamily: 'Oswald',
    };

    const introPhotoStyle = {
        maxWidth: '100%',
        maxHeight: '100%',
        width: '20rem',
        height: '20rem',
        borderRadius: '50%',
        border: '2px solid #9C95DC',
    };

    const introLogoText = {
        fontSize: '3rem',
        display: 'flex',
        justifyContent: 'center',
        color: '#9C95DC',
        fontFamily: "Oswald",
        padding: '.1rem',
    };

    const logoContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    };

    const introLogoStyle = {
        width: '15rem',
        padding: '1rem',
        fontSize: '3rem',
        textDecoration: 'none',
        color: '#9C95DC',
    };

    const bottomSection = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '2rem',
        textAlign: 'center',
    };






    return (
        <div style={containerStyle}>
            <h1 style={introTitleStyle}>
                <span
                    style={introLogoText}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    Full-Stack Developer
                </span>
            </h1>
            <p style={introBodyStyle}> Hey, I'm Jeremy. I'm a full-stack developer who enjoys building web applications. I'm currently looking for a full-time position as a developer.
                <br /> Please feel free to contact me with any questions.
            </p>

            <div>
                <img src={SukiMo2} alt="SukiMo" style={introPhotoStyle} />
            </div>

            <div style={bottomSection}>

                <div style={introLogoText}> <br />  Tech Stack:
                </div>
                <div style={logoContainer}>
                    <a href="https://www.w3schools.com/js/" style={introLogoStyle}><IoLogoJavascript /></a>
                    <a href="https://legacy.reactjs.org/docs/getting-started.html" style={introLogoStyle}><FaReact /></a>
                    <a href="https://www.w3schools.com/html/" style={introLogoStyle}><AiFillHtml5 /></a>
                    <a href="https://www.w3schools.com/css/" style={introLogoStyle}><SiCss3 /></a>
                    <a href="https://www.w3schools.com/mongodb/" style={introLogoStyle}><SiMongodb /></a>
                    <a href="https://www.w3schools.com/MySQL/default.asp" style={introLogoStyle}><SiMysql /></a>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
