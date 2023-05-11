import React from 'react';
import { projects } from './Project';

function Portfolio() {
    const projectPhotos = {
        maxWidth: '100%',
        width: '40rem',
        height: '20rem',
        borderRadius: '1rem',
        border: '2px solid #9C95DC',
    };

    const projectTitle = {
        fontSize: '1.3rem',
        color: '#9C95DC',
    }

    return (
        <section id="projects" style={projectTitle}>
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                        My Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Here are some of the projects I have worked on. Click on the images to be taken to the deployed application.
                    </p>
                </div>
                <div className="flex flex-wrap flew-rox -m-4">
                    {projects.map((project, index) => (
                        <a href={project.link} key={project.image} className="sm:w-1/2 w-100 p-4">
                            <div
                                className={`flex relative ${index % 3 === 0 ? 'justify-start' : index % 3 === 2 ? 'justify-end' : ''
                                    }`}
                                style={{ flexDirection: 'column' }}
                            >
                                <img
                                    alt="gallery"
                                    src={project.image}
                                    style={projectPhotos}
                                    className="w-1/3"
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100" style={{ height: '10rem', position: 'absolute', bottom: '-10rem' }}>
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.description}
                                    </h2>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
