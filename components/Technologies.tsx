'use client'
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaReact, FaJsSquare, FaNode } from "react-icons/fa"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiStrapi } from "react-icons/si";

import { motion } from 'framer-motion'
import { TextGenerateEffect } from "./ui/TextGenerateEffect";


const iconVariants = (duration: number) => ({
    initial: { y: -5 },
    animate: {
        y: [5, -5],
        transition: {
            duration: duration,
            ease: "linear" as const,
            repeat: Infinity,
            repeatType: 'reverse' as const,
        }
    }
})

const Technologies = () => {
    return (
        <div className="  pb-[20px]">
            <div >
                <TextGenerateEffect
                    className='lg:text-left text-center text-[15px] md:text-2xl lg:text-xl'
                    words='I am 31 years old and a passionate developer focused on creating intuitive, user-centered web applications. With full-time availability and personal mobility, I am ready to face new challenges and collaborate on exciting projects that push the boundaries of modern web development.'

                />

            </div>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-center  m-10 text-blue-100 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold"
                id="technologies"
            >
                Technologies
            </motion.h1>
            
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} >
                    <p className="text-center  m-10 text-blue-100 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">Frontend</p>
                    <div className="flex flex-wrap items-center justify-center gap-4 ">
                        <motion.div
                            variants={iconVariants(2.5)}
                            initial='initial'
                            animate='animate'
                            whileHover={{ scale: 1.2 }}
                            className="rounded-2xl border-4 border-orange-500 p-4 flex flex-col">
                            <FaHtml5 className="text-7xl text-orange-500" />
                            <span className="text-sm text-center justify-center text-blue-100">HTML5</span>
                        </motion.div>
                        <motion.div
                            variants={iconVariants(3.5)}
                            initial='initial'
                            animate='animate'
                            whileHover={{ scale: 1.2 }}
                            className="rounded-2xl border-4 border-blue-500 p-4 flex flex-col">
                            <FaCss3 className="text-7xl text-blue-500" />
                            <span className=" text-sm text-center justify-center text-blue-100">Css</span>
                        </motion.div>
                        <motion.div
                            variants={iconVariants(2.5)}
                            initial='initial'
                            animate='animate'
                            whileHover={{ scale: 1.2 }}
                            className="rounded-2xl border-4 border-yellow-400 p-4 flex flex-col">
                            <FaJsSquare className="text-7xl text-yellow-400" />
                            <span className=" text-sm text-center justify-center text-blue-100">Javascript</span>
                        </motion.div>


                        <motion.div
                            variants={iconVariants(2.5)}
                            initial='initial'
                            animate='animate'
                            whileHover={{ scale: 1.2 }}
                            className="rounded-2xl border-4 border-cyan-400 p-4 flex flex-col">
                            <FaReact className="text-7xl text-cyan-400" />
                            <span className=" text-sm text-center justify-center text-blue-100">React</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariants(3.5)}
                            initial='initial'
                            animate='animate'
                            whileHover={{ scale: 1.2 }}
                            className="rounded-2xl border-4 text-white border-gray-500 p-4 flex flex-col">
                            <RiNextjsFill className="text-7xl" />
                            <span className=" text-sm text-center justify-center text-blue-100">Nextjs</span>
                        </motion.div>

                        <motion.div
                            variants={iconVariants(2.5)}
                            initial='initial'
                            animate='animate'
                            whileHover={{ scale: 1.2 }}
                            className="rounded-2xl border-4 border-cyan-500 p-4 flex flex-col">
                            <RiTailwindCssFill className="text-7xl text-cyan-500" />
                            <span className=" text-sm text-center justify-center text-blue-100">Tailwind</span>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.5 }} >
                    <p className="text-center  m-10 text-blue-100 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">Backend</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.div
                            variants={iconVariants(3.5)}
                            initial='initial'
                            animate='animate'
                            whileHover={{ scale: 1.2 }}
                            className="rounded-2xl border-4 border-green-600 p-4 flex flex-col">
                            <FaNode className="text-7xl text-green-600" />
                            <span className=" text-sm text-center justify-center text-blue-100">Nodejs</span>
                        </motion.div>
                        <motion.div
                            variants={iconVariants(2.5)}
                            initial='initial'
                            animate='animate'
                            whileHover={{ scale: 1.2 }}
                            className="rounded-2xl border-4 border-violet-400 p-4 flex flex-col">
                            <SiStrapi className="text-7xl text-purple" />
                            <span className=" text-sm text-center justify-center text-blue-100">Strapi</span>
                        </motion.div>
                        <motion.div
                            variants={iconVariants(3.5)}
                            initial='initial'
                            animate='animate'
                            whileHover={{ scale: 1.2 }}
                            className="rounded-2xl border-4 border-sky-700 p-4 flex flex-col">
                            <BiLogoPostgresql className="text-7xl text-sky-700" />
                            <span className=" text-sm text-center justify-center text-blue-100">Postgre</span>
                        </motion.div>
                        <motion.div
                            variants={iconVariants(3.5)}
                            initial='initial'
                            animate='animate'
                            whileHover={{ scale: 1.2 }}
                            className="rounded-2xl border-4 border-green-500 p-4 flex flex-col">
                            <DiMongodb className="text-7xl text-green-500" />
                            <span className=" text-sm text-center justify-center text-blue-100">MongoDb</span>
                        </motion.div>
                    </div>
                </motion.div>
            
        </div>
    )
}

export default Technologies