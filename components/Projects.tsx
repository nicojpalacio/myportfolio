'use client';

import React, {  useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Hotel reservation Website",
    description: 'Web disigned with nextjs and strapi',
    image: "/capturafincalasvinas.png"
  },
  {
    id: 2,
    title: "Hotel reservation Websites",
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    image: "/capturaportfolio.png"
  },
  {
    id: 3,
    title: "Hotel reservation Website",
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    image: "/capturainvitacion.png"
  },
  {
    id: 4,
    title: "Hotel reservation Website",
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    image: "/capturagym.png"
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
    initial={{ opacity: 0, y: -50 }}
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
            /* gitUrl={project.gitUrl}
            previewUrl={project.previewUrl} */
          />
        </motion.li>
      ))}
    </ul>
  </section>
);
};


export default Projects;