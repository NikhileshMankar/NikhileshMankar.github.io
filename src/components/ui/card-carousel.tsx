"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"


interface ContentItem {
  title: string
  type: 'language' | 'subject'
  description: string
  icon: string
  className: string
  imageSrc: string
}

interface CarouselProps {
  content?: ContentItem[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
  className?: string
}

export const CardCarousel: React.FC<CarouselProps> = ({
  content = [
    {
      title: "Java / C / C++",
      type: "language",
      description: "Low-level programming and memory management",
      icon: "/vscode-icon.webp",
      className: "card-one-bg",
      imageSrc: "/vscode-web.webp"
    },
    {
      title: "Cyber Security",
      type: "subject",
      description: "Security principles and threat analysis",
      icon: "/format-json-icon.webp",
      className: "cyber-sec-bg",
      imageSrc: "/format-json-web.webp"
    },
    {
      title: "Operating Systems",
      type: "subject",
      description: "Process management and file systems",
      icon: "/kill-process-icon.webp",
      className: "os-bg",
      imageSrc: "/kill-process-web.webp"
    },
    {
      title: "Networking",
      type: "subject",
      description: "Socket programming and distributed systems",
      icon: "/warp-icon.webp",
      className: "network-bg",
      imageSrc: "/warp-web.webp"
    },
    {
      title: "Blockchain",
      type: "subject",
      description: "Distributed ledgers and smart contracts",
      icon: "/linear-icon.webp",
      className: "blockchain-bg",
      imageSrc: "/linear-web.webp"
    }
  ],
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
  className = "",
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 80px;
    min-height: 550px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  
  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.5);
  }
  
  .swiper-pagination-bullet-active {
    background: white;
  }
  
  .card-content {
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    will-change: transform;
  }
  `
  return (
    <section className={`w-ace-y-4 ${className}`}>
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 shadow-none md:shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border-none md:border border-black/5 bg-neutral-800/5  shadow-none md:shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] ">
          
          

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-[380px] md:w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                  slideShadows: false,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {content.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-[420px] w-72 rounded-3xl bg-gradient-to-br shadow-xl overflow-hidden border border-white/10 card-content">
                      <div className={`h-full w-full bg-gradient-to-br ${item.className} p-3 flex flex-col`}>
                        <div className="flex flex-row gap-4 items-center">
                          <div className="w-14 h-14 mb-2 flex-shrink-0">
                            <Image 
                              src={item.icon} 
                              alt={`${item.title} icon`}
                              width={56}
                              height={56}
                              className="w-full h-full object-contain"
                              quality={100}
                              priority={index < 3}
                              unoptimized
                            />
                          </div>

                          <h3 className="text-xl font-bold text-white mb-3 text-left">
                            {item.title}
                          </h3>

                          {/* <Badge 
                            variant="secondary" 
                            className="bg-white/20 text-white border-white/30 text-xs"
                          >
                            {item.type}
                          </Badge> */}
                        </div>
                        
                        <div className="flex flex-col pb-2"> 
                          <p className="text-white text-left text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="h-[1px] w-[100%] bg-[hsla(0,0%,100%,.05)] mt-0"/>

                        <Image src={item.imageSrc} unoptimized width={360} height={360} alt={`${item.title} preview`}/>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
