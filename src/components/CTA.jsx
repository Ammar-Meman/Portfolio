import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

export const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-light-bg relative overflow-hidden">

      {/* Background Gradients for Subtle Depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[2rem] shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto backdrop-blur-xl border border-white/20 bg-white/60"
        >
          <div className="flex flex-col items-center mb-6">
            <div className="w-14 h-14 rounded-full bg-gray-200 mb-4 overflow-hidden border-2 border-white shadow-md">
              <img src="https://res.cloudinary.com/dsxrsjun1/image/upload/v1770322038/ChatGPT_Image_Feb_6_2026_01_21_22_AM_shhazq.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-base text-gray-800">Ammar Meman</h4>
            <p className="text-gray-500 text-xs tracking-wider uppercase mt-1">Full-Stack - Frontend Focused</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-normal mb-6 text-gray-800 tracking-tight">
            Let's Connect.
          </h2>

          <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm leading-relaxed font-light">
            I enjoy creating responsive and user-friendly web applications using JavaScript and React. I'm always excited to learn, improve, and work on meaningful projects with passionate people.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:ammar.meman.cg@gmail.com" className="group px-6 py-3 bg-black text-white rounded-full text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-all shadow-lg">
              <FaEnvelope className="text-xs group-hover:rotate-12 transition-transform" /> Email me
            </a>
            <a href="https://www.linkedin.com/in/ammarmeman/" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/Ammar-Meman" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
              <FaGithub /> GitHub
            </a>
            <a href="/ammar_meman_resume.pdf" download className="px-5 py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
              <FaFileAlt /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
