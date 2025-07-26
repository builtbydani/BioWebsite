import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
        <main id="about" className="min-h-screen p-8 bg-gradient-to-br from-purple-100 to-pink-100 
        text-gray-900 flex items-center justify-center scroll-mt-20">
          <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md 
          rounded-xl p-8 space-y-6 shadow-lg">
            <h2 className="text-4xl font-bold text-blue-300 text-center">About Me</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Hey! I’m <span className="font-semibold text-purple-500">Dani</span>, a 
              developer and creative based in the U.S.  
              I’m currently studying <span className="font-medium">Computer Science</span> and 
              learning everything from  
              <span className="font-medium text-blue-300"> JavaScript</span> to 
              <span className="font-medium text-orange-300"> Rust</span> to 
              <span className="font-medium text-purple-300"> machine learning</span>.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I’m building cute, powerful tools for the web and beyond — from my personal site  
              <code className="bg-purple-200 px-1 rounded mx-1">builtbydani.dev</code>, 
              to game preservation projects,  
              to visual/interactive full-stack apps. 
              I love skate culture, spooky/pastel aesthetics, and retro games.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Currently learning: <span className="italic">Rust, SQL, React, 
              full-stack dev, and cybersec</span>.  
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Always learning, always building. <span className="text-black">🖤</span>
            </p>
          </div>
        </main>
        <section id="projects" className="min-h-screen p-8 bg-gradient-to-br 
        from-pink-100 to-purple-100 text-gray-900 flex items-center justify-center scroll-mt-20">
          <div className="max-w-6xl w-full bg-white/80 backdrop-blur-md 
          rounded-xl p-8 space-y-6 shadow-lg">
            <h2 className="text-4xl font-bold text-center text-blue-300 mb-8">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">PKPlaza</h3>
              <p className="text-sm text-gray-600 mb-4">
                A Pokémon ROM launcher & preservation tool, styled like a retro Steam Deck library.
              </p>
              <a
                href="https://github.com/builtbydani/pkplaza"
                target="_blank"
                className="text-pink-500 font-medium hover:underline"
              >
                View on GitHub →
              </a>
            </div>

              {/* Project 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">BuiltByDani.dev</h3>
                <p className="text-sm text-gray-600 mb-4">
                  This very site — a living portfolio, coded in React, 
                  TypeScript, and Tailwind.
                </p>
                <a
                  href="https://github.com/builtbydani/BioWebsite"
                  target="_blank"
                  className="text-pink-500 font-medium hover:underline"
                >
                  View on GitHub →
                </a>
              </div>

              {/* Project 3 */}
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Dani-ball</h3>
                <p className="text-sm text-gray-600 mb-4">
                  A browser toy inspired by danball.jp 
                  Play with particles like sand, water, oil, and more!
                </p>
                <a
                  href="https://builtbydani.github.io/dani-ball/"
                  className="text-pink-500 font-medium hover:underline"
                >
                  Try it out! **Build in progress**
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gradient-to-br from-purple-100 to-pink-100 text-center 
        text-sm text-gray-700 py-6 shadow-inner">
          <p>
            Made with <span className="text-purple-500">♥</span> by 
            <span className="font-semibold text-purple-600"> Dani</span> — 
            <code className="mx-1 bg-pink-100 text-sm px-1 rounded"> builtbydani.dev</code> 
            · © {new Date().getFullYear()}
          </p>
        </footer>
    </>
  );
}

export default App;

