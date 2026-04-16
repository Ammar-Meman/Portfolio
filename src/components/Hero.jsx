import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { ShaderAnimation } from './ui/shader-animation';
export const Hero = () => {
  const profileImg = "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362373/portfolio/profile/prxuhk2izlyyy16qxikw.png";
  const roles = ["Frontend Engineer", "Designer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-transparent pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      <ShaderAnimation />
      <div className="absolute inset-0 bg-black/60 z-[-5] pointer-events-none" />

      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 md:px-8">

        {/* Mobile: stacked layout. Desktop: flex layout */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-12 md:gap-20 lg:gap-32 w-full">

          {/* Left / Top — Primary Content */}
          <motion.div
            className="space-y-6 text-center md:text-left max-w-xl lg:max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm text-sm font-semibold text-zinc-300">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse relative">
                <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
              </div>
              Available for Work
            </div>

            {/* Name + Role */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-3">
                Ammar Meman
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-400 mb-6 flex items-center gap-2 flex-wrap justify-center md:justify-start">
                <span>I am</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block text-blue-400 font-semibold"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-zinc-400 max-w-lg leading-relaxed font-light mx-auto md:mx-0">
                <p>
                  Focused on building modern digital experiences that balance user needs and business goals.
                </p>
                <p>
                  I create clean UI, smooth user experiences, and scalable frontend systems — continuously improving through real-world projects.
                </p>
              </div>
            </div>

            {/* Mobile-only image — shows between text and buttons */}
            <motion.div
              className="flex justify-center md:hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 group mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative z-10 neon-ring">
                  <img
                    src={profileImg}
                    alt="Ammar Meman"
                    className="w-full h-full rounded-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <button
                className="flex items-center gap-2 px-6 py-3 text-blue-400 border border-blue-500/30 rounded-full bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all shadow-[0_0_15px_rgba(59,130,246,0.15)] cursor-pointer font-medium"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Work <FaArrowRight size={13} />
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 text-zinc-300 border border-zinc-800 rounded-full bg-zinc-900/50 hover:bg-zinc-800/50 hover:text-white transition-all cursor-pointer font-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FaEnvelope size={13} /> Contact
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2 justify-center md:justify-start">
              <a href="https://github.com/Ammar-Meman" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors bg-zinc-900 border border-zinc-800 p-2.5 rounded-full hover:border-zinc-700">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ammarmeman/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors bg-zinc-900 border border-zinc-800 p-2.5 rounded-full hover:border-zinc-700">
                <FaLinkedin size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-400 transition-colors bg-zinc-900 border border-zinc-800 p-2.5 rounded-full hover:border-zinc-700">
                <FaTwitter size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column — Desktop only image */}
          <motion.div
            className="hidden md:flex relative justify-center items-center p-8 md:p-10 lg:p-12"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 group mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative z-10 neon-ring">
                <img
                  src={profileImg}
                  alt="Ammar Meman"
                  className="w-full h-full rounded-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
