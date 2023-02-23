import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

function SocialMedia() {
  return (
    <>
      <Link
        className='p-2 transition duration-200 ease-in hover:bg-[#212d45] hover:cursor-pointer hover:scale-125 rounded-[30px]'
        href='https://github.com/angushhz'
        target='_blank'
      >
        <AiFillGithub className='bg-transparent' size='2rem' />
      </Link>
      <Link
        className='p-2 transition duration-200 ease-in hover:bg-[#212d45] hover:cursor-pointer hover:scale-125 rounded-[30px]'
        href='https://www.linkedin.com/in/nam-tr%C6%B0%C6%A1ng-0b8450218/'
        target='_blank'
      >
        <AiFillLinkedin className='bg-transparent' size='2rem' />
      </Link>
      <Link
        className='p-2 transition duration-200 ease-in hover:bg-[#212d45] hover:cursor-pointer hover:scale-125 rounded-[30px]'
        href='https://www.instagram.com/angus.hhz/'
        target='_blank'
      >
        <AiFillInstagram className='bg-transparent' size='2rem' />
      </Link>
    </>
  )
}

export default SocialMedia
