import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="text-center text-blue-300 max-w-xl p-8">
        <h1 className="text-5xl font-bold mb-4">
          Hello, I’m Dani 🔮
        </h1>
        <p className="text-lg mb-6">
          Welcome to my corner of the internet — where I'll be sharing 
          who I am, and what I'm up to. Check back regularly for updates!
        </p>

        <a
          href="#"
          className="inline-block px-6 py-3 bg-white text-purple-500 font-semibold rounded-full shadow hover:bg-pink-100 transition"
        >
          Explore More
        </a>
      </div>
    </section>
  )
}


