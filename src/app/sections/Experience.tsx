import ExperienceTimeline from '@/components/comp-531'
import React from 'react'

const items = [
  {
    id: 1,
    date: "15 July 2024 - Present",
    title: "Assistant Professor",
    description:
      "Pimpri Chinchwad University SOET, Pune",
  },
  {
    id: 2,
    date: "05 Dec 2022 - 15 July 2024",
    title: "Assistant Professor",
    description:
      "D Y Patil University School of Engineering and Technology, Pune",
  },
  {
    id: 3,
    date: "18 July 2018 - 31 Oct 2022",
    title: "Assistant Professor",
    description:
      "D Y Patil Polytechnic, Ambi, Pune",
  },
]

const Experience = () => {
  return (
    <div id='experience' 
      className='flex flex-col items-center justify-center md:h-screen bg-[#07080a] pt-0 pb-32 md:p-8 md:pb-8 overflow-hidden'
      style={{
        backgroundImage: 'url(/ExperienceBG.jpg)',
        backgroundSize: '1109px auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
        <h2 className='font-semibold text-[56px] tracking-[1.2px] mb-[24px] leading-[56px]'>
            Experience
        </h2>
        <p className='text-center text-[#6a6b6c] text-xl font-medium tracking-[0.2px] pb-[64px] '>
        Career journey and impact.
      </p>  
      <ExperienceTimeline />

    </div>
  )
}

export default Experience



