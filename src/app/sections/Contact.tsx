import { Mail, MailOpen } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='h-screen bg-[#07080a] flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-col items-center justify-center gap-8 w-[400px] md:w-full'>
          <a href="mailto:mankar.nik@gmail.com" className='flex flex-row gap-2 items-center text-[16px] md:text-[18px] font-normal text-[#9c9c9d] hover:text-white transition-colors duration-300 group'>
            <Mail className='size-[16px] md:size-[18px] text-white z-[2] group-hover:opacity-0 transition-opacity duration-300' />
            <MailOpen className='size-[16px] md:size-[18px] text-white z-[2] absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            mankar.nik@gmail.com
          </a>

          <a href="https://linkedin.com/in/nikhilesh-mankar-975040aa" target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2 items-center  text-[16px] md:text-[18px] font-normal text-[#9c9c9d] hover:text-white transition-colors duration-300'>
            <Image src="/InBug-White.png" alt="InBug Logo" width={18} height={18} className='size-[12px] md:size-[18px] text-white z-[2]' unoptimized />
            LinkedIn
          </a>

          <a href="https://scholar.google.com/citations?hl=en&user=iSYj1MwAAAAJ" target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2 items-center  text-[16px] md:text-[18px] font-normal text-[#9c9c9d] hover:text-white transition-colors duration-300'>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-[18px] text-white z-[2]" fill="currentColor">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
            </svg>
            Google Scholar
          </a>
        </div>
    </div>
  )
}

export default Contact
