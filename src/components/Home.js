import React from 'react';

function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col text-center p-4">
            <h1 className="text-4xl font-bold text-blue-800 mb-2">Hi, I'm Chamith Rathdunu!</h1>
            <p className="text-lg text-gray-600 mb-6">Passionate Backend Developer specializing in Spring Boot and MERN Stack development. Building robust and scalable server-side solutions.</p>
            <div className="flex space-x-2 mb-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Spring Boot</button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400">Java</button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400">Node.js</button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400">React.js</button>
            </div>
            <a href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">View Projects</a>
            <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-github"></i></a>
                <a href="#" className="text-blue-600 hover:text-blue-800"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
    );
}

export default Home;