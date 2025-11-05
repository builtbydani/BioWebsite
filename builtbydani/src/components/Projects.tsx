import React from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data/projects'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const Projects: React.FC = () => {
  return (
        <section 
          id="projects" 
          className="
            min-h-screen p-8 scroll-mt-20 
            bg-gray-500
            text-gray-900
            font-mono
            flex items-center justify-center
        ">
          <motion.div 
            className="
              max-w-6xl w-full bg-gray-400 backdrop-blur-md 
              rounded-xl p-8 space-y-6 shadow-lg
          "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 
              className="
                text-4xl font-bold 
                text-center text-blue-300 mb-8
            ">

              Projects

            </h2>

            <motion.div 
              className="
                grid grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3 gap-6
            "
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  linkText={project.linkText}
                />
              ))}
            </motion.div>
          </motion.div>
        </section>
  )
}
