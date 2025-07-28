import React from 'react'

export const Footer: React.FC = () => {
  return (
        <footer 
          className="
            bg-gradient-to-br from-purple-100 to-pink-100 
            text-center text-sm text-gray-700 
            py-6 shadow-inner
        ">
          <p>
            Made with 
            <span 
              className="
                text-purple-500
            ">
              ♥
            </span> 
            by 
            <span 
              className="
                font-semibold text-purple-600
            ">
              Dani
            </span> 
            — 
            <code 
              className="
                mx-1 bg-pink-100 
                text-sm px-1 rounded
            "> 
              builtbydani.dev
            </code>
            
            · © {new Date().getFullYear()}
            
          </p>
        </footer>
  )
}
