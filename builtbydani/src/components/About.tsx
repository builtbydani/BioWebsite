import React from 'react'

export const About: React.FC = () => {
  return(
        <main 
          id="about" 
          className="
            min-h-screen p-8 scroll-mt-20
            bg-gradient-to-br from-purple-100 to-pink-100 
            text-gray-900 
            flex items-center justify-center 
        ">

          <div 
            className="
              max-w-3xl w-full 
              bg-white/80 backdrop-blur-md 
              rounded-xl p-8 space-y-6 shadow-lg
          ">

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

              <span 
                className="
                  font-semibold text-purple-300
              ">
                {" "}Dani
              </span>,

              a developer and creative based in the U.S. currently studying
              Computer Science and learning everything from

              <span 
                className="
                  font-medium text-blue-300
              "> 
                {" "}TypeScript
              </span> 

              {" "}to

              <span 
                className="
                  font-medium text-green-300
              ">
              {" "}machine learning
              </span>.

            </p>

            <p 
              className="
                text-lg text-gray-700 leading-relaxed
            ">

              I’m building cute, powerful tools for the web and beyond; from my personal site  
              <code 
                className="
                bg-purple-300 px-1 rounded mx-1
              ">
                builtbydani.dev
              </code>

              , to game preservation projects, to visual/interactive full-stack apps. 
              I love skate culture, spooky/pastel aesthetics, and retro games.
            </p>

            <p 
              className="
                text-lg text-gray-700 leading-relaxed
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
                text-lg text-gray-700 
                leading-relaxed
            ">
              Always learning, always building 
              <span 
                className="
                  text-black
                ">
                  {" "}🖤
                </span>
            </p>
          </div>
        </main>
  )
}
