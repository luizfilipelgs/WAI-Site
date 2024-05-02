'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Centralized site branding and navigation */}
          <div className="flex justify-center items-center w-full">
            {/* Logo */}
            <div className="shrink-0 mr-4">
              <Logo />
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow justify-center">
              <ul className="flex justify-center items-center gap-4 md:gap-8">
                <li>
                  <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">[W].AI</Link>
                </li>
                <li>
                  <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Oracle [W]</Link>
                </li>
                <li>
                  <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Água [W]</Link>
                </li>
                <li>
                  <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Você é [W]</Link>
                </li>
                <li>
                  <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Smart [W]</Link>
                </li>
                <li>
                  <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">App [W]</Link>
                </li>
                <li>
                  <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Contato e FAQ</Link>
                </li>
              </ul>
            </nav>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
