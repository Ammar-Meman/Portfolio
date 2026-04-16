import { motion } from 'framer-motion';

const experiences = [
  {
    title: "UI/UX Internship",
    company: "Gradscaler Technologies Private Limited",
    period: "09/2025 - 11/2025",
    description: [
      "Designed a responsive dashboard interface focused on usability and clarity for end users",
      "Created UI layouts for AWS-related pages aligned with client requirements",
      "Collaborated with developers to refine designs based on feedback and feasibility"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Korsaq (Freelance Project)",
    period: "02/2025 - Present",
    description: [
      "Developed a multiplayer web-based number guessing game named Numble",
      "Implemented real-time gameplay logic and user interactions",
      "Built and integrated both frontend and backend components for seamless gameplay"
    ]
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-light-bg">
      <div className="container mx-auto px-6 max-w-6xl">

        <h2 className="text-[4rem] md:text-[5rem] font-medium leading-none mb-24 tracking-tight">
          Experience
        </h2>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 border-b border-gray-100 pb-12 last:border-0"
            >
              {/* Left: Role Info */}
              <div className="md:col-span-5">
                <h3 className="text-3xl font-medium mb-2">{exp.title}</h3>
                <p className="text-xl text-gray-500 mb-8 md:mb-0">{exp.company}</p>
              </div>

              {/* Middle: Dot Divider (Visual Match) */}
              <div className="hidden md:flex md:col-span-1 justify-center pt-2">
                <div className="w-3 h-3 bg-black rounded-full" />
              </div>

              {/* Right: Description & Date */}
              <div className="md:col-span-6">
                <p className="text-gray-400 font-medium mb-6 uppercase tracking-wide text-sm">{exp.period}</p>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-lg leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
