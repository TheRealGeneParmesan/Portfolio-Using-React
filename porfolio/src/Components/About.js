import React from "react";
import coffee from "../images/coffee.jpg";

function About() {
    const titleStyle = {
        color: "#9C95DC",
        fontFamily: "Oswald",
        fontSize: "3rem",
    };

    const paragraphStyle = {
        color: "#9C95DC",
        fontFamily: "Oswald",
        fontSize: "1.5rem",
    };

    return (
        <section id="about" style={{ marginTop: "2rem", marginRight: "8rem" }}>
            <div className="container ml-md-4">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h1
                            className="text-center mb-4 mbd-md-0 m1-md-4"
                            style={titleStyle}
                        >
                            About Me
                        </h1>
                        <p className="leading-relaxed m1-md-4" style={paragraphStyle}>
                            I graduated from George Washington University in 2017 with a degree
                            in International Affairs and Global Public Health. I completed the University of San Diego's Full-Stack Coding
                            Bootcamp program with my certification in June of 2023.
                            <br /><br />
                            As A Full Stack Developer, I Work With:
                            <br />
                            <span>&bull; HTML</span>
                            <br />
                            <span>&bull; CSS</span>
                            <br />
                            <span>&bull; JavaScript</span>
                            <br />
                            <span>&bull; Node.js</span>
                            <br />
                            <span>&bull; Express.js</span>
                            <br />
                            <span>&bull; React.js</span>
                            <br />
                            <span>&bull; MySQL</span>
                            <br />
                            <span>&bull; MongoDB</span>
                            <br />
                            <span>&bull; Python</span>
                        </p>
                    </div>
                    <div className="photo col-sm-12 col-md-6">
                        <img
                            src={coffee}
                            alt="Coffee"
                            style={{ width: "100%", height: "80%", borderRadius: "10%" }}
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default About;
