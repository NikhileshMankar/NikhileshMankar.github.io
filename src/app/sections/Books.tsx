import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Books = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('books')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])
  return (
    <section id='books' className="py-16 md:py-32 relative flex flex-col items-center justify-center bg-[#07080a] overflow-hidden">
        <Image src="/certifications-bg.webp" alt="Certifications Background" width={800} height={800} className='certifications-bg' unoptimized />
        <div className="mx-auto max-w-xl text-center mb-0 z-[2]">
            <h2 className='font-semibold text-[56px] tracking-[1.2px] mb-[24px] leading-[56px]'>
                Books
            </h2>
            <p className='text-center text-[#6a6b6c] text-xl font-medium tracking-[0.2px] pb-[64px] md:pb-[96px]'>
                Published technical works and contributions to knowledge.
            </p>  
        </div>
        <div className='flex flex-col md:flex-row gap-12 justify-center items-center mx-auto  z-[2]'>
          <div className={`book-item transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
                <Link href="https://techknowledgebooks.com/?product=software-defined-networks" target="_blank" className='book-img '>
                <img src="/Book2.webp" alt="Book 2" className='w-72 h-100 object-cover rounded-lg' />
                <h3 className='text-white mt-2 text-center text-[18px]'>Software Defined Networks</h3>
                <p className='text-[#6a6b6c] text-center'>ISBN: 978-93-5563-421-5</p>
                </Link>
            </div>
            <div className={`book-item transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
                <Link href="https://techknowledgebooks.com/?product=pattern-recognition" target="_blank" className='book-img '>
                <img src="/Book1.webp" alt="Book 1" className='w-72 h-100 object-cover rounded-lg' />
                <h3 className='text-white mt-2 text-center text-[18px]'>Pattern Recognition</h3>
                <p className='text-[#6a6b6c] text-center'>ISBN: 978-93-5563-389-7</p>
                </Link>
            </div>
            
            <div className={`book-item transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`} style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}>
                <Link href="https://techknowledgebooks.com/?product=android-development" target="_blank" className='book-img '>
                <img src="/Book3.webp" alt="Book 3" className='w-72 h-100 object-cover rounded-lg' />
                <h3 className='text-white mt-2 text-center text-[18px]'>Android Development</h3>
                <p className='text-[#6a6b6c] text-center'>ISBN: 978-93-5563-589-7</p>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Books
