import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import FacebookIconShare from "./FacebookIconShare";
function Home() {
    const texts = ["Web Developer", "UI Designer", "Problem Solver"];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-4 sm:px-8 md:px-16">
            <div className="text-center md:text-left max-w-3xl">
                <p className="text-white text-xl mb-2">Hello,</p>
                <p className="text-white text-3xl sm:text-4xl md:text-5xl mb-2">I'm Bharath Kumar Bhanuri,</p>
                <p className="text-lime-500 text-3xl sm:text-4xl md:text-5xl mb-6">{texts[index]}</p>
                <p className="text-gray-300 text-lg mb-8">
                    I'm a passionate developer focused on
                    Full-Stack development <br className="hidden sm:block" /> and IoT, building smart,
                    user-friendly solutions to real-world problems.
                </p>
                <div className="text-white flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                    <div className="flex gap-4 text-2xl md:text-3xl">
                        <a href="https://github.com/Bharathkumarbhanuri" className="hover:scale-125 transition-all ease-in-out" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/bhanuri-bharath-kumar-48b745243" className="hover:scale-125 transition-all ease-in-out" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/_bharath.____?igsh=ZDRraHlhMTY3bXFt" className="hover:scale-125 transition-all ease-in-out" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <FacebookIconShare />
                    </div>

                    <div className="flex gap-3">
                        <a
                            href="#contact"
                            className="text-white text-sm px-3.5 py-2.5 mb-2 rounded-lg 
                                     bg-gradient-to-r from-cyan-400 to-blue-500 text-center"
                        >
                            Let's Connect
                        </a>
                        <a
                            href="/se_resume.pdf"
                            download
                            className="text-white border-2 inline-flex items-center gap-2
                                    rounded-lg text-sm px-3.5 py-2 text-center mb-2"
                        >
                            Resume <FaDownload />
                        </a>
                    </div>
                </div>
            </div>
            <img
                src="/bharath.jpg"
                alt="bharath"
                className="h-60 w-60 sm:h-60 sm:w-60 md:h-80 md:w-80 object-cover rounded-full"
            />
        </div>
    )
}

export default Home
