import { motion } from 'framer-motion';

export const TechStack = () => {
  const learningTags = [
    "TypeScript",
    "Next.js",
    "GraphQL",
    "Docker"
  ];

  return (
    <section className="py-12 bg-transparent border-t border-zinc-800/50 overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-4xl text-center">

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 tracking-tight">
          Currently Learning
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {learningTags.map((tag, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 text-lg font-semibold rounded-full shadow-md hover:shadow-lg hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
            >
              {tag}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
