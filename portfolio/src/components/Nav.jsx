import React from 'react'

function Nav() {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap'>
      <h1 className="text-white text-center md:text-left text-xl sm:text-2xl font-semibold ">BHARATH KUMAR BHANURI</h1>
      
      <div className="flex flex-wrap justify-center md:justify-start text-sm sm:text-base gap-4 md:gap-10 ">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact">
        <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 
            shadow-lg shadow-lime-500/25 font-medium rounded-lg  px-4 py-2 text-center text-sm sm:py-2.5 mb-2 hidden md:block">
          Connect with me
        </button>
      </a>
    </div>
  )
}

export default Nav
