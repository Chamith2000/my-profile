import React from 'react';
import myImage from "../assets/images/Profile Photo1.jpeg";

function About() {
    return (
        <div className="container mx-auto p-8">
            {/* Header Section (Styled like Skills & Expertise) */}
            <div className="text-center mb-12">
                <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 mb-4">
                    About Me
                </h2>
                <p className="text-gray-600 text-lg">
                    A glimpse into my journey and expertise
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-4"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* Profile Image with Geometric Shapes */}
                <div className="relative flex-shrink-0">
                    {/* Background geometric shapes */}
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-400 rounded-full opacity-80"></div>
                    <div className="absolute -top-4 -right-8 w-24 h-24 bg-cyan-400 rounded-lg opacity-80 transform rotate-45"></div>
                    <div
                        className="absolute -bottom-8 -left-4 w-28 h-28 bg-green-400 opacity-80 transform rotate-12"
                        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                    ></div>
                    <div className="absolute -bottom-4 -right-6 w-20 h-20 bg-yellow-400 rounded-full opacity-80"></div>

                    {/* Profile Image */}
                    <div className="relative z-10 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <img
                            src={myImage}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* About Text */}
                <div className="flex-1 max-w-2xl">
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p className="text-lg">
                            As a dedicated fourth-year Information Technology student at SLIIT, I am passionate about leveraging cutting-edge
                            technologies to create innovative solutions that make a real difference. My academic journey has equipped me with a
                            robust foundation in software engineering, specializing in both Java Spring Boot and MERN stack development.
                        </p>

                        <p className="text-lg">
                            In the Java ecosystem, I have extensive experience with Spring Boot, Spring Security, and Spring Data JPA. I excel in
                            developing enterprise-level applications using Spring Framework's core features including Dependency Injection,
                            AOP, and Transaction Management. My expertise extends to implementing RESTful APIs with OAuth2
                            authentication, JPA/Hibernate for database operations, and integration with various databases including MySQL and
                            MongoDB.
                        </p>

                        <p className="text-lg">
                            Additionally, I specialize in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js). My technical expertise extends to Docker containerization, SonarQube, Flyway DB migration, RabbitMQ, Redis, and Swagger.
                        </p>

                        <p className="text-lg">
                            Throughout my academic career and internships, I've successfully delivered multiple projects that demonstrate my
                            ability to transform complex requirements into elegant, user-centric solutions using both Spring Boot and MERN
                            stack technologies. I'm particularly skilled in microservices architecture, API development, and implementing robust
                            security measures.
                        </p>

                        <p className="text-lg">
                            Beyond technical skills, I bring strong leadership abilities and a commitment to writing clean, maintainable code. I
                            stay current with industry trends and best practices in both Java and JavaScript ecosystems, constantly expanding my
                            knowledge through continuous learning and practical application.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;