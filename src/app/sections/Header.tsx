'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '../components/ui/button'
import React from 'react'
import { cn } from '../lib/utils'
import Buttonheader from '../components/buttonheader'

const menuItems = [
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Research', href: '/#research' },
    { name: 'Works', href: '/#works' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Books', href: '/#books' },


]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header className="w-full overflow-hidden">
            <nav
                data-state={menuState && 'active'}
                className="fixed z-[60] inset-x-0 flex justify-center mt-4">
                <div className={cn('mx-auto  w-[420px] sm:w-[540px] md:w-[640px] lg:w-[1024px] px-4 sm:px-6 transition-all ease-in-out duration-300 lg:px-6 header-style rounded-lg', isScrolled && 'bg-background/50 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[960px] rounded-2xl border backdrop-blur-lg lg:px-5 ')}>
                <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 font-medium tracking-wide">
                                Nikhilesh Mankar
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-[#9c9c9d] hover:text-white block transition-all ease-in-out duration-200 font-medium tracking-[.2px]">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-transparent in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl   md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none ">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-[#9c9c9d] hover:text-white block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex md:w-full flex-row">

                                <Buttonheader href="/contact">
                                    Contact
                                </Buttonheader>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
