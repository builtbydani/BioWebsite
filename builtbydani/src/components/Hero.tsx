import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-indigo-600">
      <div className="text-center text-white max-w-xl p-8">
        <h1 className="text-5xl font-bold mb-4">
          Hey, I’m Dani 💖
        </h1>
        <p className="text-lg mb-6">
          Welcome to my dev world — I’m building something beautiful with React, Tailwind, and vibes.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-white text-pink-600 font-semibold rounded-full shadow hover:bg-pink-100 transition"
        >
          Explore More
        </a>
      </div>
    </section>
  )
}


