import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isArcade = location.pathname === "/arcade";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`
          fixed top-0 left-0 w-full z-50 
          transition-shadow 
          ${scrolled 
            ? 'shadowmd bg-purple-100/40 backdrop-blur-md' 
            : ''}
      `}
    >
      <div 
        className="
          max-w-6xl mx-auto 
          px-6 py-4
          font-mono
          sm:flex justify-between 
          items-center
      ">
        <a 
          href="/" 
          className="
            text-xl font-bold 
            text-blue-300
          ">
            builtbydani.dev
        </a>
        <div 
          className="
            space-x-4
        ">
        {!isArcade && (
          <>
            <a 
              href="#about" 
              className="
                text-gray-700 
                hover:text-blue-300 
                transition
            ">
              About
            </a>
            <a 
              href="#projects" 
              className="
                text-gray-700 
                hover:text-blue-300 
                transition
            ">
              Projects
            </a>
          </>
        )}
            <Link 
              to="/arcade"
              className="
              text-gray-700
              hover:text-blue-300">
              Arcade
            </Link>
          </div>
        </div>
      </nav>
  );
};
