import React from 'react';

function Contact() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <div className="flex flex-col md:flex-row justify-center items-start">
                <form className="w-full md:w-1/2 p-4">
                    <input type="text" placeholder="Your name" className="w-full p-2 mb-4 border rounded" />
                    <input type="email" placeholder="Your email" className="w-full p-2 mb-4 border rounded" />
                    <input type="text" placeholder="Subject" className="w-full p-2 mb-4 border rounded" />
                    <textarea placeholder="Your message" className="w-full p-2 mb-4 border rounded h-32"></textarea>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
                </form>
                <div className="w-full md:w-1/2 p-4 text-center">
                    <p><i className="ph ph-map-pin text-blue-600"></i> Colombo, Sri Lanka</p>
                    <p><i className="ph ph-envelope text-blue-600"></i> chamithrathdunu2@gmail.com</p>
                </div>
            </div>
            <div className="bg-gray-800 text-white text-center p-4 mt-8">
                <h3 className="text-xl font-semibold mb-2">CHAMITH RATHDUNU</h3>
                <div className="flex justify-center space-x-4 mb-2">
                    <a href="#" className="hover:text-gray-300">Education</a>
                    <a href="#" className="hover:text-gray-300">Experience</a>
                    <a href="#" className="hover:text-gray-300">Projects</a>
                    <a href="#" className="hover:text-gray-300">Skills</a>
                </div>
                <p className="text-gray-400">Colombo,Sri Lanka</p>
                <p className="text-gray-400">chamithrathdunu2@gmail.com</p>
            </div>
        </div>
    );
}

export default Contact;