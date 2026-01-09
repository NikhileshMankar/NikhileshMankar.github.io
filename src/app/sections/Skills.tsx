import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import Macsvg1 from '../components/macsvg1'
import Macsvg2 from '../components/macsvg2'
import { Code, FileCode2, FlaskConical, Lightbulb, Puzzle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import { TerminalDemo } from '../components/terminalskill';
import Timeline from '@/components/comp-522';
import confetti from 'canvas-confetti';
import CardCaroursalDemo from '../components/cardcarousel';

const Skills = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  const createContainedConfetti = () => {
    if (!timelineContainerRef.current) return;
    
    // Create a temporary canvas for confetti within the container
    const canvas = document.createElement('canvas');
    const container = timelineContainerRef.current;
    const rect = container.getBoundingClientRect();
    
    canvas.width = rect.width;
    canvas.height = rect.height;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999';
    
    container.appendChild(canvas);
    
    // Create confetti with the custom canvas
    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true
    });
    
    // Trigger confetti bursts
    myConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3']
    });
    
    setTimeout(() => {
      myConfetti({
        particleCount: 50,
        spread: 60,
        origin: { x: 0.3, y: 0.6 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1']
      });
    }, 150);
    
    setTimeout(() => {
      myConfetti({
        particleCount: 50,
        spread: 60,
        origin: { x: 0.7, y: 0.6 },
        colors: ['#96ceb4', '#feca57', '#ff9ff3']
      });
    }, 300);
    
    // Remove canvas after animation completes
    setTimeout(() => {
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    }, 5000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px 0px -50px 0px' // Add some margin for better UX
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section ref={sectionRef}  className=' min-h-screen pt-16 pb-36 md:py-60 px-4 flex flex-col items-center justify-center bg-[#07080a] overflow-hidden'>
      <div className='flex flex-col  pb-16'>
      <h2 className='text-center text-white text-xl font-medium tracking-[0.2px]'>
        Expert in making advanced engineering ideas clear and accessible.
      </h2>
      <p id='skills' className='text-center text-[#6a6b6c] text-xl font-medium tracking-[0.2px]'>
        Bridging technical depth with clarity for diverse learners and stakeholders.
      </p>  
      </div>
       
      <div  className='flex p-2 border border-[#ffffff14] rounded-[19px] w-[1204px] h-[740px] skills-backdrop z-4 overflow-hidden'>
        <div className='overflow-hidden rounded-[12px] bg-[#07080a] border border-[#ffffff14] skills-inner h-[100%]'>
            <Image src="/featureBackground.webp" alt="Feature Background" width={1793} height={1011} className='skills-bg-img h-[100%]' unoptimized/>
            <div className=' h-[100%]'>
              <div className='absolute inset-0 z-[5]'>
                <div className=' menu-bar z-[5] md:block hidden'>
                  <Macsvg1 />
                  <Macsvg2 />
                </div>
                <div className='pt-12 hide-scrollbars showcase-reel'>
                  <div className='w-[100%] h-[100%]  grid place-items-center'>
                    
                    {/* Instructional Design Content */}
                    <div className={`skill-content ${activeItem === 0 ? 'skill-content-active' : ''}`}>
                      <div className='text-center text-white w-[375px] h-[400px] md:w-[600px] md:h-[475px] skill-item-content mt-4 md:-mt-16 overflow-hidden'>
                        <div className='skill-top-bar text-center'>
                          I'm adept at applying creative and productive teaching methods.
                        </div>
                        <div className='p-4 relative overflow-hidden'>
                          {/* Chat Messages Container */}
                          <div className='flex flex-col space-y-3 justify-center' key={activeItem === 0 ? 'chat-active' : 'chat-inactive'}>
                            {/* Student Message 1 */}
                            <div className={`flex justify-start items-start space-x-3 ${activeItem === 0 && isInView ? 'animate-slide-in-left' : 'opacity-0'}`}>
                              <div className='w-8 h-8 bg-gradient-to-br from-[#ff6363] to-[#d72a2a] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0'>
                                S
                              </div>
                              <div className='bg-[#ffffff12] border border-[#ffffff20] rounded-lg p-2 md:p-3 max-w-[60%] text-left'>
                                <p className='text-[10px] md:text-sm text-gray-200'>Professor, I'm struggling to understand this concept. Could you explain it differently?</p>
                              </div>
                            </div>
                            
                            {/* Teacher Message 1 */}
                            <div className={`flex justify-end items-start space-x-3 ${activeItem === 0 && isInView ? 'animate-slide-in-right animation-delay-500' : 'opacity-0'}`}>
                              <div className='bg-blue-600 bg-opacity-80 rounded-lg p-2 md:p-3 max-w-[60%] text-left'>
                                <p className='text-[10px] md:text-sm text-white'>Of course! Let me break it down with a real-world example you can relate to.</p>
                              </div>
                              <div className='w-8 h-8  rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0'>
                                <Image src="/NPM.jpg" alt="Teacher Avatar" width={32} height={32} className='rounded-full' unoptimized />
                              </div>
                            </div>
                            
                            {/* Student Message 2 */}
                            <div className={`flex justify-start items-start space-x-3 ${activeItem === 0 && isInView ? 'animate-slide-in-left animation-delay-1000' : 'opacity-0'}`}>
                              <div className='w-8 h-8 bg-gradient-to-br from-[#ff6363] to-[#d72a2a] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0'>
                                S
                              </div>
                              <div className='bg-[#ffffff12] border border-[#ffffff20] rounded-lg p-2 md:p-3 max-w-[60%] text-left'>
                                <p className='text-[10px] md:text-sm text-gray-200'>That makes so much more sense! Can we do some practice problems?</p>
                              </div>
                            </div>
                            
                            {/* Teacher Message 2 */}
                            <div className={`flex justify-end items-start space-x-3 ${activeItem === 0 && isInView ? 'animate-slide-in-right animation-delay-1500' : 'opacity-0'}`}>
                              <div className='bg-blue-600 bg-opacity-80 rounded-lg p-2 md:p-3 max-w-[60%] text-left'>
                                <p className='text-[10px] md:text-sm text-white'>Absolutely! I'll create some interactive exercises tailored to your learning style.</p>
                              </div>
                              <div className='w-8 h-8  rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0'>
                                <Image src="/NPM.jpg" alt="Teacher Avatar" width={32} height={32} className='rounded-full' unoptimized />
                              </div>
                            </div>
                            
                            {/* Student Message 3 */}
                            <div className={`flex justify-start items-start space-x-3 ${activeItem === 0 && isInView ? 'animate-slide-in-left animation-delay-2000' : 'opacity-0'}`}>
                              <div className='w-8 h-8 bg-gradient-to-br from-[#ff6363] to-[#d72a2a] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0'>
                                S
                              </div>
                              <div className='bg-[#ffffff12] border border-[#ffffff20] rounded-lg p-2 md:p-3 max-w-[60%] text-left'>
                                <p className='text-[10px] md:text-sm text-gray-200'>Thank you! Your teaching method really helps me understand complex topics.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>

                    {/* Technical Proficiency Content */}
                    <div className={`skill-content ${activeItem === 1 ? 'skill-content-active' : ''}`}>
                      <div className='text-center text-white w-[375px] md:w-[720px] md:h-[475px] skill-item-content mt-8 overflow-hidden'>
                        <div className='skill-top-bar text-center'>
                          I'm proficient in the use of most current computer programs and software applications.
                        </div>
                        <div className='p-4 relative overflow-hidden'>
                          {activeItem === 1 && <TerminalDemo key={`terminal-${activeItem}`} />}
                          
                        </div>
                        
                      </div>
                    </div>

                    {/* Problem Solving Content */}
                    <div className={`skill-content ${activeItem === 2 ? 'skill-content-active' : ''}`}>
                      <div className='text-center text-white w-[380px] h-[420px] md:w-[720px] md:h-[475px] skill-item-content mt-8 overflow-hidden'>
                        <div className='skill-top-bar text-center'>
                          I have strong motivational and problem-solving abilities.
                        </div>
                        <div ref={timelineContainerRef} className='p-4 relative overflow-hidden flex items-center justify-center h-full -mt-4'>
                          {activeItem === 2 && <Timeline key={`terminal-${activeItem}`} onConfetti={createContainedConfetti} />}
                          
                        </div>
                        
                      </div>
                    </div>

                    {/* Subject Expertise Content */}
                    <div className={`skill-content ${activeItem === 3 ? 'skill-content-active' : ''}`}>
                      <div className='text-center text-white w-[375px] md:w-[780px] h-[525px] skill-item-content mt-8 overflow-hidden'>
                        <div className='skill-top-bar text-center'>
                          I have teaching experience in both theory and practical programming languages.
                        </div>
                        <div className='p-4 relative overflow-hidden'>
                          {activeItem === 3 && <CardCaroursalDemo key={`terminal-${activeItem}`} />}
                          
                        </div>
                        
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div className='skills-dock'>

                  <TooltipProvider delayDuration={0}>
                    <Tooltip open={activeItem === 0}>
                      <TooltipTrigger asChild>
                        <div 
                          className={`skill-item ${activeItem === 0 ? 'skill-item-active' : ''}`}
                          onClick={() => setActiveItem(0)}
                        > 
                          <FlaskConical className='w-[20px] h-[20px]' />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="px-2 py-1 text-xs">
                        Instructional Design
                      </TooltipContent>
                    </Tooltip>  
                  </TooltipProvider>

                  <TooltipProvider delayDuration={0}>
                    <Tooltip open={activeItem === 1}>
                      <TooltipTrigger asChild>
                        <div 
                          className={`skill-item ${activeItem === 1 ? 'skill-item-active' : ''}`}
                          onClick={() => setActiveItem(1)}
                        >
                          <Lightbulb className='w-[20px] h-[20px]' />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="px-2 py-1 text-xs">
                        Technical Proficiency
                      </TooltipContent>
                    </Tooltip>  
                  </TooltipProvider>

                  <TooltipProvider delayDuration={0}>
                    <Tooltip open={activeItem === 2}>
                      <TooltipTrigger asChild>
                        <div 
                          className={`skill-item ${activeItem === 2 ? 'skill-item-active' : ''}`}
                          onClick={() => setActiveItem(2)}
                        >
                          <Puzzle className='w-[20px] h-[20px]' />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="px-2 py-1 text-xs">
                        Problem Solving
                      </TooltipContent>
                    </Tooltip>  
                  </TooltipProvider>

                  <TooltipProvider delayDuration={0}>
                    <Tooltip open={activeItem === 3}>
                      <TooltipTrigger asChild>
                        <div 
                          className={`skill-item ${activeItem === 3 ? 'skill-item-active' : ''}`}
                          onClick={() => setActiveItem(3)}
                        >
                          <FileCode2 className='w-[20px] h-[20px]' />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="px-2 py-1 text-xs">
                        Subject Expertise
                      </TooltipContent>
                    </Tooltip>  
                  </TooltipProvider>
                </div>

              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
