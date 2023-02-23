import { blog } from '@/constant'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { VscChevronRight } from 'react-icons/vsc'
import { Icon } from '@iconify/react'

function Personal() {
  return (
    <section id='personal' className='container'>
      <div className=' w-8 h-[2px] bg-gradient-to-l from-[#13ADC7] to-[#945DD6] rounded-xl md:w-16 md:h-[6px]'></div>
      <div className='header-section md:header-section-larger'>Personal Knowledge</div>
      <p className='header-content md:header-content-larger md:pb-2'>
        I love to share my knowledge through writing.
      </p>
      <p className='text-base font-bold italic  bg-clip-text text-transparent w-max bg-gradient-to-l from-[#F46737] to-[#945DD6]'>
        Check out a few of my recent publishings.
      </p>
      <ul className='flex flex-col pt-10 gap-x-12 gap-y-8 lg:grid lg:grid-cols-3'>
        {blog.map((item, index) => (
          <li key={index}>
            <div className='relative w-full h-[390px] rounded-xl overflow-hidden hover:opacity-50 hover:cursor-pointer'>
              <Image src={item.image} alt={item.title} fill />
            </div>
            <h3 className='text-2xl font-semibold mt-1'>{item.title}</h3>
            <p className='font-bold mt-2'>{item.date}</p>
          </li>
        ))}
      </ul>
      <Link
        href='/blog'
        className='inline-flex items-center mt-12 hover:opacity-60 transition-all duration-200 ease-in text-[#555a61] font-[650] text-[16px] py-[6px] px-[24px] bg-white rounded-3xl'
      >
        See all articles
      </Link>
    </section>
  )
}

export default Personal
