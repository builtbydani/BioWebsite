import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center 
    bg-gray-500">
      <div className="text-center font-mono text-blue-300 max-w-xl p-8">
        <h1 className="text-4xl font-bold mb-4">
          Hello, I’m Dani!
        </h1>
        <p className="text-lg text-gray-900 mb-6">
          Welcome to my corner of the internet; where I'll be sharing 
          who I am, and what I'm up to. Check back regularly for updates!
        </p>
      
      <div className="flex space-x-2 items-center justify-center">
        <a
          href="https://github.com/builtbydani"
          className="
            inline-block px-6 py-3 
            bg-gray-400 
            text-gray-900 font-semibold rounded
            shadow hover:bg-blue-300 transition
        ">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-richards-dev/"
          className="
            inline-block px-6 py-3
            bg-gray-400
            text-gray-900 font-semibold rounded
            shadow hover:bg-blue-300 transition
        ">
          LinkedIn
        </a>
        <a
          href="/2025_Resume_Final.pdf"
          target="_blank"
          rel="noopener"
          className="
            inline-block px-6 py-3
            bg-gray-400
            text-gray-900 font-semibold rounded
            shadow hover:bg-blue-300 transition
        ">
          Resume
        </a>
      </div>
      </div>
    </section>
  )
}


