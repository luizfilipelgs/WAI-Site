'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'

export default function Mission() {
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }
  }

  useEffect(() => {
    heightFix()
    // Adicione tab nas dependências para ajustar a altura cada vez que o tab mudar
  }, [tab])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTab((previousTab) => (previousTab % 3) + 1)
    }, 10_000) // Muda o tab a cada 5 segundos

    return () => clearInterval(intervalId) // Limpa o intervalo ao desmontar o componente
  }, [])

  const handleTabClick = (tabIndex: number) => {
    setTab(tabIndex)
  }

  return (
    <section className="relative pb-20">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="pointer-events-none absolute inset-0 mb-16 bg-black"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto h-20 w-px -translate-y-1/2 transform bg-gray-200 p-px"></div>

      <div className="relative mx-auto px-4 sm:px-8">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="h2 mb-4 text-gray-100">Explore the solutions</h1>
            <p className="text-xl text-gray-300">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="mx-auto max-w-xl md:col-span-5 md:mt-6 md:w-full md:max-w-none lg:col-span-4"
              data-aos="fade-right"
            >
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${tab === 1 ? 'border-transparent bg-gray-800 text-gray-300' : 'border-gray-200 bg-gray-900 text-white shadow-md hover:shadow-lg'}`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabClick(1)
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Building the Simple ecosystem
                    </div>
                    <div className="text-gray-300">
                      Take collaboration to the next level with security and
                      administrative features built for teams.
                    </div>
                  </div>
                </a>
                <a
                  className={`mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${tab === 2 ? 'border-transparent bg-gray-800 text-gray-300' : 'border-gray-200 bg-gray-900 text-white shadow-md hover:shadow-lg'}`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabClick(2)
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Building the Simple ecosystem
                    </div>
                    <div className="text-gray-300">
                      Take collaboration to the next level with security and
                      administrative features built for teams.
                    </div>
                  </div>
                </a>
                <a
                  className={`mb-3 flex items-center rounded border p-5 text-lg transition duration-300 ease-in-out ${tab === 3 ? 'border-transparent bg-gray-800 text-gray-300' : 'border-gray-200 bg-gray-900 text-white shadow-md hover:shadow-lg'}`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabClick(3)
                  }}
                >
                  <div>
                    <div className="mb-1 font-bold leading-snug tracking-tight">
                      Building the Simple ecosystem
                    </div>
                    <div className="text-gray-300">
                      Take collaboration to the next level with security and
                      administrative features built for teams.
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="mx-auto mb-8 mt-6 flex h-full max-w-xl flex-col justify-center md:order-1 md:col-span-7 md:mb-0 md:h-auto md:w-full md:max-w-none lg:col-span-8">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="mx-auto rounded md:max-w-none"
                        src={FeaturesBg}
                        width={450}
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="mx-auto rounded md:max-w-none"
                        src={FeaturesBg}
                        width={450}
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image
                        className="mx-auto rounded md:max-w-none"
                        src={FeaturesBg}
                        width={450}
                        alt="Features bg"
                      />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
