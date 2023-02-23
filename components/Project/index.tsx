import React from 'react'
import ShowCase from './ShowCase'
import { projects } from '@/constant'
import { Projects } from '@/typings'

function Projects() {
  return (
    // w-[calc(100vw-32px)]
    <section id='project' className='container'>
      <div className='w-8 h-[2px] bg-gradient-to-l from-[#13ADC7] to-[#945DD6] rounded-xl md:w-16 md:h-[6px]'></div>
      <h1 className='header-section sm:header-section-larger'>Projects</h1>
      <div className='flex flex-col flex-wrap mb-4 sm:w-[400px] mx-auto px-5 pt-5 gap-x-12 gap-y-8 lg:gap-x-24 lg:w-9/12 lg:grid lg:grid-cols-2 '>
        {projects.map((project: Projects, i: number) => (
          <ShowCase key={i} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
