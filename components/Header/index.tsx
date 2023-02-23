'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { DiCssdeck } from 'react-icons/di'
import SocialMedia from './SocialMedia'
import ScrollLink from '../ScrollLink'
import { revealComponent } from '@/services/fadeIn'

function Header() {
  const myRef: any = useRef(null)
  useEffect(() => {
    revealComponent(myRef)
  }, [])
  return (
    <header
      ref={myRef}
      className='motion-safe:animate-fadeIn opacity-0 pt-5 pb-2.5 px-2.5 grid grid-cols-5 grid-rows-2 md:grid-rows-1 gap-1 md:grap-2 min-h-[80px]'
    >
      <div className='flex items-center col-span-3 md:col-span-1 hover:cursor-pointer'>
        <DiCssdeck size='2rem' />
        <span>Portfolio</span>
      </div>
      <div className='flex justify-around items-start row-start-2 col-start-2 col-span-3 md:row-start-1 md:col-start-2 md:col-span-2'>
        <ScrollLink
          href='#project'
          className='p-2 md:p-0 text-xl text-[#ffffffbf] hover:text-white hover:cursor-pointer transition duration-400 ease-in-out hover:scale-110'
        >
          Projects
        </ScrollLink>
        <ScrollLink
          href='#technology'
          className='p-2 md:p-0 text-xl text-[#ffffffbf] hover:text-white hover:cursor-pointer  transition duration-400 ease-in-out hover:scale-110'
        >
          Technologies
        </ScrollLink>
        <ScrollLink
          href='#about'
          className='p-2 md:p-0 text-xl text-[#ffffffbf] hover:text-white hover:cursor-pointer  transition duration-400 ease-in-out hover:scale-110'
        >
          About
        </ScrollLink>
      </div>
      <div className='flex justify-around items-center col-start-4 col-end-6 md:col-start-5'>
        <SocialMedia />
      </div>
    </header>
  )
}

export default Header
