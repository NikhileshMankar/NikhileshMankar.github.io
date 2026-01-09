import React from 'react'
import UnicornScene from "unicornstudio-react";
import Buttonmain from '../components/buttonmain';
import Image from 'next/image';
import { Dot, Mail, MailOpen } from 'lucide-react';


const Hero = () => {
  return (
    <section className="w-full h-[90vh] md:h-[80vh] bg-[#07080a] mt-8 md:mt-16 relative overflow-hidden">
      {/* Background scene */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-[1]">
        <UnicornScene projectId="kN8aUEyBNjoFs7skkt9Z" width={1500} height={900} />
        
        {/* Left gradient overlay - extends full height */}
        <div className="absolute left-0 top-0 w-[0px] md:w-[20vw] h-full black-bar  pointer-events-none"></div>

        {/* Right gradient overlay - extends full height */}
        <div className="absolute right-0 top-0 w-[0px] md:w-[20vw] h-full black-bar-2 pointer-events-none"></div>

        {/* Bottom gradient overlay - extends full width */}
        <div className="absolute bottom-0 left-0 w-full h-10 md:h-40 bg-gradient-to-t from-[#07080a] via-[#07080a]/80 to-transparent pointer-events-none"></div>
      </div>

      {/* Centered content container */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col md:w-full w-[400px] items-center text-center'>
      <Image src="/NPM.webp" alt="Nikhilesh Mankar" width={200} height={200} className='w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full mb-4' unoptimized />
        <h1 className='text-[60px] md:text-[64px] leading-[135%] font-semibold text-white heading-shadow mb-4'>
          <span className='text-[40px] md:text-[54px] text-white/80'>
            Welcome, I'm <br />
          </span>
          Nikhilesh Mankar.
        </h1>
        <span className='text-white text-sm md:text-lg font-normal tracking-[.2px] span-shadow'>
          Assistant Professor <Dot className='inline-block -mx-1 md:mx-[0.5]' /> Computer Engineer <Dot className='inline-block -mx-1  md:mx-[0.5]' /> PhD Scholar
        </span>
      </div>

      {/* Bottom section with button and links */}
      <div className="absolute  bottom-[0px] md:-bottom-[2px] left-1/2 transform -translate-x-1/2 z-[4] hidden md:flex flex-col items-center gap-4 md:gap-6">
        <Buttonmain href="/Resume.pdf">
          Download CV
        </Buttonmain>

        <div className='flex flex-row items-center justify-center gap-4 w-[400px] md:w-full'>
          <a href="mailto:mankar.nik@gmail.com" className='flex flex-row gap-2 items-center text-[10px] md:text-[14px] font-normal text-[#9c9c9d] hover:text-white transition-colors duration-300 group'>
            <Mail className='size-[12px] md:size-[14px] text-white z-[2] group-hover:opacity-0 transition-opacity duration-300' />
            <MailOpen className='size-[12px] md:size-[14px] text-white z-[2] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            mankar.nik@gmail.com
          </a>
          <div className='w-[1px] h-3 bg-[#9c9c9d]' />
          <a href="https://linkedin.com/in/nikhilesh-mankar-975040aa" target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2 items-center  text-[12px] md:text-[14px] font-normal text-[#9c9c9d] hover:text-white transition-colors duration-300'>
            <Image src="/InBug-White.png" alt="InBug Logo" width={14} height={14} className='size-[12px] md:size-[14px] text-white z-[2]' unoptimized />
            LinkedIn
          </a>
          <div className='w-[1px] h-3 bg-[#9c9c9d]' />
          <a href="https://scholar.google.com/citations?hl=en&user=iSYj1MwAAAAJ" target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2 items-center  text-[12px] md:text-[14px] font-normal text-[#9c9c9d] hover:text-white transition-colors duration-300'>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-[14px] text-white z-[2]" fill="currentColor">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
            </svg>
            Google Scholar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
