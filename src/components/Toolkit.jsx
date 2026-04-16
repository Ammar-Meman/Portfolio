import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiGit, SiFigma, SiPostman } from 'react-icons/si';

const toolkit = [
  {
    title: "FRONTEND", icons: [
      { Icon: FaHtml5, name: "HTML5" },
      { Icon: FaCss3Alt, name: "CSS3" },
      { Icon: SiJavascript, name: "JavaScript" },
      { Icon: FaReact, name: "React" },
      { Icon: SiFigma, name: "Figma" }
    ]
  },
  {
    title: "BACKEND", icons: [
      { Icon: SiMongodb, name: "MongoDB" }
    ]
  },
  {
    title: "TOOLS", icons: [
      { Icon: SiPostman, name: "Postman" },
      { Icon: SiGit, name: "Git" },
      { Icon: FaGithub, name: "GitHub" }
    ]
  }
];

const ToolItem = ({ Icon, name }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="w-20 h-20 md:w-24 md:h-24 bg-white border border-gray-100 rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-sm hover:shadow-lg transition-all text-gray-700"
    title={name}
  >
    <Icon size={28} />
    <span className="text-[10px] md:text-xs font-semibold tracking-wide text-gray-600 text-center uppercase">{name}</span>
  </motion.div>
);

export const Toolkit = () => {
  return (
    <section className="py-24 bg-light-bg relative">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left Header */}
        <div className="flex flex-col justify-center">
          <h2 className="text-[4rem] md:text-[5rem] font-medium leading-none tracking-tight text-light-text mb-4">
            Engineering <br /> <span className="text-gray-400 font-normal">Toolkit</span>
          </h2>
        </div>

        {/* Right Grid */}
        <div className="space-y-12">
          {toolkit.map((category, index) => (
            <div key={index}>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.icons.map((tool, i) => (
                  <ToolItem key={i} Icon={tool.Icon} name={tool.name} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
