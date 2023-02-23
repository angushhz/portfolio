import React from 'react'
import { timeLineData } from '@/constant'
import { IconHero, TimeLineSVG } from '../Icon'
import Slider from 'react-slick'

function About() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section id='about' className='container'>
      <div className=' w-8 h-[2px] bg-gradient-to-l from-[#F46737] to-[#945DD6] rounded-xl md:w-16 md:h-[6px]'></div>
      <h1 className='header-section md:header-section-larger'>About Me</h1>
      <p className='header-content md:header-content-larger'>
        I am passionate about my work. Because I love what I do, I have a steady source of
        motivation that drives me to do my best. I'm not comfortable with settling , this passion
        led me to challenge myself daily and learn new skills that helped me to do better work.
      </p>
      <ul className='md:flex md:justify-between'>
        {/* <Slider {...settings}> */}
        {timeLineData.map((data, id) => (
          <li key={id} className='max-w-[196px]'>
            <div>
              <h4 className='flex text-xl md:text-2xl mb-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#eee3e3a8] '>
                {data.year}
                <TimeLineSVG />
              </h4>
              <p className='text-[14px] font-medium tracking-wide text-[#ffffffbf] pr-4'>
                {data.text}
              </p>
            </div>
          </li>
        ))}
        {/* </Slider> */}
      </ul>
    </section>
  )
}

export default About
