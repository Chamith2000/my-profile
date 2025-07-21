import React from 'react';

function Experience() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <div className="flex flex-col items-center">
                <img src="https://via.placeholder.com/300" alt="Experience Illustration" className="mb-4" />
                <div>
                    <p className="text-lg"><strong>Full Stack Developer</strong></p>
                    <p>Colombo, Sri Lanka, Sep 2022 - Jul 2025</p>
                    <p>Technologies: MERN</p>
                    <hr className="my-4" />
                    <p className="text-lg"><strong>Intern Software Engineer</strong></p>
                    <p>ZeroCode Software, Colombo, Jan 2025 - Jul 2025</p>
                    <p>Technologies: Java, Java Spring Boot</p>
                    <hr className="my-4" />
                </div>
            </div>
        </div>
    );
}

export default Experience;