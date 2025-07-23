import React, { useState, useEffect } from 'react';

function Skills() {
    const [isVisible, setIsVisible] = useState(false);

    const skills = [
        { name: 'MERN', percentage: 80, color: 'from-green-400 to-green-600' },
        { name: 'HTML', percentage: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS', percentage: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', percentage: 80, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Java', percentage: 90, color: 'from-red-400 to-red-600' },
        { name: 'SQL/DBMS', percentage: 85, color: 'from-purple-400 to-purple-600' },
        { name: 'Node', percentage: 80, color: 'from-green-500 to-green-700' },
        { name: 'React.js', percentage: 85, color: 'from-cyan-400 to-cyan-600' },
        { name: 'Spring', percentage: 90, color: 'from-emerald-400 to-emerald-600' },
    ];

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-gray-600 text-lg">
                        A showcase of my technical proficiencies and capabilities
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-4"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid gap-8 md:gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/80 hover:border-gray-300/80 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-blue-500/20 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Skill Header */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                    {skill.name}
                                </h3>
                                <div className="text-right">
                                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                        {skill.percentage}%
                                    </span>
                                    <div className="text-xs text-gray-500 mt-1">Proficiency</div>
                                </div>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="relative">
                                <div className="w-full bg-gray-200/80 rounded-full h-3 overflow-hidden">
                                    {/* Background Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-full blur-sm"
                                         style={{ background: `linear-gradient(to right, transparent, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>

                                    {/* Progress Fill */}
                                    <div
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden transition-all duration-1000 ease-out`}
                                        style={{
                                            width: isVisible ? `${skill.percentage}%` : '0%',
                                            transitionDelay: `${index * 100 + 300}ms`
                                        }}
                                    >
                                        {/* Shimmer Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>

                                        {/* Moving Highlight */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-pulse opacity-75"></div>
                                    </div>
                                </div>

                                {/* Skill Level Indicator */}
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>Beginner</span>
                                    <span>Intermediate</span>
                                    <span>Advanced</span>
                                    <span>Expert</span>
                                </div>
                            </div>

                            {/* Hover Effect Glow */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                        </div>
                    ))}
                </div>

                {/* Footer Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/60 shadow-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{skills.length}</div>
                        <div className="text-gray-600">Technologies</div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/60 shadow-lg">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                            {Math.round(skills.reduce((acc, skill) => acc + skill.percentage, 0) / skills.length)}%
                        </div>
                        <div className="text-gray-600">Average Proficiency</div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/60 shadow-lg">
                        <div className="text-3xl font-bold text-pink-600 mb-2">
                            {skills.filter(skill => skill.percentage >= 90).length}
                        </div>
                        <div className="text-gray-600">Expert Level</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;