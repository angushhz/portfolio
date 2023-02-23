import React, { useEffect, useRef } from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import { technologies } from '@/constant'
import parse from 'html-react-parser'
import { revealComponent } from '@/services/fadeIn'

function Technologies() {
  const myRef: any = useRef()
  useEffect(() => {
    revealComponent(myRef)
  }, [])

  return (
    <section ref={myRef} id='technology' className='container'>
      <div className='my-10 w-8 h-[2px] bg-gradient-to-l from-[#13ADC7] to-[#945DD6] rounded-xl md:w-16 md:h-[6px]'></div>
      <div className='header-section py-0 md:header-section-larger'>Technologies</div>
      <p className='header-content md:header-content-larger'>
        I've worked with a range a technologies in the web development world. From Back-end To
        Front-end.
      </p>
      <ul className='flex flex-col gap-y-6 gap-x-4 md:grid md:grid-cols-3'>
        {technologies.map((technology, id) => (
          <li key={id} className='flex flex-row mb-[14px]'>
            {technology.icon}
            <div className='ml-[18px]'>
              <h3 className='text-xl font-bold mb-1 lg:text-3xl'>{parse(technology.skill)}</h3>
              <p className='text-[14px] lg:text-[18px] text-[#ffffffbf]'>
                {parse(technology.description)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Technologies
