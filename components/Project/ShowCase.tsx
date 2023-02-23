import React from 'react'
import { Projects } from '@/typings'
import Image from 'next/image'

function ShowCase(props: Projects & { key: number }) {
    return (
        <div key={props.key} className="text-center rounded-[10px] shadow-outline-white">
            <div className="w-full h-[50vw] sm:h-[225px] relative">
                <Image src={props.image} alt={props.source} fill />
            </div>
            <h1 className="font-semibold text-3xl tracking-wide text-[#9cc9e3] py-[5px]">
                {props.title}
            </h1>
            <hr className="w-[50px] h-[3px] my-[20px] mx-auto bg-[#d0bb57]"></hr>
            <p className="text-justify text-[#e4e6e7] leading-6 p-1 sm:px-[50px]">
                {props.description}
            </p>
            <p>Stack</p>
            <ul className="flex justify-around p-5 ">
                {props.tags.map((tag: string, i: number) => (
                    <li className="text-[#d8bfbf]" key={i}>
                        {tag}
                    </li>
                ))}
            </ul>
            <ul className="flex justify-around py-[25px] rounded-[10px]">
                <li className="py-2 px-[15px] bg-[#6b3030] rounded-2xl text-[#d4c0c0]">Code</li>
                <li className="py-2 px-[15px] bg-[#6b3030] rounded-2xl text-[#d4c0c0]">Source</li>
            </ul>
        </div>
    )
}

export default ShowCase
