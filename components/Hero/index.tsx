import Link from 'next/link'
import React from 'react'
import { IconHero } from '../Icon'
import ScrollLink from '../ScrollLink'
function Hero() {
  return (
    <div className='container'>
      <h1 className='header-section sm:header-section-larger '>
        Welcome To <br />
        My Personal Portfolio
      </h1>
      <p className='header-content sm:header-content-larger tracking-wider'>
        Software development is is the process of designing, creating, testing, and maintaining
        different software applications. I'm interested in upskilling and enhancing my software
        development skills.
      </p>
      <ScrollLink href='#personal'>
        <button className='w-full h-8 mb-16 text-[14px] bg-gradient-to-l from-[#13ADC7] to-[#945DD6] rounded-full font-semibold md:text-2xl md:h-16 md:max-w-[262px] opacity-80 transition duration-300 ease-out hover:opacity-100'>
          Learn More
        </button>
      </ScrollLink>

      <div className='hidden sm:block  absolute top-0 right-0 -z-10 w-[320px] h-[320px] md:w-[520px] md:h-[520px] '>
        <IconHero />
      </div>
    </div>
  )
}

export default Hero
