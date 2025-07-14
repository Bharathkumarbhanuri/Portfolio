import React from 'react'

function Nav() {
  return (
    <>
      <h1 className="text-white text-2xl font-semibold ">BHARATH KUMAR BHANURI</h1>
      <div className="flex gap-10 ">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact">
        <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 
            shadow-lg shadow-lime-500/25 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2">
          Connect with me
        </button>
      </a>
    </>
  )
}

export default Nav
