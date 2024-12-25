import React from 'react'
import BlurIn from './ui/blur-in'
import DotPattern from './ui/dot-pattern'

function HeroSection({ text }) {
    return (
        <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden  bg-light-blue-bg">
            <BlurIn
                word={text}
                className="text-4xl font-bold text-black dark:text-white"
            />
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            />
        </div>
    )
}

export default HeroSection