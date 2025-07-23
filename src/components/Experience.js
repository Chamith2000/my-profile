import React from 'react';

function Experience() {
    return (
        <div className="container mx-auto p-8 min-h-screen">
            {/* Header Section (Styled like Skills & Expertise) */}
            <div className="text-center mb-16">
                <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 mb-4">
                    Experience
                </h2>
                <p className="text-gray-600 text-lg">
                    My professional journey and contributions
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                {/* Developer Illustration */}
                <div className="relative flex-shrink-0">
                    {/* Background circle */}
                    <div className="w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full relative overflow-hidden">
                        {/* Mountains in background */}
                        <div className="absolute bottom-0 left-8 w-32 h-40 bg-gradient-to-t from-purple-300 to-purple-200 transform rotate-12" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                        <div className="absolute bottom-0 right-12 w-28 h-36 bg-gradient-to-t from-blue-300 to-blue-200 transform -rotate-6" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                        <div className="absolute bottom-0 left-20 w-24 h-32 bg-gradient-to-t from-indigo-300 to-indigo-200 transform rotate-3" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>

                        {/* Large Monitor/Tablet */}
                        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-56 h-40 bg-purple-800 rounded-xl shadow-2xl">
                            {/* Screen */}
                            <div className="w-full h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-xl p-4">
                                {/* Profile card on screen */}
                                <div className="w-full h-full bg-white rounded-lg p-2 flex items-center">
                                    <div className="w-8 h-8 bg-purple-500 rounded-full mr-2"></div>
                                    <div className="flex-1 space-y-1">
                                        <div className="w-full h-1 bg-gray-300 rounded"></div>
                                        <div className="w-3/4 h-1 bg-gray-300 rounded"></div>
                                        <div className="w-1/2 h-1 bg-gray-300 rounded"></div>
                                    </div>
                                </div>
                            </div>
                            {/* Monitor base */}
                            <div className="w-full h-8 bg-purple-900 rounded-b-xl"></div>
                        </div>

                        {/* Developer 1 - Left side */}
                        <div className="absolute bottom-16 left-12">
                            {/* Head */}
                            <div className="w-12 h-12 bg-orange-200 rounded-full border-2 border-white mb-1"></div>
                            {/* Body */}
                            <div className="w-16 h-20 bg-red-500 rounded-lg relative">
                                {/* Arms */}
                                <div className="absolute -left-2 top-2 w-8 h-3 bg-red-500 rounded-full transform -rotate-12"></div>
                                <div className="absolute -right-2 top-2 w-12 h-3 bg-red-500 rounded-full transform rotate-45"></div>
                            </div>
                            {/* Legs */}
                            <div className="w-16 h-12 bg-blue-600 rounded-lg"></div>
                            {/* Laptop */}
                            <div className="absolute -right-4 top-8 w-8 h-6 bg-gray-700 rounded transform rotate-12">
                                <div className="w-full h4 bg-blue-300 rounded-t"></div>
                            </div>
                        </div>

                        {/* Developer 2 - Right side */}
                        <div className="absolute bottom-16 right-16">
                            {/* Head */}
                            <div className="w-12 h-12 bg-pink-200 rounded-full border-2 border-white mb-1"></div>
                            {/* Body */}
                            <div className="w-16 h-20 bg-red-400 rounded-lg relative">
                                {/* Arms */}
                                <div className="absolute -left-3 top-2 w-10 h-3 bg-red-400 rounded-full transform -rotate-45"></div>
                                <div className="absolute -right-2 top-2 w-8 h-3 bg-red-400 rounded-full transform rotate-12"></div>
                            </div>
                            {/* Legs */}
                            <div className="w-16 h-12 bg-purple-600 rounded-lg"></div>
                            {/* Tablet */}
                            <div className="absolute -left-6 top-6 w-6 h-8 bg-gray-800 rounded transform -rotate-12">
                                <div className="w-full h-6 bg-green-300 rounded-t"></div>
                            </div>
                        </div>

                        {/* Chat bubbles */}
                        <div className="absolute top-16 left-8 w-12 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mx-0.5"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full mx-0.5"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full mx-0.5"></div>
                        </div>

                        <div className="absolute top-12 right-20 w-16 h-10 bg-white rounded-2xl shadow-lg p-2">
                            <div className="w-full h-1 bg-gray-300 rounded mb-1"></div>
                            <div className="w-3/4 h-1 bg-gray-300 rounded"></div>
                        </div>

                        {/* Table/Desk */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                </div>

                {/* Experience Content */}
                <div className="flex-1 max-w-2xl space-y-8">
                    {/* Full Stack Developer */}
                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Full Stack Developer</h3>
                        <p className="text-blue-600 font-semibold text-lg mb-2">Colombo</p>
                        <p className="text-gray-600 font-medium mb-3">Sep 2022 - Jul 2024</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Technologies:</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">MERN</span>
                        </div>
                    </div>

                    {/* Intern Software Engineer - Zerocode */}
                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Trainee Software Engineer</h3>
                        <p className="text-green-600 font-semibold text-lg mb-2">Zerocode Software (Pvt) Ltd, Colombo</p>
                        <p className="text-gray-600 font-medium mb-3">Jan 2025 - Jul 2025</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Technologies:</span>
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Java</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Spring Boot</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;