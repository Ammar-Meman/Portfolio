import { motion } from 'framer-motion';

const timeline = [
  { year: "2021", title: "Started Coding", description: "Discovered the world of programming with Python and basics of Computer Science." },
  { year: "2022", title: "Web Development Basics", description: "Mastered HTML, CSS, and vanilla JavaScript. Built first static websites." },
  { year: "2023", title: "React Ecosystem", description: "Deep dived into React, Redux, and modern frontend tooling." },
  { year: "2024", title: "Full Stack MERN", description: "Built complex applications using Node.js, Express, and MongoDB." },
  { year: "Present", title: "Ready for Impact", description: "Polishing skills, learning Next.js, and looking for internship opportunities." },
];

export const LearningJourney = () => {
  return (
    <section className="py-20 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Learning <span className="text-gradient">Journey</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <div key={index} className={`relative flex items-start md:items-center gap-8 mb-12 md:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Timeline Dot */}
              <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-accent z-10 md:-translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.5)] border-4 border-black box-content" />

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}
              >
                <div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors group">
                  <span className="inline-block px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
