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
        height: '100vh'
    };

    const topSection = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: '5rem'
    }

    const introTitleStyle = {
        fontSize: '5rem',
        color: '#9C95DC',
        fontFamily: 'Merriweather',
        padding: '2rem',
        transform: hover ? 'translateY(-10px)' : 'none',
        transition: 'transform 0.2s ease-out'
    };



    const introBodyStyle = {
        fontSize: '2rem',
        color: '#9C95DC',
        fontFamily: "Merriweather",
        marginRight: '6rem'

    };

    const introPhotoStyle = {
        maxWidth: '100%',
        width: '30rem',
        height: '30rem',
        borderRadius: '50%',
        border: '2px solid #9C95DC',
        alignSelf: 'center',
        margin: '1rem',
    };

    const introLogoText = {
        fontSize: '3.5rem',
        color: '#9C95DC',
        fontFamily: "Merriweather",
        padding: '.1rem',
        marginBottom: '1rem',
        textAlign: 'center'
    };

    const logoContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    }

    const introLogoStyle = {
        width: '16rem',
        padding: '1rem',
        fontSize: '3rem',
        textDecoration: 'none',
        color: '#9C95DC',
    };

    const bottomSection = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '2rem'
    };


    return (
        <div style={containerStyle}>
            <div style={topSection}>
                <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                    <h1 style={introTitleStyle}>
                        <span
                            style={introLogoText}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            Full-Stack Developer
                        </span>
                    </h1>
                    <p style={introBodyStyle}>Hi, I am Jeremy and I created my portfolio using React.
                        <br />I am enrolled in the University of San Diego's Full-Stack Coding Bootcamp.
                    </p>

                </div>
                <div>
                    <img src={SukiMo2} alt="SukiMo" style={introPhotoStyle} />
                </div>
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
