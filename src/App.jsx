import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FallingPattern } from './components/ui/falling-pattern';

const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Hackathons = lazy(() => import('./components/Hackathons').then(m => ({ default: m.Hackathons })));
const Certifications = lazy(() => import('./components/Certifications').then(m => ({ default: m.Certifications })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      // ... existing lenis config
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#09090b] min-h-screen text-white selection:bg-white selection:text-black relative overflow-hidden">
      
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#09090b]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white px-4 text-center"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Ammar Meman
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-noise z-0 pointer-events-none absolute inset-0 opacity-[0.03]" />
      
      {/* Background Particles Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <FallingPattern />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
          <Hero />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-zinc-500">Loading...</div>}>
            <About />
            <Skills />
            <Projects />
            <Hackathons />
            <Certifications />
            <Contact />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
