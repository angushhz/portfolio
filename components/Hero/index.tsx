import React from 'react'
import { IconHero } from '../Icon'
function Hero() {
    return (
        <div className="container">
            <h1 className="header-section sm:header-section-larger ">
                Welcome To <br />
                My Personal Portfolio
            </h1>
            <p className="header-content sm:header-content-larger">
                The purpose of J`avaScript Mastery is to help aspiring and established developers to
                take their development skills to the next level and build awesome apps.
            </p>
            <button className="w-full h-8 mb-16 text-[14px] bg-gradient-to-r from-[#13ADC7] to-[#945DD6] rounded-full font-semibold md:text-2xl md:h-16 md:max-w-[262px] opacity-90 transition duration-300 ease-linear md:hover:opacity-100">
                Learn More
            </button>
            <div className="hidden sm:block  absolute top-0 right-0 -z-10 w-[320px] h-[320px] md:w-[520px] md:h-[520px] ">
                <IconHero />
            </div>
        </div>
    )
}

export default Hero
