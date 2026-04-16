import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="min-h-screen relative bg-black text-white flex flex-col justify-end overflow-hidden">



      <div className="w-full pt-48 pb-0 relative">
        <div className="container mx-auto px-6 relative z-10">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
                Lets build <br />
                <span className="text-gray-500">incredible work together.</span>
              </h2>

              <div className="space-y-2">
                <p className="text-gray-500 text-sm uppercase tracking-wide">Email</p>
                <a href="mailto:ammar.meman.cg@gmail.com" className="text-xl font-medium hover:text-white transition-colors border-b border-gray-700 pb-1">
                  ammar.meman.cg@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/ammarmeman/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/Ammar-Meman" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 pb-40 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6">
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex gap-8">
              <p>Based in <span className="text-white">India</span></p>
              <p>© 2026 Ammar Meman</p>
            </div>
          </div>

        </div>

        {/* Massive Watermark Name */}
        <div className="border-t border-white/10 w-full overflow-hidden leading-none">
          <h1 className="text-[13vw] font-bold text-white text-center tracking-tighter leading-[0.8] translate-y-[10%] whitespace-nowrap">
            Ammar Meman
          </h1>
        </div>

      </div>
    </footer>
  );
};
