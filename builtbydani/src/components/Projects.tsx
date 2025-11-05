import React from 'react'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data/projects'

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
          <div 
            className="
              max-w-6xl w-full bg-gray-400 backdrop-blur-md 
              rounded-xl p-8 space-y-6 shadow-lg
          ">
            <h2 
              className="
                text-4xl font-bold 
                text-center text-blue-300 mb-8
            ">

              Projects

            </h2>

            <div 
              className="
                grid grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3 gap-6
            ">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  linkText={project.linkText}
                />
              ))}
            </div>
          </div>
        </section>
  )
}
