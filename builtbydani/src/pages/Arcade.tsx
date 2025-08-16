import React from 'react'
import { GameCard } from "../components/GameCard"

export const Arcade: React.FC = () => {
  return (
    <main 
      className="
      min-h-screen p-8 
      bg-gradient-to-br from-yellow-100 to-pink-200
    ">
      <div 
        className="
          max-w-6xl mx-auto
      ">
        <h1 
          className="
            text-4xl font-bold 
            text-center text-purple-500 mb-6
        ">
          🎮 Dani's Arcade 🎮
        </h1>

        <div
          className="grid grid-cols-1 
          sm:grid-cols-2 lg:grid-cols-3 
          gap-6 justify-items-center
        ">
          <GameCard
            title="DaniBall"
            description="A browser toy inspired by danball.jp"
            link="https://builtbydani.github.io/dani-ball/"
          />
          <GameCard
            title="Brickslay"
            description="A neon rainbow breakout clone"
            link="https://builtbydani.github.io/brickslay/"
          />
          <GameCard 
            title="SlayInvaders"
            description="A pastel take on the classic"
            link="https://builtbydani.github.io/slayinvadersv2/"
          />
        </div>
      </div>
    </main>
  )
}
