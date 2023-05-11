import React from "react";

function About({ aboutRef }) {

    const aboutStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10rem',
        color: '#9C95DC',
        fontFamily: "Merriweather",
    }
    return (
        <section ref={aboutRef}>
            <div style={aboutStyle}>
                <h1 className="text-center">
                    About Me:
                </h1>
                <p className="mb-8 leading-relaxed">
                    I graduated from George Washington University in 2017 with a degree in International Affairs and Global Public Health.
                    I am now almost finished with the University of San Diego's Full-Stack Coding Bootcamp. I have worked with HTML, CSS, JavaScript, Node.js, Express.js, React.js, MySQL, MongoDB, and more.
                </p>
            </div>
        </section>
    );
}

export default About;