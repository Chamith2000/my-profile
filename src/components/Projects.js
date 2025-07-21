import React from 'react';

function Projects() {
    const projects = [
        {
            title: 'MERN Stack Timber Company Management System',
            description: 'This project is a Timber Company Management Web using the MERN stack. This project seamlessly integrates MongoDB, Express.js, React.js, and Node.js for a robust management system. From inventory tracking to streamlined communication, witness how this MERN project optimizes operations for timber companies.',
            technologies: ['MERN Stack', 'CSS'],
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'Tourism Mobile App Development',
            description: 'This project is our second year Mad module project. This app mainly focused on promote tourism industry in Sri Lanka.',
            technologies: ['Kotlin'],
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'Movie Website Design',
            description: 'Mobile website design using HTML, pure CSS, and vanilla JS. This is a like Netflix with HTML and CSS.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: 'https://via.placeholder.com/300',
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow-md w-full md:w-1/3">
                        <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{tech}</span>
                            ))}
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Project Code</button>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Show More</button>
            </div>
        </div>
    );
}

export default Projects;