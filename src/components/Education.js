import React from 'react';

function Education() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <div className="flex flex-col items-center">
                <img src="https://via.placeholder.com/300" alt="Education Illustration" className="mb-4" />
                <div>
                    <p className="text-lg"><strong>BSc (Hons) in Information Technology</strong></p>
                    <p>Faculty of Computing, SLIIT, Dec 2021 - Dec 2025</p>
                    <hr className="my-4" />
                    <p className="text-lg"><strong>Physical Science (Maths Stream)</strong></p>
                    <p>Bandarawela Central College, Bandarawela, Sri Lanka, Dec 2010 - Dec 2018</p>
                </div>
            </div>
        </div>
    );
}

export default Education;