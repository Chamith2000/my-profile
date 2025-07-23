import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [focusedField, setFocusedField] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, 5000);
    };

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Location',
            value: 'Colombo, Sri Lanka',
            description: 'Western Province'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            value: 'chamithrathdunu2@gmail.com',
            description: 'Send me an email'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Phone',
            value: '+94 76 552 3093',
            description: 'Call me anytime'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header Section (Styled like Skills & Expertise) */}
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Let's connect and bring your ideas to life
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-gray-800 mb-3">Send a Message</h3>
                            <p className="text-gray-600">Fill out the form below and I'll get back to you as soon as possible.</p>
                        </div>

                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-bold text-gray-800 mb-3">Message Sent!</h4>
                                <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                            </div>
                        ) : (
                            <div onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField('')}
                                            className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                                                focusedField === 'name' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                            placeholder="Your Name"
                                            required
                                        />
                                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                                            focusedField === 'name' ? 'w-full' : 'w-0'
                                        }`}></div>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField('')}
                                            className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                                                focusedField === 'email' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                            placeholder="Your Email"
                                            required
                                        />
                                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                                            focusedField === 'email' ? 'w-full' : 'w-0'
                                        }`}></div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('subject')}
                                        onBlur={() => setFocusedField('')}
                                        className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none ${
                                            focusedField === 'subject' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                        placeholder="Subject"
                                        required
                                    />
                                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                                        focusedField === 'subject' ? 'w-full' : 'w-0'
                                    }`}></div>
                                </div>

                                <div className="relative">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField('')}
                                        rows="6"
                                        className={`w-full p-4 border-2 rounded-xl transition-all duration-300 bg-gray-50 focus:bg-white focus:outline-none resize-none ${
                                            focusedField === 'message' ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                        placeholder="Your Message"
                                        required
                                    ></textarea>
                                    <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                                        focusedField === 'message' ? 'w-full' : 'w-0'
                                    }`}></div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 group"
                                >
                                    <span>Send Message</span>
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                                <div>
                                    <h4 className="text-red-600 font-bold text-lg">This feature currently not available.</h4>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h3>
                            <p className="text-gray-600 mb-8">
                                Feel free to reach out through any of these channels. I'm always happy to connect and discuss new opportunities.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                            {info.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                                            <p className="text-gray-900 font-medium mb-1">{info.value}</p>
                                            <p className="text-gray-500 text-sm">{info.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">24h</div>
                                    <div className="text-blue-100 text-sm">Response Time</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">10+</div>
                                    <div className="text-blue-100 text-sm">Projects Completed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">100%</div>
                                    <div className="text-blue-100 text-sm">Client Satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2">24/7</div>
                                    <div className="text-blue-100 text-sm">Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-50"></div>
                <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-100 rounded-full blur-xl opacity-50"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-indigo-100 rounded-full blur-xl opacity-50"></div>
            </div>
        </div>
    );
}

export default Contact;