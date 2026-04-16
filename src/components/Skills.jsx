import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowCard } from './ui/spotlight-card';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, 
  SiNodedotjs, SiMongodb, SiExpress, SiGit, SiGithub, 
  SiFigma, SiPostman, SiVercel, SiNetlify 
} from 'react-icons/si';

const categoriesData = {
  "Frontend": [
    { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> }
  ],
  "Backend": [
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Express", icon: <SiExpress className="text-white" /> }
  ],
  "Tools": [
    { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> }
  ],
  "Deployment": [
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> }
  ]
};

const glowColors = ["blue", "purple", "orange", "green", "red", "cyan", "indigo", "rose"];

export const Skills = () => {
  // Combine all skills for the "All" category
  const allSkills = useMemo(() => {
    return Object.values(categoriesData).flat();
  }, []);

  const skillData = {
    "All": allSkills,
    ...categoriesData
  };

  const categories = Object.keys(skillData);
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section id="skills" className="py-24 bg-transparent border-t border-zinc-800/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center lg:text-left tracking-tight">
          Skills &amp; Proficiency
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left Sidebar — Category tabs */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-none text-left px-6 py-4 rounded-xl text-lg font-bold transition-all whitespace-nowrap lg:whitespace-normal border cursor-pointer
                  ${
                    activeCategory === category
                      ? "bg-zinc-800 border-zinc-700 text-white shadow-lg"
                      : "bg-transparent border-transparent text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-300"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Content Panel — Skill cards with GlowCard */}
          <div className="lg:w-2/3 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              >
                {skillData[activeCategory].map((skill, index) => (
                  <motion.div
                    key={`${activeCategory}-${skill.name}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03, duration: 0.2 }}
                    className="h-full"
                  >
                    <GlowCard glowColor={glowColors[index % glowColors.length]} className="h-full">
                      <div className="flex flex-col justify-center items-center p-4 sm:p-5 z-10 relative gap-2.5 group">
                        <motion.div 
                          className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="text-[10px] sm:text-xs font-bold text-zinc-400 text-center tracking-widest uppercase group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </GlowCard>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
