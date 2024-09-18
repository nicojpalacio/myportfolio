'use client'
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaReact, FaJsSquare, FaNode } from "react-icons/fa"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiStrapi } from "react-icons/si";
import React, { memo } from 'react';
import { motion } from 'framer-motion'

const iconVariants = (duration: number) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear" as const,
            repeat: Infinity,
            repeatType: 'reverse' as const,
        }
    }
})

const Technologies = memo(() => {
    return (
        <div className=" border-b pb-24">
            <motion.h1 
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
    className="text-center text-4xl m-10 text-blue-100"
>
    Tecnologias
</motion.h1>
            <motion.div whileInView={{opacity:1 , x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-violet-400 p-4 flex flex-col">
                    <FaHtml5 className="text-7xl text-orange-500" />
                    <span className="text-sm text-center justify-center text-blue-100">HTML5</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-violet-400 p-4 flex flex-col">
                    <FaCss3 className="text-7xl text-blue-500" />
                    <span className=" text-sm text-center justify-center text-blue-100">Css</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-violet-400 p-4 flex flex-col">
                    <FaJsSquare className="text-7xl text-yellow-400" />
                    <span className=" text-sm text-center justify-center text-blue-100">Javascript</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-violet-400 p-4 flex flex-col">
                    <FaNode className="text-7xl text-green-600" />
                    <span className=" text-sm text-center justify-center text-blue-100">Nodejs</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-violet-400 p-4 flex flex-col">
                    <FaReact className="text-7xl text-cyan-400" />
                    <span className=" text-sm text-center justify-center text-blue-100">React</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-violet-400 p-4 flex flex-col">
                    <RiNextjsFill className="text-7xl" />
                    <span className=" text-sm text-center justify-center text-blue-100">Nextjs</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-violet-400 p-4 flex flex-col">
                    <RiTailwindCssFill className="text-7xl text-cyan-500" />
                    <span className=" text-sm text-center justify-center text-blue-100">Tailwind</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-violet-400 p-4 flex flex-col">
                    <DiMongodb className="text-7xl text-green-500" />
                    <span className=" text-sm text-center justify-center text-blue-100">MongoDb</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-violet-400 p-4 flex flex-col">
                    <SiStrapi className="text-7xl text-purple" />
                    <span className=" text-sm text-center justify-center text-blue-100">Strapi</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-violet-400 p-4 flex flex-col">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                    <span className=" text-sm text-center justify-center text-blue-100">Postgre</span>
                </motion.div>
            </motion.div>
        </div>
    )
})

export default Technologies