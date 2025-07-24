import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navbar() {
    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">

                {/* Logo and Site Name */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Chamith Rathdunu Logo" className="h-10 w-auto" />
                    <h1 className="text-2xl font-bold text-blue-700">Chamith Rathdunu</h1>
                </div>

                {/* Navigation Links */}
                <div className="space-x-6 hidden md:flex">
                    <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
                    <Link to="/education" className="text-gray-700 hover:text-blue-600 transition">Education</Link>
                    <Link to="/experience" className="text-gray-700 hover:text-blue-600 transition">Experience</Link>
                    <Link to="/skills" className="text-gray-700 hover:text-blue-600 transition">Skills</Link>
                    <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition">Projects</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
