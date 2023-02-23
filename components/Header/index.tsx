import React from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'

function Header() {
    return (
        <header className="pt-5 pb-2.5 px-2.5 grid grid-cols-5 grid-rows-2 md:grid-rows-1 gap-1 md:grap-2 min-h-[80px]">
            <div className="flex items-center col-span-3 md:col-span-1 hover:cursor-pointer">
                <DiCssdeck size="2rem" />
                <span>Portfolio</span>
            </div>
            <div className="flex justify-around items-start row-start-2 col-start-2 col-span-3 md:row-start-1 md:col-start-2 md:col-span-2">
                <li className="p-2 md:p-0 text-xl text-[#ffffffbf] hover:text-white hover:cursor-pointer">
                    Projects
                </li>
                <li className="p-2 md:p-0 text-xl text-[#ffffffbf] hover:text-white hover:cursor-pointer">
                    Technologies
                </li>
                <li className="p-2 md:p-0 text-xl text-[#ffffffbf] hover:text-white hover:cursor-pointer">
                    About
                </li>
            </div>
            <div className="flex justify-around items-center col-start-4 col-end-6 md:col-start-5">
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
        </header>
    )
}

export default Header
