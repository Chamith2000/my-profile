import React from 'react';

function Skills() {
    const skills = [
        { name: 'MERN', percentage: 80 },
        { name: 'HTML', percentage: 95 },
        { name: 'CSS', percentage: 92 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'Java', percentage: 88 },
        { name: 'SQL/DBMS', percentage: 85 },
        { name: 'Node', percentage: 80 },
        { name: 'React.js', percentage: 90 },
        { name: 'Spring', percentage: 90 },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            {skills.map((skill, index) => (
                <div key={index} className="mb-2">
                    <div className="flex justify-between">
                        <span>{skill.name}</span>
                        <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;