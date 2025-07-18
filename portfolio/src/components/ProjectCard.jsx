import React from 'react'

function ProjectCard({title, image, github,live}) {
    return (
        <div className='rounded-lg border border-gra shadow-lg overflow-hidden transition-transform duration-75 hover:scale-110'>
            <img src={image} alt="image" className='object-cover h-32 w-full'/>
            <div className='p-1'>
                <h3 className='text-md font-semibold text-center text-white mb-3'>{title}</h3>
                <div className='flex items-center justify-center pb-2 gap-8'> 
                    <a href={live} target="_blank" rel="noopener noreferrer">
                        <button type="button" className='text-white text-sm border border-gray-600 px-3 py-1 rounded-md hover:bg-lime-600'>Live</button>
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <button type="button" className='text-white text-sm border border-gray-600 px-2 py-1 rounded-md hover:bg-lime-600'>GitHub</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
