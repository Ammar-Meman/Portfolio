import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBolt, FaEllipsisH } from 'react-icons/fa';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 1500); // Stays expanded for 1.5s after leaving
  };

  const isExpanded = !scrolled || isHovered;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300 ease-in-out top-2 sm:top-4 px-2 sm:px-4`}
    >
      <motion.div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        layout
        className={`glass-nav flex items-center shadow-2xl pointer-events-auto backdrop-blur-md bg-zinc-950/80 border border-zinc-800 transition-all duration-300 overflow-hidden ${
          scrolled 
            ? 'rounded-full px-1.5 py-1.5 sm:px-2 sm:py-2 gap-1 sm:gap-2 h-12 sm:h-14' 
            : 'rounded-full px-2 sm:px-4 py-2 sm:py-3 gap-2 sm:gap-4 md:gap-8 w-auto h-14 sm:h-[60px]'
        }`}
      >
        {/* Branding */}
        <motion.div layout className="flex items-center gap-2 px-2 shrink-0 overflow-hidden">
          <div className="bg-white text-black w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-md font-extrabold text-xs sm:text-sm">
            A
          </div>
          <AnimatePresence mode="popLayout">
            {isExpanded && (
              <motion.span 
                key="brand-name"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap text-white"
              >
                Ammar Meman
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Conditional Content */}
        <AnimatePresence mode="popLayout">
          {isExpanded ? (
            <motion.div 
              key="expanded-content"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex items-center gap-2 sm:gap-4 md:gap-8 overflow-hidden pointer-events-auto"
            >
              {/* Links */}
              <div className="hidden md:flex items-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium text-zinc-400 shrink-0">
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-1 sm:gap-2 shrink-0 pr-1">
                <a href="https://res.cloudinary.com/dwusthzz5/image/upload/v1776448356/portfolio/resume/Ammar_Meman_Resume_Final.pdf" target="_blank" className="bg-blue-500/30 no-underline group cursor-pointer relative shadow-[0_0_15px_rgba(59,130,246,0.15)] rounded-full p-px text-[10px] sm:text-sm font-semibold leading-6 text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.8)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex justify-center items-center z-10 rounded-full bg-blue-950/50 group-hover:bg-blue-900/50 transition-colors px-2 sm:px-4 py-1 sm:py-1.5 ring-1 ring-blue-500/20">
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 text-[10px] sm:text-sm">
                      Resume
                    </span>
                  </div>
                </a>
                <a href="#contact" className="bg-white text-black px-2 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium hover:bg-zinc-200 transition-colors shadow-sm block">
                  Contact
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center pr-2 sm:pr-3 shrink-0 text-zinc-400"
            >
              <FaEllipsisH size={16} className="sm:text-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};
