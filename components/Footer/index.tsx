import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
    return (
        <section className="container pb-8">
            <div className="mb-4 md:mb-0 w-8 h-[2px] bg-gradient-to-l from-[#13ADC7] to-[#945DD6] rounded-xl md:w-16 md:h-[6px]"></div>
            <ul className="pt-5  grid grid-cols-3 md:mt-8 md:pt-[32px] md:pb-[16px] border-t-[1px] border-primary">
                <div>
                    <h4 className="text-primary font-medium  mb-4">Call</h4>
                    <a href="" className="text-primary text-sm md:text-lg">
                        +84-327-453-594
                    </a>
                </div>
                <div>
                    <h4 className="text-primary font-medium mb-4">Email</h4>
                    <a href="" className="text-primary text-sm md:text-lg">
                        hoangnamqt.2001@gmail.com
                    </a>
                </div>
            </ul>
            <div className="flex justify-between items-center mt-4 md:mt-0">
                <div className="text-secondary text-xs md:text-lg tracking-widest font-semibold">
                    Practice makes perfect
                </div>
                <div className="flex items-center">
                    <Link
                        className="p-2 transition duration-200 ease-in hover:bg-[#212d45] hover:cursor-pointer hover:scale-125 rounded-[30px]"
                        href=""
                    >
                        <AiFillGithub className="bg-transparent" size="2rem" />
                    </Link>
                    <Link
                        className="p-2 transition duration-200 ease-in hover:bg-[#212d45] hover:cursor-pointer hover:scale-125 rounded-[30px]"
                        href=""
                    >
                        <AiFillLinkedin className="bg-transparent" size="2rem" />
                    </Link>
                    <Link
                        className="p-2 transition duration-200 ease-in hover:bg-[#212d45] hover:cursor-pointer hover:scale-125 rounded-[30px]"
                        href=""
                    >
                        <AiFillInstagram className="bg-transparent" size="2rem" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Footer
