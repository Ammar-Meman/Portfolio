import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { GlowCard } from './ui/spotlight-card';
import { optimizeCloudinaryUrl } from './Projects';

const certifications = [
  {
    title: "AWS Solutions Architecture",
    issuer: "Forage",
    date: "2025",
    link: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362289/portfolio/certificates/psvbsw04db6ha8pggmqc.pdf",
    description: "Completed a job simulation involving cloud infrastructure design and architectural best practices.",
    glowColor: "orange",
    preview: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362292/portfolio/previews/iqb7c4rkadn0iy9uinok.png",
  },
  {
    title: "Walmart Advanced Software Engineering",
    issuer: "Walmart / Forage",
    date: "2025",
    link: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362295/portfolio/certificates/vhvsffq8ipsgwwsfxxhb.pdf",
    description: "Successfully completed advanced tasks in software engineering, focusing on scalable systems.",
    glowColor: "blue",
    preview: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362298/portfolio/previews/iov1mmxu3as4doyrsqs2.png",
  },
  {
    title: "ArtPark CodeForge (IISc)",
    issuer: "IISc Bangalore",
    date: "2025",
    link: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362301/portfolio/certificates/xtfcjoemlbsc8uwwqz7b.pdf",
    description: "Achieved recognition for technical excellence and innovation in the CodeForge hackathon.",
    glowColor: "red",
    preview: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362305/portfolio/previews/vvsj8rqpoxj71l6qwmbm.png",
  },
  {
    title: "Synaptix Frontier AI",
    issuer: "IIT Madras",
    date: "2025",
    link: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362308/portfolio/certificates/n8u6xywb3jelxzeuhsqe.pdf",
    description: "Explored cutting-edge AI technologies and implemented innovative solutions during the competition.",
    glowColor: "purple",
    preview: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362311/portfolio/previews/lxwnpx1xqem6g0yit1a4.png",
  },
  {
    title: "Singularity AI Hackathon",
    issuer: "IIT Dharwad",
    date: "2025",
    link: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362314/portfolio/certificates/kg3bwdn6plq9oi7x4owa.pdf",
    description: "Developed impactful AI-driven solutions in a high-pressure, competitive environment.",
    glowColor: "cyan",
    preview: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362317/portfolio/previews/os9fy3wdnxlcituixel3.png",
  },
  {
    title: "Dev Heat Hackathon",
    issuer: "IIIT Surat",
    date: "2025",
    link: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362320/portfolio/certificates/gugvfkj8kege1nbyvzko.pdf",
    description: "Recognized for creative problem-solving and rapid prototyping of software solutions.",
    glowColor: "green",
    preview: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362323/portfolio/previews/bmyat3axrg9e8whlh2go.png",
  },
  {
    title: "Elite Hack 1.0",
    issuer: "Hackathon Organizer",
    date: "2025",
    link: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362326/portfolio/certificates/junbcdusqwixxj1a5zdm.pdf",
    description: "Participated and showcased advanced development skills in a competitive hackathon setting.",
    glowColor: "yellow",
    preview: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362331/portfolio/previews/mcm0cl2yqnsrio5slois.png",
  },
  {
    title: "Bitathon",
    issuer: "GIM Goa",
    date: "2025",
    link: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362334/portfolio/certificates/fmvw9gwgamo5bilusvqz.pdf",
    description: "Competed in the Bitathon hackathon, developing creative solutions for real-world problems.",
    glowColor: "indigo",
    preview: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362337/portfolio/previews/hiwfvhibloja0kfngool.png",
  },
  {
    title: "Partnering with AI",
    issuer: "Forage",
    date: "2025",
    link: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362340/portfolio/certificates/pebsbud9nhepehvgte4z.pdf",
    description: "Mastered collaborative AI tools and workflows in a simulated professional environment.",
    glowColor: "teal",
    preview: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362343/portfolio/previews/svuql1kd813i6jh4bgu9.png",
  },
  {
    title: "HACKSAGON",
    issuer: "IEEE IIITM",
    date: "2025",
    link: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362347/portfolio/certificates/xt48hsaybcjbklcbypmr.pdf",
    description: "Successfully participated in the HACKSAGON hackathon at IIITM.",
    glowColor: "pink",
    preview: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362350/portfolio/previews/f0wwcmbnu1likspk91at.png",
  },
  {
    title: "Odoo x Adani Hackathon",
    issuer: "Odoo / Adani",
    date: "2025",
    link: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362353/portfolio/certificates/zxdyhuvlhcauzjyer0j8.pdf",
    description: "Engaged in enterprise-level problem solving at the Odoo x Adani Hackathon.",
    glowColor: "rose",
    preview: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776362356/portfolio/tkdcdvaqox4xhdkshcx2.png",
  }
];

export const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedCertifications = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className="py-24 bg-transparent border-t border-zinc-800/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        <div className="text-center md:text-left mb-16">
          <p className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">06 / Achieved</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence>
            {displayedCertifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <GlowCard glowColor={cert.glowColor} className="h-full">
                  <div className="relative z-10 flex flex-col h-full p-4 sm:p-6 group">
                    {/* Header row with Vague Preview */}
                    <div className="relative w-full h-36 sm:h-40 mb-5 rounded-xl overflow-hidden group/preview border border-zinc-800/50 bg-zinc-900">
                      <img 
                        src={optimizeCloudinaryUrl(cert.preview)} 
                        alt={cert.title} 
                        loading="lazy"
                        className="w-full h-full object-cover grayscale opacity-40 group-hover/preview:opacity-70 transition-all duration-500 group-hover/preview:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-500/20 group-hover/preview:scale-110 transition-transform">
                          <FaAward size={20} />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 text-[10px] font-bold text-zinc-500 uppercase tracking-wider bg-zinc-950/90 px-2 py-0.5 rounded-md border border-zinc-800 shadow-sm">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-white leading-tight group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-zinc-400 mb-6 leading-relaxed font-light text-sm flex-grow">
                      {cert.description}
                    </p>

                    <a
                      href={cert.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-blue-400 transition-colors mt-auto w-max border-b border-zinc-800 hover:border-blue-400 pb-1"
                    >
                      View Credential <FaExternalLinkAlt size={10} />
                    </a>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic View All Toggle Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-full font-semibold flex items-center gap-3 hover:bg-zinc-800 transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            {showAll ? 'Show Fewer Certificates' : 'View All Certificates'} 
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaExternalLinkAlt size={16} />
            </motion.div>
          </button>
        </div>

      </div>
    </section>
  );
};
