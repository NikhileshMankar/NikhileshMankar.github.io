import React, { useState } from 'react'
import Image from 'next/image'

const Education = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Gallery images
  const galleryImages = [
    {
      src: '/gallery1.webp'
    },
    {
      src: '/gallery11.webp'
    },
    {
      src: '/gallery13.webp'
    },
    {
      src: '/gallery4.webp'
    },
    {
      src: '/gallery5.webp'
    },
    {
      src: '/gallery6.webp'
    },
    {
      src: '/gallery7.webp'
    },
    {
      src: '/gallery8.webp'
    },
    {
      src: '/gallery9.webp'
    },
    {
      src: '/gallery14.webp'
    },
    {
      src: '/gallery11.webp'
    },
    {
      src: '/gallery12.webp'
    }
  ]

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div id='gallery' className='bg-[#07080a] overflow-hidden py-16'>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center mb-0">
          <h2 className='font-semibold text-[56px] tracking-[1.2px] pb-[64px] leading-[56px] text-white'>
            Gallery
          </h2>
        </div>

        {/* 2x2 Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size image viewing */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 cursor-pointer z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  fill
                  className="object-contain rounded-lg"
                  unoptimized
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Education
