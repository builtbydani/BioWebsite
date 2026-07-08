import React from 'react'
import { motion } from 'framer-motion'
import { aboutContent } from '../data/profile'

export const About: React.FC = () => {
  return(
        <section 
          id="about" 
          className="
            min-h-screen scroll-mt-20 px-6 py-16 sm:py-20
            bg-gray-500 
            text-gray-900
            font-mono
            flex items-center justify-center 
        ">

          <motion.div 
            className="
              max-w-4xl w-full 
              bg-gray-400 backdrop-blur-md 
              rounded-xl p-6 sm:p-8 space-y-8 shadow-lg
          "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >

            <h2 
              className="
                text-3xl sm:text-4xl font-bold text-blue-300 text-center
            ">
              {aboutContent.heading}
            </h2>

            <dl className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {aboutContent.profileHighlights.map((item) => (
                <div key={item.label} className="bg-purple-100/70 rounded-lg p-4">
                  <dt className="text-sm uppercase tracking-wide text-gray-700">{item.label}</dt>
                  <dd className="mt-1 text-base font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="space-y-4">
              {aboutContent.bio.map((paragraph) => (
                <p key={paragraph} className="text-base sm:text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="text-base sm:text-lg leading-relaxed italic">{aboutContent.footer}</p>
          </motion.div>
        </section>
  )
}
