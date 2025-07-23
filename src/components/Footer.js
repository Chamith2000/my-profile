import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white text-center p-6 mt-8">
            <h3 className="text-xl font-semibold mb-2">CHAMITH RATHDUNU</h3>
            <div className="flex justify-center space-x-4 mb-2">
                <a href="/education" className="hover:text-gray-300">Education</a>
                <a href="/experience" className="hover:text-gray-300">Experience</a>
                <a href="/projects" className="hover:text-gray-300">Projects</a>
                <a href="/skills" className="hover:text-gray-300">Skills</a>
            </div>
            <p className="text-gray-400">Colombo, Sri Lanka</p>
            <p className="text-gray-400">chamithrathdunu2@gmail.com</p>
            <div className="flex justify-center space-x-4 mt-2">
                <i className="fab fa-facebook text-xl"></i>
                <i className="fab fa-twitter text-xl"></i>
                <i className="fab fa-linkedin text-xl"></i>
            </div>
            <p className="mt-2 text-gray-500">© 2025 Chamith Rathdunu. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
