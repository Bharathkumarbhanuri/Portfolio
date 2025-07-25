import React from 'react'
import ExperienceCard from './ExperienceCard'

function Experience() {
  return (
    <div className='flex justify-center'>
      <div className="text-white text-center md:text-left px-0 md:px-0 mb-6">
        <p className=" text-3xl sm:text-4xl md:text-5xl text-lime-500">Leadership & Responsibilities</p>
        <p className=" text-xs sm:text-sm px-1">Club & Community Contributions</p>
      </div>
      <div className="flex flex-col px-2 md:px-0">
        <ExperienceCard
          title='Ranaveera Head - The Robotics Club, SNIST'
          duration='Sep 2024 - Nov 2024'
          description='Led the Robowars event under Roboveda’24, managing team coordination, technical planning, and event execution.'
        />
        <ExperienceCard
          title='Publicity Deputy – The Robotics Club, SNIST'
          duration='Sep 2023 - Nov 2023'
          description='Spearheaded event promotions across colleges statewide for Roboveda’23, contributing to increased participation and sponsorship acquisition.'
        />
        <ExperienceCard
          title='Content Writing Member – The Robotics Club, SNIST'
          duration='Oct 2022 - Nov 2023'
          description='Created engaging content for the club’s social media platforms, covering events, workshops, and tech updates to boost online presence.'
        />
        <ExperienceCard
          title='Student Mentor – The Robotics Club, SNIST'
          duration='Feb 2023 - Jul 2023'
          description='Guided a 9-member team on NIYANTRAN, a voice-controlled smart wheelchair for people with limited mobility, using Arduino and sensors for hands-free movement.'
        />
      </div>
    </div>
  )
}

export default Experience
