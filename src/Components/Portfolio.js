import React from 'react';
import { projects } from './Project';
import { BsGithub } from "react-icons/bs";

function Portfolio() {
    const projectPhotos = {
        maxWidth: '100%',
        width: '40rem',
        height: '20rem',
        borderRadius: '1rem',
        border: '2px solid #9C95DC',
    };

    const projectTitle = {
        fontSize: '3.5rem',
        color: '#9C95DC',
    }

    const projectDescription = {
        fontSize: '1.5rem',
        color: '#9C95DC',
        marginBottom: '3rem'
    }

    const projectLogo = {
        textDecoration: 'none',
        color: '#9C95DC',
    };

    return (
        <section id="projects">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4" style={projectTitle}>
                        My Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base" style={projectDescription}>
                        Here are several projects I have worked on in the last few months.
                        <br></br>
                        <br></br>
                        Click on the images to be taken to the deployed application or the Github icon to be taken to the repository.
                    </p>
                </div>
                <div className="flex flex-wrap flew-rox -m-4" style={projectTitle}>
                    {projects.map((project, index) => (
                        <div key={project.image} className="sm:w-1/2 w-100 p-4">
                            <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
                            <div
                                className={`flex relative ${index % 3 === 0 ? 'justify-start' : index % 3 === 2 ? 'justify-end' : ''}`}
                                style={{ flexDirection: 'column' }}
                            >
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        alt="gallery"
                                        src={project.image}
                                        style={projectPhotos}
                                        className="w-1/3"
                                    />
                                </a>
                                <div style={{ marginTop: '1rem' }}>
                                    <a href={project.git} target="_blank" rel="noopener noreferrer">
                                        <BsGithub style={projectLogo} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;