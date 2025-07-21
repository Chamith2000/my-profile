import React from 'react';

function About() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
                <img src="https://via.placeholder.com/150" alt="Profile" className="w-40 h-40 rounded-full mb-4 md:mb-0 md:mr-6" />
                <p className="text-lg">
                    As a dedicated fourth-year Information Technology student at SLIT, I am passionate about leveraging cutting-edge technologies to create innovative solutions that make a real difference. My academic journey has equipped me with a robust foundation in software engineering, specializing in both Spring Java and MERN stack development...
                </p>
            </div>
        </div>
    );
}

export default About;