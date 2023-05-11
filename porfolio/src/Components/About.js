import React from "react";
import coffee from "../images/coffee.jpg";

function About() {
    const titleStyle = { color: "#9C95DC" };

    const paragraphStyle = {
        color: "#9C95DC",
        fontFamily: "Merriweather",
        fontSize: "1.5rem",
    };

    return (
        <section id="about" style={{ marginTop: "8rem", marginRight: "8rem" }}>
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
                            in International Affairs and Global Public Health. I am now finishing the University of San Diego's Full-Stack Coding
                            Bootcamp. <br></br>
                            <br></br>I have experience using:
                            <br></br>
                            HTML
                            <br></br>
                            CSS
                            <br></br>
                            JavaScript
                            <br></br>
                            Node.js
                            <br></br>
                            Express.js
                            <br></br>
                            React.js
                            <br></br>
                            MySQL
                            <br></br>
                            MongoDB
                            <br></br>
                            Python
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
        </section>
    );
}

export default About;
