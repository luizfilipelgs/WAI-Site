'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
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
    <header
      className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${top ? 'bg-black' : 'bg-black shadow-lg backdrop-blur-sm'}`}
    >
      <div className="mx-auto ">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Centralized site branding and navigation */}
          <div className="flex w-full items-center justify-between">
            {/* Desktop navigation */}
            <nav className="hidden justify-center md:flex md:grow">
              <ul className="flex items-center justify-center gap-4 md:gap-8">
                {/* Logo */}
                <li>
                  <Link href="/">
                    <Logo />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#wai"
                    className="flex items-center px-5 py-3 font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    [W].AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="#oracle"
                    className="flex items-center px-5 py-3 font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    Oracle [W]
                  </Link>
                </li>
                <li>
                  <Link
                    href="#agua-w"
                    className="flex items-center px-5 py-3 font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    Água [W]
                  </Link>
                </li>
                <li>
                  <Link
                    href="#smart-w"
                    className="flex items-center px-5 py-3 font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    Smart [W]
                  </Link>
                </li>
                <li>
                  <Link
                    href="#app-w"
                    className="flex items-center px-5 py-3 font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    App [W]
                  </Link>
                </li>
                <li>
                  <Link
                    href="#voce-e-w"
                    className="flex items-center px-5 py-3 font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    Você é [W]
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/signin"
                    className="flex items-center px-5 py-3 font-medium text-gray-300 transition duration-150 ease-in-out hover:text-gray-100"
                  >
                    Contato e FAQ
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
