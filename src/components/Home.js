import React, { useState, useEffect } from 'react';
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import {useNavigate} from "react-router-dom";

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTech, setCurrentTech] = useState(0);
    const [showButton, setShowButton] = useState(false);

    const techStack = [
        { name: 'Spring Boot', color: 'bg-green-500', icon: '🍃' },
        { name: 'Java', color: 'bg-orange-500', icon: '☕' },
        { name: 'Node.js', color: 'bg-green-600', icon: '🟢' },
        { name: 'React.js', color: 'bg-blue-500', icon: '⚛️' },
        { name: 'MongoDB', color: 'bg-green-700', icon: '🍃' },
        { name: 'MySQL', color: 'bg-blue-600', icon: '🗄️' }

    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentTech((prev) => (prev + 1) % techStack.length);
        }, 2000);

        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const FloatingElement = ({ delay, position, icon, color }) => (
        <div
            className={`absolute w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl ${position} animate-bounce`}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: '3s'
            }}
        >
            <span className={color}>{icon}</span>
        </div>
    );

    const navigate = useNavigate();

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute inset-0">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 container mx-auto px-6 py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                        {/* Left Content */}
                        <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-green-400 font-medium">Available for opportunities</span>
                                </div>

                                <h1 className="text-5xl lg:text-6xl font-black leading-tight">
                                    <span className="text-white block">Hi, I'm</span>
                                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
                                        Chamith Rathdunu
                                    </span>
                                </h1>

                                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                                    Passionate <span className="text-cyan-400 font-semibold">Backend Developer</span> specializing in
                                    <span className="text-blue-400 font-semibold"> Spring Boot</span> and
                                    <span className="text-purple-400 font-semibold"> MERN Stack</span> development.
                                    Building robust and scalable server-side solutions.
                                </p>
                            </div>

                            {/* Dynamic Tech Stack Display */}
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                                <div className="flex items-center space-x-3 mb-4">
                                    <span className="text-cyan-400 text-xl">💻</span>
                                    <span className="text-white font-semibold">Currently working with</span>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {techStack.map((tech, index) => (
                                        <div
                                            key={tech.name}
                                            className={`px-4 py-2 rounded-full transition-all duration-500 transform ${
                                                index === currentTech
                                                    ? `${tech.color} text-white scale-110 shadow-lg`
                                                    : 'bg-white/20 text-gray-300 hover:bg-white/30'
                                            }`}
                                        >
                                            <span className="mr-2">{tech.icon}</span>
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => navigate('/projects')}
                                    className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                                    <span className="flex items-center space-x-2">
                                        <span className="text-lg">🚀</span>
                                        <span>View Projects</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Profile Image with Floating Elements */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
                                    <div className="absolute inset-0 bg-gradient-to-tl from-blue-400 via-purple-500 to-pink-500 rounded-3xl transform -rotate-6 opacity-20"></div>

                                    <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 rounded-3xl shadow-2xl overflow-hidden border-4 border-white/20">
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-500">
                                            <div className="text-6xl text-slate-600">👨‍💻</div>
                                        </div>
                                    </div>

                                    <FloatingElement delay={0} position="-top-6 -right-6" icon="⚛️" color="text-blue-500" />
                                    <FloatingElement delay={1} position="-bottom-4 -left-8" icon="🟢" color="text-green-500" />
                                    <FloatingElement delay={2} position="top-1/2 -right-8" icon="☕" color="text-orange-500" />
                                    <FloatingElement delay={0.5} position="-top-8 left-8" icon="🍃" color="text-green-600" />
                                </div>

                                <div className="absolute -bottom-8 -left-12 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-cyan-400 text-2xl">💾</span>
                                        <div>
                                            <div className="text-black font-semibold">3+</div>
                                            <div className="text-black-400 text-sm">Years Experience</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -top-8 -right-16 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-purple-400 text-2xl">🌐</span>
                                        <div>
                                            <div className="text-black font-semibold">10+</div>
                                            <div className="text-black-400 text-sm">Projects Done</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                        animation: fade-in 1s ease-out forwards;
                    }
                `}</style>
            </div>

            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Contact />

            {/* Back to Top Button */}
            {showButton && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 z-50"
                >
                    🔝 Back to Top
                </button>
            )}
        </div>
    );
}

export default Home;
