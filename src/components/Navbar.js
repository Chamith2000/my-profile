import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-semibold">Chamith Rathdunu</h1>
                <div className="space-x-4">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                    <Link to="/education" className="hover:underline">Education</Link>
                    <Link to="/experience" className="hover:underline">Experience</Link>
                    <Link to="/skills" className="hover:underline">Skills</Link>
                    <Link to="/projects" className="hover:underline">Projects</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                    <a href="#" className="hover:underline">Sign In</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;