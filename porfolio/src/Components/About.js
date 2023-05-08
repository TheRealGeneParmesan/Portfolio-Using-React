import React from "react";

function About() {

    const aboutStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        color: '#9C95DC',
        fontFamily: "Merriweather",
    }
    return (
        <section id="about">
            <about style={aboutStyle}>
                <div className>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className>
                            About Me:
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            I graduated from George Washington University in 2017 with a degree in International Affairs and Global Public Health.
                            I am now almost finished with the University of San Diego's Full-Stack Coding Bootcamp. I have worked with HTML, CSS, JavaScript, Node.js, Express.js, React.js, MySQL, MongoDB, and more.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#contact"
                                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            </a>
                            <a
                                href="#projects"
                                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            </a>
                        </div>
                    </div>
                </div>
            </about>
        </section>
    );
}

export default About;