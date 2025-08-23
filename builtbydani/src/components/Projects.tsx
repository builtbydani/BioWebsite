import React from 'react' 

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
              {/* Project 1 */}
              <div 
                className="
                  bg-purple-100/80 p-6 
                  rounded-xl 
                  shadow hover:shadow-lg transition
              ">
                <h3 
                  className="
                    text-xl font-semibold mb-2
                ">
                  Visualio
                </h3>
                <p 
                  className="
                    text-sm text-gray-600 mb-4
                ">
                  An audio visualizer built for the browser with React.
                </p>

                <a
                  href="https://github.com/builtbydani/visualio"
                  target="_blank"
                  className="text-blue-300 font-medium hover:underline"
                >
                  View on GitHub →
                </a>
              </div>

              {/* Project 2 */}
              <div 
                className="
                  bg-purple-100/80 p-6 rounded-xl 
                  shadow hover:shadow-lg transition
              ">
                <h3 
                  className="
                    text-xl font-semibold mb-2
                ">
                  DSA Showcase
                </h3>
                  <p 
                    className="
                      text-sm text-gray-600 mb-4
                  ">
                    A visualization of Data Structures and Algorithms.
                    Built with React, JavaScript, and Tailwindcss
                  </p>
                  <a
                    href="https://github.com/builtbydani/dsa-showcase"
                    target="_blank"
                    className="text-blue-300 font-medium hover:underline"
                  >
                    View on GitHub →
                  </a>
                </div>

              {/* Project 3 */}
              <div 
                className="
                  bg-purple-100/80 p-6 rounded-xl 
                  shadow hover:shadow-lg transition
              ">
                <h3 
                  className="
                    text-xl font-semibold mb-2
                ">
                    Daniball
                </h3>
                <p 
                  className="
                    text-sm text-gray-600 mb-4
                ">
                  A browser toy inspired by danball.jp 
                  Play with particles like sand, water, oil, and more!
                </p>
                <a
                  href="https://builtbydani.github.io/dani-ball/"
                  className="text-blue-300 font-medium hover:underline"
                >
                  Try it out! V1.0 out now!
                </a>
              </div>
            </div>
          </div>
        </section>
  )
}
