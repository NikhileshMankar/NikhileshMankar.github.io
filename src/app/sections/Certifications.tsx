import React from 'react'
import { CarouselSpacing } from '../components/certificationcarousel'
import Image from 'next/image';

const Certifications = () => {
  return (
    <section id='certifications' className="py-16 md:py-32 flex flex-col items-center justify-center bg-[#07080a] overflow-hidden ">
        <div className="mx-auto max-w-xl text-center z-[2]">
            <h2 className='font-semibold text-[56px] tracking-[1.2px] mb-[24px] leading-[56px]'>
                Certifications
            </h2>
            <p className='text-center text-[#6a6b6c] text-xl font-medium tracking-[0.2px] pb-[64px]'>
                Validated expertise and professional development achievements.
            </p>  
        </div>
      <CarouselSpacing />
    </section>
  )
}

export default Certifications
