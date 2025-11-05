import React from 'react'
import { motion } from 'framer-motion'
import { HighlightText } from './HighlightText'

export const About: React.FC = () => {
  return(
        <main 
          id="about" 
          className="
            min-h-screen p-8 scroll-mt-20
            bg-gray-500 
            text-gray-900
            font-mono
            flex items-center justify-center 
        ">

          <motion.div 
            className="
              max-w-3xl w-full 
              bg-gray-400 backdrop-blur-md 
              rounded-xl p-8 space-y-6 shadow-lg
          "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >

            <h2 
              className="
                text-4xl font-bold text-blue-300 text-center
            ">
              About Me
            </h2>

            <p
              className="
                text-lg leading-relaxed
            ">

              Hello! I’m

              <HighlightText color="purple" className="font-semibold"> Dani</HighlightText>,

              a developer and creative based in the U.S. currently studying
              Computer Science and learning everything from

              <HighlightText color="blue" className="font-medium"> TypeScript</HighlightText> to

              <HighlightText color="green" className="font-medium"> machine learning</HighlightText>.

            </p>

            <p 
              className="
                text-lg text-gray-900 leading-relaxed
            ">

              I’m building cute, powerful tools for the web and beyond; from my personal site  
              <code 
                className="
                bg-blue-300 px-1 rounded mx-1
              ">
                builtbydani.dev
              </code>

              , to game preservation projects, to visual/interactive full-stack apps. 
              I love skate culture, spooky/pastel aesthetics, and retro games.
            </p>

            <p 
              className="
                text-lg text-gray-900 leading-relaxed
            ">
              Currently focused on: 
              <span 
                className="
                  italic
              "> Full stack web development with Rust, PostgreSQL, and TypeScript
              </span>.
            </p>

            <p 
              className="
                text-lg text-gray-900 
                leading-relaxed
            ">
              Always learning, always building <HighlightText color="black"> 🖤</HighlightText>
            </p>
          </motion.div>
        </main>
  )
}
