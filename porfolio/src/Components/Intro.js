import React from 'react';
import { IoLogoJavascript } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";



import SukiMo2 from "./SukiMo2.jpg";


function Introduction() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5rem',
        color: '#9C95DC',
    };

    const introTitleStyle = {
        fontSize: '3rem',
        color: '#9C95DC',
        fontFamily: "Merriweather",
        padding: '2rem',
    };

    const introBodyStyle = {
        fontSize: '1.2rem',
        color: '#9C95DC',
        fontFamily: "Merriweather",
        marginRight: '6rem'

    };

    const introLogoStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '20rem',
        textDecoration: 'none',
        color: '#9C95DC',
    };

    const introPhotoStyle = {
        maxWidth: '100%',
        width: '15rem',
        height: '15rem',
        borderRadius: '50%',
        border: '2px solid #9C95DC',
        alignSelf: 'center',
        margin: '1rem',
    };

    const introTechStyle = {
        fontSize: '1.3rem',
        color: '#9C95DC',
        fontFamily: "Merriweather",
        padding: '.2rem',
        marginLeft: '3rem',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h1 style={introTitleStyle}>Full-Stack Developer</h1>
                <img src={SukiMo2} alt="SukiMo" style={introPhotoStyle} />
            </div>
            <div>
                <p style={introBodyStyle}>Hi, I am Jeremy and I created my portfolio using React.
                    <br />I am enrolled in the University of San Diego's Full-Stack Coding Bootcamp.
                </p>
                <div style={introTechStyle}> <br />  Tech Stack:
                </div>
            </div>

            <div style={introLogoStyle}>
                <a href="https://www.w3schools.com/js/" style={introLogoStyle}><IoLogoJavascript /></a>
                <a href="https://legacy.reactjs.org/docs/getting-started.html" style={introLogoStyle}><FaReact /></a>
                <a href="https://www.w3schools.com/html/" style={introLogoStyle}><AiFillHtml5 /></a>
                <a href="https://www.w3schools.com/css/" style={introLogoStyle}><SiCss3 /></a>
                <a href="https://www.w3schools.com/mongodb/" style={introLogoStyle}><SiMongodb /></a>
                <a href="https://www.w3schools.com/MySQL/default.asp" style={introLogoStyle}><SiMysql /></a>
            </div>
        </div>
    );
}

export default Introduction;
