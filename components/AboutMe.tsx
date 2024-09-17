'use client'
import { TypeAnimation } from "react-type-animation";
import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section className='flex flex-col justify-start sm:flex-row items-center '>
            {/* Imagen arriba del h1 en mobile y a la par en desktop */}
            <motion.div 
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{delay:1, duration:0.4, ease:'easeIn'}
            }}
            className='relative p-5 sm:mb-0 sm:mr-8'>
                <motion.div
                    initial={{opacity:0}}
                    animate={{
                        opacity:1,
                        transition:{delay:1.2, duration:0.4, ease:'easeInOut'}
                    }}
                >
                    <Image
                        src='/fotoperfilsinfondo.png'
                        alt='image'
                        width={200}
                        height={200}
                        className='rounded-3xl'
                    />
                </motion.div>

                {/* SVG circle rotating around the image */}
                <motion.svg
                    className='absolute top-3 -left-14 w-[350px] h-[350px]'
                    viewBox='0 0 500 500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='transparent'
                    /* animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity,
                    }} */
                >
                    <motion.circle
                        cx='250'
                        cy='250'
                        r='200'
                        stroke='rgb(236 72 153)'
                        strokeWidth='4'
                        strokeDasharray='round'
                        strokeLinecap='round'
                        initial={{strokeDasharray:'24 10 0 0'}}
                        animate={{
                            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                            rotate:[120,360]
                        }}
                        transition={{
                            duration:5,
                            repeat:Infinity,
                            repeatType:'reverse'
                        }}
                        fill='transparent'
                    />
                </motion.svg>
            </motion.div>

            <div className='flex flex-col items-center text-center sm:text-left'>
                <h1 className='text-white pt-6 mb-4 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold z-10'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
                        Hola, mi nombre es Nicolas Palacio{" "}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            "Desarrollador Frontend",
                            1000,
                            "Desarrollador Backend",
                            1000,
                            "Diseñador UI/UX",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
                </h1>
            </div>
        </section>
    )
}

export default AboutMe;
