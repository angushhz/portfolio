'use client'
import React from 'react'
import Link from 'next/link'
import { DiCssdeck } from 'react-icons/di'
import SocialMedia from './SocialMedia'
import ScrollLink from '../ScrollLink'
function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault()
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, '')
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId)
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: 'smooth',
    })
  }
  return (
    <header className='pt-5 pb-2.5 px-2.5 grid grid-cols-5 grid-rows-2 md:grid-rows-1 gap-1 md:grap-2 min-h-[80px]'>
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
