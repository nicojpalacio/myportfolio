import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
    return (
        <div className=' pt-20' id='goup'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='hidden md:block top-10 left-full h-[80vh] w-[50vw]' fill='pink' />
                <Spotlight className='hidden md:block top-28 left-80 h-[80vh] w-[50vw]' fill='pink' />
            </div>
            <div className="h-[27rem] w-full dark:bg-black bg-purple-900 bg-dot-white/[0.3] dark:bg-dot-black/[0.3] flex items-center justify-center absolute top-0 left-0 z-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-purple-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className='flex justify-center  my-12 lg:my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    
                    
                    <h2 className='tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Portfolio developed with Next.js
                    </h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Full Stack Developer'
                        
                    />
                   {/*  <div className='m-5 '>
                        <Image
                            src='/logofinca.jpg'
                            alt='image'
                            width={200}
                            height={200}
                            className='rounded-full'
                        />
                    </div> */}
                    <button className='relative px-6 py-3 mt-5 w-full sm:w-fit rounded-full text-white cursor-pointer z-0 overflow-hidden group'>
                        <span className='absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-500'></span>
                        <span className='relative z-10'>Download CV</span>
                    </button>


                </div>
            </div>
        </div>
    )
}

export default Hero