import React from 'react'

export const Footer: React.FC = () => {
  return (
        <footer 
          className="
            bg-gray-500
            text-center font-mono text-sm text-gray-700 
            py-6 shadow-inner
        ">
          <p>
            Made with 
            <span 
              className="
                text-blue-300
            ">{" "}
              ♥
              {" "}
            </span> 
            by 
            <span 
              className="
                font-semibold text-purple-300
            ">
            {" "}
              Dani
            {" "}
            </span> 
                        
            · © {new Date().getFullYear()}
            
          </p>
        </footer>
  )
}
