'use client'
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaCss3, FaHtml5, FaReact, FaJsSquare, FaNode } from "react-icons/fa"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiStrapi } from "react-icons/si";

import { motion } from 'framer-motion'
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypeAnimation } from "react-type-animation";

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

const Technologies = () => {
    return (
        <div className=" border-b pb-24">
            <div >
            <TextGenerateEffect
                        className='lg:text-left text-center text-[15px] md:text-2xl lg:text-xl'
                        words='Tengo 31 años y soy un desarrolador apasionado por la creación de aplicaciones web intuitivas y centradas en el usuario. Con disponibilidad full-time y movilidad propia, estoy listo para enfrentar nuevos desafíos y colaborar en proyectos emocionantes que empujen los límites del desarrollo web moderno.' 
                        
                    />
                    
            </div>
            
            {/* <div >
            <TextGenerateEffect
                        className='lg:text-left text-center text-[15px] md:text-2xl lg:text-xl'
                        words='Soy Nicolás Palacio, un Desarrollador Frontend apasionado por la creación de aplicaciones web intuitivas y centradas en el usuario.' 
                        
                    />
                    
            </div>
            <div >
            <TextGenerateEffect
                        className='lg:text-left text-center text-[15px] md:text-2xl lg:text-xl'
                        words='Mi trayectoria en el desarrollo web está impulsada por un profundo interés en el diseño de interfaces y la integración fluida de tecnologías web modernas.'
                        
                    />
                    
            </div>
            <div >
            <TextGenerateEffect
                        className='lg:text-left text-center text-[15px] md:text-2xl lg:text-xl'
                        words='Me especializo en JavaScript, Next.js y React, y tengo experiencia trabajando con Tailwind CSS y Bootstrap para crear interfaces responsivas y visualmente atractivas.'
                        
                    />
                    
            </div>
            <div >
            <TextGenerateEffect
                        className='lg:text-left text-center text-[15px] md:text-2xl lg:text-xl'
                        words='Recientemente, desarrollé una aplicación para la reserva de habitaciones de un hotel, donde fui responsable tanto del frontend como del backend.'
                        
                    />
                    
            </div>
            <div >
            <TextGenerateEffect
                        className='lg:text-left text-center text-[15px] md:text-2xl lg:text-xl'
                        words='Este proyecto me permitió demostrar mis habilidades en la creación de soluciones full-stack, combinando mi experiencia en React en el frontend y MongoDB y Express.js en el backend.'
                        
                    />
                    
            </div>
            <div >
            <TextGenerateEffect
                        className='lg:text-left text-center text-[15px] md:text-2xl lg:text-xl'
                        words='Anteriormente, también construí una aplicación web impulsada por inteligencia artificial que genera rutinas de gimnasio personalizadas utilizando la API de OpenAI.'
                        
                    />
                    
            </div>
            <div >
            <TextGenerateEffect
                        className='lg:text-left text-center text-[15px] md:text-2xl lg:text-xl'
                        words='Esta experiencia me permitió trabajar con integración de IA y mantener un enfoque centrado en el usuario, implementando mejoras continuas basadas en el feedback de los usuarios y clientes. Con disponibilidad full-time y movilidad propia, estoy listo para enfrentar nuevos desafíos y colaborar en proyectos emocionantes que empujen los límites del desarrollo web moderno.'
                        
                    />
                    
            </div> */}
            {/* <div className="text-white pt-6 mb-4 text-sm sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold text-center">
            <TypeAnimation
                        sequence={[
                            "Soy Nicolás Palacio, un Desarrollador Frontend apasionado por la creación de aplicaciones web intuitivas y centradas en el usuario. Mi trayectoria en el desarrollo web está impulsada por un profundo interés en el diseño de interfaces y la integración fluida de tecnologías web modernas. Me especializo en JavaScript, Next.js y React, y tengo experiencia trabajando con Tailwind CSS y Bootstrap para crear interfaces responsivas y visualmente atractivas. Recientemente, desarrollé una aplicación para la reserva de habitaciones de un hotel, donde fui responsable tanto del frontend como del backend. Este proyecto me permitió demostrar mis habilidades en la creación de soluciones full-stack, combinando mi experiencia en React en el frontend y MongoDB y Express.js en el backend. Anteriormente, también construí una aplicación web impulsada por inteligencia artificial que genera rutinas de gimnasio personalizadas utilizando la API de OpenAI. Esta experiencia me permitió trabajar con integración de IA y mantener un enfoque centrado en el usuario, implementando mejoras continuas basadas en el feedback de los usuarios y clientes. Con disponibilidad full-time y movilidad propia, estoy listo para enfrentar nuevos desafíos y colaborar en proyectos emocionantes que empujen los límites del desarrollo web moderno.",
                            1000
                            
                        ]}
                        wrapper="span"
                        speed={70}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
            </div> */}
            
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-center  m-10 text-blue-100 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold"
                id="technologies"
            >
                Tecnologias
            </motion.h1>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
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
                    className="rounded-2xl border-4 border-cyan-400 p-4 flex flex-col">
                    <FaReact className="text-7xl text-cyan-400" />
                    <span className=" text-sm text-center justify-center text-blue-100">React</span>
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.2 }}
                    className="rounded-2xl border-4 border-gray-500 p-4 flex flex-col">
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
                <motion.div
                    variants={iconVariants(3.5)}
                    initial='initial'
                    animate='animate'
                    whileHover={{ scale: 1.2 }}
                    className="rounded-2xl border-4 border-green-500 p-4 flex flex-col">
                    <DiMongodb className="text-7xl text-green-500" />
                    <span className=" text-sm text-center justify-center text-blue-100">MongoDb</span>
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
            </motion.div>
            
        </div>
    )
}

export default Technologies