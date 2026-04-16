import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaCode, FaRocket } from 'react-icons/fa';

export const About = () => {
  const timeline = [
    {
      icon: <FaGraduationCap />,
      year: "2022",
      title: "Foundation",
      description: "Completed 10th. Focused on academics and building a strong foundation."
    },
    {
      icon: <FaBook />,
      year: "2023–2025",
      title: "Academic Phase",
      description: "Completed 11th & 12th. Developed discipline, consistency, and problem-solving mindset."
    },
    {
      icon: <FaCode />,
      year: "2025",
      title: "Start of Development",
      description: "Joined Coding Gita (B.E. Computer Engineering). Started my journey in programming and web development."
    },
    {
      icon: <FaRocket />,
      year: "2026",
      title: "Current Growth",
      description: "Learning Frontend & Full-Stack Development. Building real-world projects and improving problem-solving skills."
    }
  ];

  const stats = [
    { value: "500+", label: "Hours of Coding" },
    { value: "10+", label: "Projects Completed" },
    { value: "15+", label: "Repositories" },
    { value: "9.86", label: "SGPA" },
  ];

  return (
    <section id="about" className="py-24 bg-transparent border-t border-zinc-800/50">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Top: Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">About My Journey</h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the path I took to become a frontend developer and the mindset I bring to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-start">
          
          {/* Left Side -> Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">Timeline</h3>
            <div className="relative border-l-2 border-zinc-800 ml-3 md:ml-4">
              {timeline.map((step, idx) => (
                <div key={idx} className="mb-10 ml-8 relative group">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-zinc-950 rounded-full -left-13 shadow-md border border-zinc-800 text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/50 group-hover:text-blue-300 transition-all duration-300" style={{ left: '-3.25rem' }}>
                    {step.icon}
                  </span>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-950/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{step.title}</h4>
                      <span className="text-sm font-semibold text-blue-400/80 tracking-wider">
                        {step.year}
                      </span>
                    </div>
                    <p className="text-base font-light text-zinc-400 leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side -> Content Block */}
          <div className="space-y-8 sticky top-24">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">Philosophy</h3>
            <div className="bg-zinc-950/50 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-2xl border border-zinc-800">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-zinc-200">Learn. Build. Repeat.</h4>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light mb-6">
                I believe strong fundamentals and consistent effort are the key to becoming a great developer. I’m focused on learning by building and improving step by step.
              </p>
              
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-zinc-200">Growth Mindset</h4>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light mb-6">
                Starting from zero, I’m continuously learning frontend and full-stack development by working on real projects and improving my problem-solving skills.
              </p>
              
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-zinc-200">Attention to Detail</h4>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light mb-0">
                I focus on writing clean code, building smooth user experiences, and improving with every project I create.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom -> Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 backdrop-blur-md p-8 rounded-2xl text-center border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors duration-300"
            >
              <h4 className="text-4xl font-black text-white mb-2 tracking-tight">{stat.value}</h4>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
