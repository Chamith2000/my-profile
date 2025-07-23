import React, { useState } from 'react';
import artHiveImage from "../assets/images/ArtHive.jpg";
import academicSchedulerImage from "../assets/images/AcademicScheduler.jpg";
import motorcycleDealershipImage from "../assets/images/MotorcycleDealership.jpg";

function Projects() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            title: 'skill-share-api',
            description: 'ArtHive is a web-based platform crafted to build a thriving community for creatives passionate about graphic design and multimedia. It serves as a hub where users can share skills, learn from one another, and collaborate in disciplines like UI/UX Design, Video Editing, Animation, and Photography.',
            technologies: ['Spring Boot', 'React.js', 'MySql'],
            image: artHiveImage,
            category: 'Full Stack Web Application',
            status: 'Completed',
            gradient: 'from-blue-600 via-purple-600 to-indigo-800',
            githubLink: 'https://github.com/Chamith2000/skill-share-api'
        },
        {
            title: 'Academic Scheduler',
            description: 'The **Academic Scheduler** is a comprehensive system designed to streamline the creation and management of conflict-free timetables for educational institutions. It includes four core components—**Course Management**, **Instructor Management**, **Classroom Management**, and **Timetable Management**—each supporting full CRUD operations and detailed report generation (e.g., course lists, instructor workloads, room utilization, and complete timetables). Students and instructors can register and view their personalized schedules via their profiles. A standout feature is the **AI-powered Smart Auto-Rescheduler**, which intelligently handles disruptions by reassigning instructors or adjusting time slots, ensuring minimal impact on the overall schedule.',
            technologies: ['Spring Boot', 'React.js', 'MySql'],
            image: academicSchedulerImage,
            category: 'Full Stack Web Application',
            status: 'Completed',
            gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
            githubLink: 'https://github.com/Chamith2000/academic-Scheduler-api'
        },
        {
            title: 'Motorcycle Dealership Management System',
            description: 'The **Motorcycle Dealership Management System** is a web-based application developed to manage motorcycle sales and spare parts efficiently. It allows customers to browse available motorcycles and spare parts, add selected items to a shopping cart, and complete purchases through a smooth checkout process. The system also includes an admin panel for managing inventory, updating product details, and tracking orders. With features like categorized spare parts, real-time inventory updates, and order management, the application enhances dealership operations while providing a convenient and streamlined shopping experience for users.',
            technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.Js'],
            image: motorcycleDealershipImage,
            category: 'Full Stack Web Application',
            status: 'Completed',
            gradient: 'from-red-500 via-pink-600 to-rose-700',
            githubLink: 'https://github.com/TharukaJayawarna/Motorcycle_Dealership_Management_System.git'
        }
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <div className="min-h-screen py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header Section (Styled like Skills & Expertise) */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 mb-4">
                        My Projects
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Explore my collection of innovative projects
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-4"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 z-10">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    project.status === 'Completed'
                                        ? 'bg-green-500/80 text-white'
                                        : 'bg-yellow-500/80 text-black'
                                }`}>
                                    {project.status}
                                </span>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4 z-10">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm border border-gray-200">
                                    {project.category}
                                </span>
                            </div>

                            {/* Project Image with Gradient Overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-90`}></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Hover Overlay */}
                                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                                }`}>
                                    <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors border border-gray-200">
                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors border border-gray-200"
                                    >
                                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                    <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors border border-gray-200">
                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium border border-purple-200 hover:border-purple-300 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center space-x-2 group"
                                >
                                    <span>View Project</span>
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                <div className="text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3 mx-auto"
                    >
                        <span>{showAll ? 'Show Less' : 'Show More Projects'}</span>
                        <div className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-100 rounded-full blur-xl opacity-50"></div>
                <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-100 rounded-full blur-xl opacity-50"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-pink-100 rounded-full blur-xl opacity-50"></div>
            </div>
        </div>
    );
}

export default Projects;