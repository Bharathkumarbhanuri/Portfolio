import React from 'react'

function ExperienceCard({title,duration,description}) {
    return (
        <div className="flex gap-4 sm:gap-6 md:gap-8 ">

            {/* dot and line */}
            <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-white -ml-0.5  shadow-[0_0_20px_2px_rgba(163,230,53,0.8)] "></div>
                <div className="w-0.5 h-full bg-lime-400 flex justify-center "></div>
            </div>

            {/* text */}
            <div className="text-white">
                <h1 className="font-semibold text-lg sm:text-xl md:text-2xl">{title}</h1>
                <small className="text-gray-500">{duration}</small>
                <p className='mb-6 text-gray-300 text-sm'>{description}</p>
            </div>
        </div>
    )
}

export default ExperienceCard
