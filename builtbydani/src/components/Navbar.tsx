import React, {useEffect, useState} from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-shadow 
        ${scrolled ? 'shadowmd bg-purple-100/80 backdrop-blur-md' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-purple-500">builtbydani.dev</a>
        <div className="space-x-4">
          <a href="#about" className="text-gray-700 hover:text-purple-500 transition">About</a>
          <a href="#projects" className="text-gray-700 hover:text-purple-500 transition">Projects</a>
        </div>
      </div>
    </nav>
  );
};
