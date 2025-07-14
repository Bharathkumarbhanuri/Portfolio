import React from 'react'

function ExperienceCard({title,duration,description}) {
    return (
        <div className="flex gap-8 ">
            <div className="flex flex-col">
                <div className="w-2 h-2 rounded-full bg-white -ml-0.5  shadow-[0_0_20px_2px_rgba(163,230,53,0.8)] "></div>
                <div className="w-0.5 h-full bg-lime-400 flex justify-center "></div>
            </div>
            <div className="text-white">
                <h1 className="font-semibold text-2xl">{title}</h1>
                <small className="text-gray-500">{duration}</small>
                <p className='mb-6 text-gray-300 text-sm'>{description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard
