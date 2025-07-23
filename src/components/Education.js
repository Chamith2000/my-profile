import React from 'react';

function Education() {
    return (
        <div className="container mx-auto p-8 min-h-screen">
            {/* Header Section (Styled like Skills & Expertise) */}
            <div className="text-center mb-16">
                <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 mb-4">
                    Education
                </h2>
                <p className="text-gray-600 text-lg">
                    My academic journey and qualifications
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                {/* Education Illustration */}
                <div className="relative flex-shrink-0">
                    {/* Decorative elements around illustration */}
                    <div className="absolute -top-4 -left-4 w-4 h-4 bg-yellow-400 transform rotate-45"></div>
                    <div className="absolute -top-2 right-8 w-3 h-3 bg-pink-500 transform rotate-45"></div>
                    <div className="absolute top-16 -left-8 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-32 -right-6 w-4 h-4 bg-yellow-400 transform rotate-45"></div>
                    <div className="absolute bottom-16 -left-6 w-3 h-3 bg-pink-500 transform rotate-45"></div>
                    <div className="absolute -bottom-4 right-4 w-4 h-4 bg-cyan-400 transform rotate-45"></div>

                    {/* Main Illustration Container */}
                    <div className="relative w-96 h-80 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-3xl shadow-2xl overflow-hidden">
                        {/* Books stack */}
                        <div className="absolute bottom-0 left-8 w-32 h-40 bg-gradient-to-t from-teal-400 to-green-400 rounded-t-lg transform -rotate-12"></div>
                        <div className="absolute bottom-0 left-12 w-28 h-36 bg-gradient-to-t from-blue-400 to-cyan-400 rounded-t-lg transform rotate-6"></div>
                        <div className="absolute bottom-0 left-16 w-24 h-32 bg-gradient-to-t from-purple-400 to-pink-400 rounded-t-lg transform -rotate-3"></div>

                        {/* Students */}
                        {/* Student 1 - Sitting on books */}
                        <div className="absolute bottom-32 left-20">
                            <div className="w-12 h-12 bg-pink-300 rounded-full border-2 border-white"></div>
                            <div className="w-16 h-20 bg-red-500 rounded-lg -mt-2"></div>
                            <div className="w-14 h-14 bg-gray-700 rounded-lg -mt-1 mx-1"></div>
                        </div>

                        {/* Student 2 - Standing */}
                        <div className="absolute bottom-8 right-20">
                            <div className="w-12 h-12 bg-orange-200 rounded-full border-2 border-white"></div>
                            <div className="w-16 h-24 bg-blue-600 rounded-lg -mt-2"></div>
                            <div className="w-4 h-16 bg-blue-600 rounded-full -mt-1 mx-6"></div>
                            <div className="w-4 h-16 bg-blue-600 rounded-full -mt-16 mx-6"></div>
                        </div>

                        {/* Student 3 - Small child */}
                        <div className="absolute bottom-16 left-8">
                            <div className="w-8 h-8 bg-yellow-200 rounded-full border-2 border-white"></div>
                            <div className="w-12 h-16 bg-red-400 rounded-lg -mt-1"></div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute top-8 left-12 w-16 h-12 bg-white rounded-lg shadow-lg transform rotate-12">
                            <div className="w-full h-2 bg-gray-300 rounded-t-lg"></div>
                            <div className="p-1">
                                <div className="w-full h-1 bg-gray-200 rounded mb-1"></div>
                                <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                            </div>
                        </div>

                        <div className="absolute top-16 right-16 w-14 h-10 bg-white rounded-lg shadow-lg transform -rotate-6">
                            <div className="w-full h-2 bg-gray-300 rounded-t-lg"></div>
                            <div className="p-1">
                                <div className="w-full h-1 bg-gray-200 rounded mb-1"></div>
                                <div className="w-2/3 h-1 bg-gray-200 rounded"></div>
                            </div>
                        </div>

                        {/* Geometric shapes */}
                        <div className="absolute top-4 right-8 w-8 h-8 bg-pink-500 transform rotate-45"></div>
                        <div className="absolute bottom-40 right-8 w-12 h-12 bg-cyan-400 rounded-full"></div>
                    </div>
                </div>

                {/* Education Content */}
                <div className="flex-1 max-w-2xl space-y-8">
                    {/* Degree */}
                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">BSc (Hons) in Information Technology (Undergraduate)</h3>
                        <p className="text-blue-600 font-semibold text-lg mb-2">Faculty of Computing, SLIIT</p>
                        <p className="text-gray-600 font-medium">June 2022 - June 2026</p>
                    </div>

                    {/* A/L */}
                    <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Physical Science (Maths Stream)</h3>
                        <p className="text-green-600 font-semibold text-lg mb-2">Bandarawela Central College, Bandarawela, Sri Lanka</p>
                        <p className="text-gray-600 font-medium">Dec 2010 - Dec 2018</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;