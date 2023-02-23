import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import SocialMedia from '../Header/SocialMedia'

function Footer() {
  return (
    <section className='container pb-8'>
      <div className='mb-4 md:mb-0 w-8 h-[2px] bg-gradient-to-l from-[#13ADC7] to-[#945DD6] rounded-xl md:w-16 md:h-[6px]'></div>
      <ul className='pt-5  grid grid-cols-3 md:mt-8 md:pt-[32px] md:pb-[16px] border-t-[1px] border-primary gap-x-6'>
        <div>
          <h4 className='text-secondary font-medium  mb-4'>Call</h4>
          <Link
            href=''
            className=' block text-primary text-sm md:text-lg transition-all duration-200 ease-in hover:text-white hover:translate-x-5'
          >
            +84-327-453-594
          </Link>
        </div>
        <div>
          <h4 className='text-secondary font-medium mb-4'>Email</h4>
          <Link
            href=''
            className=' block text-primary text-sm md:text-lg transition-all duration-200 ease-in hover:text-white hover:translate-x-5'
          >
            hoangnamqt.2001@gmail.com
          </Link>
        </div>
      </ul>
      <div className='flex justify-between items-center mt-4 md:mt-0'>
        <div className='text-secondary text-xs md:text-lg tracking-widest font-semibold ml-4'>
          Practice makes perfect
        </div>
        <div className='flex items-center'>
          <SocialMedia />
        </div>
      </div>
    </section>
  )
}

export default Footer
