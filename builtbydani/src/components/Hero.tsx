import React from 'react'
import { motion } from 'framer-motion'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center 
    bg-gray-500">
      <div className="text-center font-mono text-blue-300 max-w-xl p-8">
        <motion.h1 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Hello, I'm Dani!
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Welcome to my corner of the internet; where I'll be sharing 
          who I am, and what I'm up to. Check back regularly for updates!
        </motion.p>
      
      <motion.div 
        className="flex space-x-2 items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <motion.a
          href="https://github.com/builtbydani"
          className="
            inline-block px-6 py-3 
            bg-gray-400 
            text-gray-900 font-semibold rounded
            shadow hover:bg-blue-300 transition
        "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Github
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/daniel-richards-dev/"
          className="
            inline-block px-6 py-3
            bg-gray-400
            text-gray-900 font-semibold rounded
            shadow hover:bg-blue-300 transition
        "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LinkedIn
        </motion.a>
        <motion.a
          href="/2025_Resume_Final.pdf"
          target="_blank"
          rel="noopener"
          className="
            inline-block px-6 py-3
            bg-gray-400
            text-gray-900 font-semibold rounded
            shadow hover:bg-blue-300 transition
        "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>
      </motion.div>
      </div>
    </section>
  )
}

