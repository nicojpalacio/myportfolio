'use client';

import React, { useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import "@/components/projects.css"
interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  gitUrl: string;
  previewUrl:string
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Hotel reservation Website",
    description: 'Web disigned with nextjs and strapi for room reservations',
    image: "/capturafincalasvinas.png",
    gitUrl:"",
    previewUrl:"https://fincadelasvinas.vercel.app/"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: 'Modern animated portfolio',
    image: "/capturaportfolio.png",
    gitUrl:"",
    previewUrl:"https://nicojpalacio.vercel.app/"
  },
  {
    id: 3,
    title: "Website invitation",
    description: `Birthday's invitaion`,
    image: "/capturainvitacion.png",
    gitUrl:"",
    previewUrl:"https://cumple-clarita.vercel.app/"
  },
  {
    id: 4,
    title: "Gym Ai routine",
    description: 'Website to generate gym routines',
    image: "/capturagym.png",
    gitUrl:"",
    previewUrl:""
  }
];

const iconVariants = () => ({
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
})

const Projects: React.FC = () => {

  const ref = useRef(null);




  return (
    <section id="projects">
      
          <motion.h2
            className="text-center  m-10 text-blue-100 text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            id="projects"
          >
            My Projects
          </motion.h2>

          <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
            {projectsData.map((project, index) => (
              <motion.li
                key={index}
                variants={iconVariants()}
                initial="initial"
                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.li>
            ))}
          </ul>
        
    </section>
  );
};


export default Projects;