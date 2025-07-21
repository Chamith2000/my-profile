import React from 'react';

function Hero() {
    return (
        <section id="home" className="bg-blue-100 py-20 text-center">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Web Suite</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">A showcase of my work and passion</p>
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Get in Touch</a>
            </div>
        </section>
    );
}

export default Hero;