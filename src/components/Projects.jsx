import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';
import { GlowCard } from './ui/spotlight-card';

const projects = [
  {
    title: "Class-Pulse",
    description: "A comprehensive voting and polling system with distinct student and teacher functionalities, real-time analytics, and secure session management.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://classpulse-dev.netlify.app/",
    sourceLink: "https://github.com/Ammar-Meman/Class-Pulse",
    youtubeLink: "https://youtu.be/Sp486uYEC_k?si=AmzXTsExhkAVYpuw",
    category: "Full Stack",
    glowColor: "blue",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362360/portfolio/projects/mbumfzwu8cq1mtufs8l0.jpg",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366818/portfolio/future_use/ztnotrnnamufrh0bfoya.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366848/portfolio/future_use/eqlfgl8pmgqbewnuxjwx.png"
    ],
  },
  {
    title: "DevFinder",
    description: "GitHub User Finder application allowing users to search and view GitHub profiles and their metadata seamlessly.",
    tags: ["JavaScript", "GitHub API", "CSS"],
    liveLink: "https://devfinder-js.netlify.app/",
    category: "Frontend",
    glowColor: "purple",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362364/portfolio/projects/d5dtkrvakpkcycuvomzd.jpg",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366835/portfolio/future_use/aygph2dtm857bgziftml.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366841/portfolio/future_use/r1ioojd1txni9gwsqx28.png"
    ],
  },
  {
    title: "React Food Explorer",
    description: "Discover and explore delicious recipes from around the world using this intuitive recipe finder and explorer app.",
    tags: ["React", "Food API", "TailwindCSS"],
    liveLink: "https://react-food-explorer.netlify.app/",
    category: "Frontend",
    glowColor: "orange",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362367/portfolio/projects/kaxh36xi6l84okgagxiy.jpg",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366825/portfolio/future_use/qpvzsbdktx2ud0kdqkin.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366818/portfolio/future_use/ztnotrnnamufrh0bfoya.png"
    ],
  },
  {
    title: "Click Counter Game",
    description: "A fast-paced clicking game where players test their speed and accuracy to achieve the highest score.",
    tags: ["JavaScript", "HTML5", "CSS3", "Game"],
    liveLink: "https://ammar-click-counter.netlify.app",
    sourceLink: "https://github.com/Ammar-Meman/Game-Development/tree/main/Click%20Counter",
    category: "Games",
    glowColor: "green",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776447605/portfolio/games/click-counter.png"
    ],
  },
  {
    title: "Color Guessing Game",
    description: "An engaging RGB color guessing game that challenges players to match color codes with their visual representations.",
    tags: ["JavaScript", "HTML5", "CSS3", "Game"],
    liveLink: "https://ammar-color-guess.netlify.app",
    sourceLink: "https://github.com/Ammar-Meman/Game-Development/tree/main/Color%20Guessing",
    category: "Games",
    glowColor: "yellow",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776447609/portfolio/games/color-guess.png"
    ],
  },
  {
    title: "Memory Flip Card Game",
    description: "A classic memory matching game featuring smooth flip animations and a scoring system.",
    tags: ["JavaScript", "HTML5", "CSS3", "Game"],
    liveLink: "https://ammar-memory-flip.netlify.app",
    sourceLink: "https://github.com/Ammar-Meman/Game-Development/tree/main/Memory%20Flip%20Card%20Game",
    category: "Games",
    glowColor: "purple",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776447613/portfolio/games/memory-flip.png"
    ],
  },
  {
    title: "TimeCure",
    description: "Smart Appointment Scheduling System built during Craftathon '26 to optimize hospital waiting times.",
    tags: ["Hackathon", "Web Dev", "Healthcare"],
    liveLink: "https://cortex-crew-time-cure.vercel.app/",
    sourceLink: "https://github.com/Jivan-Patel/CortexCrew_TimeCure",
    category: "Hackathons",
    glowColor: "orange",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776447863/portfolio/hackathon/time-cure.png"
    ],
  },
  {
    title: "Mahindra Auto Website Clone",
    description: "A high-fidelity website clone of Mahindra Auto, focusing on modern UI/UX and responsive design.",
    tags: ["HTML", "CSS", "UI Clone"],
    liveLink: "https://mahindra-auto-clone.vercel.app",
    sourceLink: "https://github.com/Ammar-Meman/Website-Clone/tree/main/Mahindra-Auto-Clone",
    youtubeLink: "https://youtu.be/HQMDMmM7GMI?si=bUJ3bveAd7wcHyna",
    category: "Clones",
    glowColor: "red",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366841/portfolio/future_use/r1ioojd1txni9gwsqx28.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366848/portfolio/future_use/eqlfgl8pmgqbewnuxjwx.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366835/portfolio/future_use/aygph2dtm857bgziftml.png"
    ],
  },
  {
    title: "NZXT",
    description: "A pixel-perfect clone of the NZXT website, showcasing clean aesthetics and interactive elements.",
    tags: ["HTML", "CSS", "UI Clone"],
    liveLink: "https://nzxt-umber.vercel.app",
    sourceLink: "https://github.com/Ammar-Meman/Website-Clone/tree/main/NZXT",
    youtubeLink: "https://youtu.be/gY9xGCOLFCE?si=f_l3ecZ6L5EplGUz",
    category: "Clones",
    glowColor: "purple",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366848/portfolio/future_use/eqlfgl8pmgqbewnuxjwx.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366825/portfolio/future_use/qpvzsbdktx2ud0kdqkin.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366818/portfolio/future_use/ztnotrnnamufrh0bfoya.png"
    ],
  },
  {
    title: "Apex Fintech solution",
    description: "A comprehensive clone of the Apex Fintech Solution platform, featuring complex layouts and professional UI.",
    tags: ["HTML", "CSS", "UI Clone"],
    liveLink: "https://apexfintech-clone.vercel.app",
    sourceLink: "https://github.com/Ammar-Meman/Website-Clone/tree/main/APEX",
    youtubeLink: "https://youtu.be/AD6XjX8apso?si=oYZyFFyDaeZJ3G0D",
    category: "Clones",
    glowColor: "blue",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366818/portfolio/future_use/ztnotrnnamufrh0bfoya.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366835/portfolio/future_use/aygph2dtm857bgziftml.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366841/portfolio/future_use/r1ioojd1txni9gwsqx28.png"
    ],
  },
  {
    title: "Italic",
    description: "A sleek and minimal clone of the Italic lifestyle brand website, emphasizing typography and white space.",
    tags: ["HTML", "CSS", "UI Clone"],
    liveLink: "https://italic-bay.vercel.app",
    sourceLink: "https://github.com/Ammar-Meman/Website-Clone/tree/main/ITALIC",
    youtubeLink: "https://youtu.be/85FzF_GOnZQ?si=FkTF0PnspdwIPo-6",
    category: "Clones",
    glowColor: "zinc",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366835/portfolio/future_use/aygph2dtm857bgziftml.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366848/portfolio/future_use/eqlfgl8pmgqbewnuxjwx.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366825/portfolio/future_use/qpvzsbdktx2ud0kdqkin.png"
    ],
  },
  {
    title: "Icalm",
    description: "A peaceful and intuitive clone of the Icalm wellness platform, designed for a calming user experience.",
    tags: ["HTML", "CSS", "UI Clone"],
    liveLink: "https://icalm-pearl.vercel.app",
    sourceLink: "https://github.com/Ammar-Meman/Website-Clone/tree/main/icalm",
    category: "Clones",
    glowColor: "teal",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366825/portfolio/future_use/qpvzsbdktx2ud0kdqkin.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366818/portfolio/future_use/ztnotrnnamufrh0bfoya.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366835/portfolio/future_use/aygph2dtm857bgziftml.png"
    ],
  },
  {
    title: "Noom Website Clone",
    description: "A highly interactive clone of the Noom website with modern UI patterns and smooth animations.",
    tags: ["HTML", "CSS", "UI Clone"],
    liveLink: "https://github.com/Ammar-Meman/Website-Clone",
    sourceLink: "https://github.com/Ammar-Meman/Website-Clone",
    youtubeLink: "https://youtu.be/mJCJ4XfAyEg?si=xXAwhQ1aUFe8sKAZ",
    category: "Clones",
    glowColor: "green",
    images: [
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366841/portfolio/future_use/r1ioojd1txni9gwsqx28.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366848/portfolio/future_use/eqlfgl8pmgqbewnuxjwx.png",
      "https://res.cloudinary.com/dwusthzz5/image/upload/v1776366825/portfolio/future_use/qpvzsbdktx2ud0kdqkin.png"
    ],
  }
];

// Updated Component to handle scrubbing and sync with parent
const ProjectImageGallery = ({ images, title, currentIndex, onIndexChange }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const segmentWidth = width / images.length;
    const nextIndex = Math.floor(x / segmentWidth);
    
    if (nextIndex !== currentIndex && nextIndex >= 0 && nextIndex < images.length) {
      onIndexChange(nextIndex);
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-full h-36 sm:h-44 mb-5 overflow-hidden rounded-xl border border-zinc-800/50 relative group-hover:border-zinc-700/80 transition-colors bg-zinc-900 shrink-0 cursor-crosshair"
    >
      <img 
        src={images[0]} 
        alt={title} 
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Floating Cursor Preview Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const handleGlobalMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const categories = ["All", "Full Stack", "Frontend", "Games", "Hackathons", "Clones"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section 
      id="projects" 
      className="py-24 bg-transparent border-t border-zinc-800/50 relative overflow-hidden"
      onMouseMove={handleGlobalMouseMove}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        <div className="text-center md:text-left mb-16">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">03 / Work</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Featured Work</h2>
              <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed font-light">
                Slide horizontally across any card to cycle through project previews.
              </p>
            </div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 md:justify-end">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveFilter(cat); setShowAll(false); }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === cat ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => {
                  setActiveProject(project);
                  setActiveImageIndex(0);
                }}
                onMouseLeave={() => {
                  setActiveProject(null);
                }}
                className="h-full"
              >
                <GlowCard glowColor={project.glowColor} className="h-full">
                  <div className="relative z-10 flex flex-col h-full p-4 sm:p-6 group">
                    
                    {/* Interactive Image Gallery */}
                    <ProjectImageGallery 
                      images={project.images} 
                      title={project.title} 
                      currentIndex={activeProject?.title === project.title ? activeImageIndex : 0}
                      onIndexChange={setActiveImageIndex}
                    />

                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        {project.sourceLink && (
                          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                            <FiGithub size={20} />
                          </a>
                        )}
                        {project.youtubeLink && (
                          <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-500 transition-colors">
                            <FaYoutube size={22} />
                          </a>
                        )}
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                          <FiExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    <p className="text-zinc-400 flex-grow leading-relaxed font-light text-sm mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-zinc-950/50 border border-zinc-800 text-zinc-300 text-xs font-semibold rounded-full tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            {showAll ? 'View Less' : 'View All Projects'} 
            <motion.div animate={{ rotate: showAll ? 180 : 0 }}>
              <FiExternalLink size={18} />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Floating Interactive Hover Preview (Fixed: Added Image) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              position: 'fixed',
              left: smoothMouseX,
              top: smoothMouseY,
              x: '-50%', 
              y: '-130%', 
              pointerEvents: 'none',
              zIndex: 100,
            }}
            className="hidden lg:block w-64 h-40 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 backdrop-blur-md bg-zinc-900/50"
          >
            <div className="relative w-full h-full p-2">
               {/* Fixed: Added the Image Tag */}
               <img 
                 src={activeProject.images[activeImageIndex]} 
                 alt="Preview"
                 className="w-full h-full object-cover rounded-xl opacity-60"
               />
               <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />
               <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80 drop-shadow-md">
                   {activeProject.title}
                 </p>
                 <div className="flex gap-1">
                   {activeProject.images.map((_, i) => (
                     <div key={i} className={`w-1 h-1 rounded-full ${i === activeImageIndex ? 'bg-blue-400' : 'bg-white/20'}`} />
                   ))}
                 </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
