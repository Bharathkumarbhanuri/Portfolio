import React from 'react'
import { FaJs, FaReact, FaNodeJs, FaJava, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

function About() {
    return (
        <>
            <h1 className="text-lime-500 text-3xl sm:text-4xl md:text-5xl text-center mb-8">About Me</h1>
            <div className="flex flex-col md:flex-row gap-10 px-4 sm:px-8 md:px-36 items-center md:items-start">
                <img
                    src="/bharath_copy.jpg"
                    alt="bharathu"
                    className="sm:64 w-48 md:w-80 object-cover rounded-lg"
                />
                <div className="mt-4 max-w-3xl text-center md:text-left">
                    <p className="text-white text-justify text-sm sm:text-base md:text-lg">
                        I’m Bharath Kumar Bhanuri, a final-year B.Tech student in Electronics
                        and Computer Engineering (ECM) at SNIST, Hyderabad, graduating in 2025.
                        I’m passionate about building full-stack web applications that blend creative
                        design with robust backend functionality. I enjoy solving real-world problems
                        through intuitive digital solutions. With a strong focus on user experience and
                        continuous learning, I strive to add value to every project I take on.
                    </p>

                    <div className="text-white mt-6">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">My Tech Stack</h2>
                        <div className="flex flex-wrap justify-center md:justify-start gap-8 text-4xl sm:text-5xl mb-6 text-white">
                            <FaJs title="javascript" className="text-yellow-400 hover:scale-125 transition-all ease-in-out" />
                            <FaReact title="React" className="text-cyan-400 hover:scale-125 transition-all ease-in-out" />
                            <FaNodeJs title="node" className="text-green-400 hover:scale-125 transition-all ease-in-out" />
                            <SiExpress title="Express" className="text-gray-400 hover:scale-125 transition-all ease-in-out" />
                            <SiMongodb title="mongoDB" className="text-green-600 hover:scale-125 transition-all ease-in-out" />
                            <FaDatabase title="sql" className="text-indigo-400 hover:scale-125 transition-all ease-in-out" />
                            <FaJava title="java" className="text-red-500 hover:scale-125 transition-all ease-in-out" />
                            <SiTailwindcss title="tailwind" className="text-sky-400 hover:scale-125 transition-all ease-in-out" />
                        </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-400 mt-2">
                        Currently exploring: TypeScript, Angular, React Native, Cloud.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About
