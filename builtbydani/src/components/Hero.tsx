import React from 'react'
import { motion } from 'framer-motion'
import { heroContent } from '../data/profile'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-500 flex items-center justify-center px-6 py-20 sm:py-24">
      <div className="w-full max-w-3xl text-center font-mono text-blue-300 space-y-6">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {heroContent.heading}
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg text-gray-900 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {heroContent.intro}
        </motion.p>

        <motion.ul
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center text-sm sm:text-base text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          {heroContent.snapshot.map((item) => (
            <li key={item} className="bg-gray-400 px-3 py-1.5 rounded-md shadow">
              {item}
            </li>
          ))}
        </motion.ul>
       
      <motion.div 
        className="flex flex-wrap gap-3 items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        {heroContent.links.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.isExternalFile ? "_blank" : undefined}
            rel={link.isExternalFile ? "noopener" : undefined}
            className="
              inline-block px-6 py-3
              bg-gray-400
              text-gray-900 font-semibold rounded
              shadow hover:bg-blue-300 transition
          "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>
      </div>
    </section>
  )
}
