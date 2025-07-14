import React from 'react'

function ProjectCard({title, image, github,live}) {
    return (
        <div className='rounded-lg border-2 shadow-lg overflow-hidden transition-transform duration-75 hover:scale-110'>
            <img src={image} alt="image" className='object-cover h-32 w-full'/>
            <div className=''>
                <h3 className='text-md text-center text-white py-2'>{title}</h3>
                <div className='flex items-center justify-center pb-2 gap-8'> 
                    <a href={live} target="_blank" rel="noopener noreferrer">
                        <button type="button" className='text-white text-sm border px-2 py-1 rounded-md'>Live</button>
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <button type="button" className='text-white text-sm border px-1 py-1 rounded-md'>GitHub</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
