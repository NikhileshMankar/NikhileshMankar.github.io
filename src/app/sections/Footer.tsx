import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <footer className="pt-[100px] md:pt-[200px] pb-0 overflow-hidden relative bg-[#07080a] ">
            <Image src="/isolatedCube.webp" alt="Isolated Cube" width={800} height={800} className="footer-img" unoptimized />
            <div className="flex flex-col gap-12 md:gap-18 footer-css">
                <div className="justify-center hidden md:flex">
                    <Image src="/PCU_Logo.webp" alt="PCU Logo" width={400} height={300} className="" unoptimized />
                </div>
                <div className="justify-center flex md:hidden">
                    <Image src="/PCU_Logo.webp" alt="PCU Logo" width={300} height={200} className="" unoptimized />
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <div className="text-base">© 2025 <span className="text-[#FF776F]">Nikhilesh Mankar.</span> All rights reserved.</div>
                </div>  
                
                
            </div>
        </footer>
    )
}

export default Footer
