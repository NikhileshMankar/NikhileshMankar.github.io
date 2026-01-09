import React from 'react'
import { Cpu, Copyright } from 'lucide-react';
import Image from 'next/image';

const Works = () => {
  return (
    <section id='works' className="pt-0 pb-16 md:py-32 flex flex-col items-center justify-center bg-[#07080a] overflow-hidden">
       <div className="mx-auto max-w-xl text-center z-[2]">
            <h2 className='font-semibold text-[56px] tracking-[1.2px] mb-[24px] leading-[56px]'>
                Works
            </h2>
            <p className='text-center text-[#6a6b6c] text-xl font-medium tracking-[0.2px] pb-[64px]'>
                Intellectual property and innovative technical solutions.
            </p>  
        </div>
        <div className='flex flex-col gap-12 md:gap-24 px-4 w-[100vw] md:max-w-5xl'>
            <div className='flex flex-col-reverse md:flex-row gap-16'>
                <div className='flex flex-col gap-2 text-center md:text-left w-full md:w-1/2'>
                    <div className='flex flex-row gap-2 justify-center md:justify-start'>
                        <Cpu className='w-[24px] h-[24px] text-[#56c2ff]' />
                        <span className='text-base text-[#56c2ff]'>Patent</span>
                    </div>
                    <h4 className='text-white font-semibold text-[24px] md:text-[30px]'>
                    Enhanced Edge Computing System With Intelligent Gateway For Optimal Security And Latency Control
                    </h4>
                    <p className='text-[hsla(0,0%,100%,.6)] font-medium text-base'>
                            Certificate Number: IN-DL86055547218773V
                    </p>
                </div>
                <div className='flex w-full md:w-2/3 h-fit'>
                    <Image src="/patent.webp" alt="Patent Image" width={1711} height={720} sizes='100vw' unoptimized className=''/>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-16'>
                <div className='flex w-full md:w-2/3 h-fit'>
                    <Image src="/copyright.png" alt="Copyright Image" width={1711} height={720} sizes='100vw' unoptimized className=''/>
                </div>
                <div className='flex flex-col gap-2 text-center md:text-left w-full md:w-1/2'>
                    <div className='flex flex-row gap-2 justify-center md:justify-start'>
                        <Copyright className='w-[24px] h-[24px] text-[#56c2ff]' />
                        <span className='text-base text-[#56c2ff]'>Copyright</span>
                    </div>
                    <h4 className='text-white font-semibold text-[24px] md:text-[30px]'>
                    Secure Aadhar based Voting System with Fingerprint and Face Detection
                    </h4>
                    <p className='text-[hsla(0,0%,100%,.6)] font-medium text-base'>
                            ORCID: 0009-0004-0345-585X
                    </p>
                </div>
                
            </div>
            
        </div>
    </section>
  )
}

export default Works
