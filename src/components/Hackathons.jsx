import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { GlowCard } from './ui/spotlight-card';

const hackathons = [
  {
    name: "CRAFTATHON '26",
    badge: "First Offline Hackathon",
    duration: "36 Hours",
    organizer: "IEEE Computer Society — Gujarat Chapter",
    project: "Smart Appointment Scheduling System",
    description:
      "My first real offline hackathon — 36 hours of building under pressure with almost no sleep. We tackled a real-world problem: making hospital waiting times predictable instead of frustrating. Built a full system with patient booking, doctor dashboards, smart time-slot estimation, and SMS reminders for likely no-shows. Beyond the features, this taught me the value of clear thinking, focused teamwork, and staying composed when things don't go as planned.",
    tags: ["Healthcare", "Web Dev", "Teamwork", "36 hrs"],
    team: "CortexCrew",
    teamMembers: ["Prathvik Mehra", "Parv Suhagiya", "Patel Jivan"],
    photos: [
      { src: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776445204/portfolio/hackathon/ek6g9kdy5dnaschbyjhq.jpg", alt: "Team coding session at Craftathon '26", pos: "center" },
      { src: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776445207/portfolio/hackathon/nv0okrzdptl7knkuhwal.jpg", alt: "CortexCrew team photo at Craftathon '26", pos: "top" },
      { src: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776445206/portfolio/hackathon/b9sngdxpo79g6lcruwsz.jpg", alt: "Solo photo at Craftathon '26 — Gandhinagar University", pos: "top" },
      { src: "https://res.cloudinary.com/dwusthzz5/image/upload/v1776445205/portfolio/hackathon/xd9x3cb82a3dp1vp1ukq.jpg", alt: "Craftathon '26 participant ID cards", pos: "center" },
    ],
    accentColor: "#f97316",
    year: "2026",
    repo: "https://github.com/Jivan-Patel/CortexCrew_TimeCure",
    demo: "https://cortex-crew-time-cure.vercel.app/",
  },
];

const PhotoCarousel = ({ photos, accentColor }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative w-full h-64 sm:h-72 md:h-[24rem] rounded-2xl overflow-hidden border border-zinc-800/60 group">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={photos[current].src}
          alt={photos[current].alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: photos[current].pos }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>

      {/* Gradient overlay — bottom fade only */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? '22px' : '6px',
              height: '6px',
              background: i === current ? accentColor : 'rgba(255,255,255,0.3)',
            }}
            aria-label={`Photo ${i + 1}`}
          />
        ))}
      </div>

      {/* Photo counter */}
      <span
        className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border z-10"
        style={{
          color: accentColor,
          background: 'rgba(9,9,11,0.75)',
          borderColor: `${accentColor}33`,
        }}
      >
        {current + 1} / {photos.length}
      </span>
    </div>
  );
};

export const Hackathons = () => {
  return (
    <section id="hackathons" className="py-14 bg-transparent border-t border-zinc-800/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Section heading */}
        <div className="text-center md:text-left mb-8">
          <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">
            04 / Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Hackathons
          </h2>
        </div>

        {/* Hackathon cards */}
        <div className="flex flex-col gap-12">
          {hackathons.map((hack, index) => (
            <motion.div
              key={hack.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <GlowCard glowColor="orange" className="w-full">
                <div className="relative z-10 p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

                  {/* LEFT — Photo carousel */}
                  <PhotoCarousel
                    photos={hack.photos}
                    accentColor={hack.accentColor}
                  />

                  {/* RIGHT — Details */}
                  <div className="flex flex-col justify-between gap-3 h-full">

                    {/* Top badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                        style={{
                          color: hack.accentColor,
                          background: `${hack.accentColor}15`,
                          borderColor: `${hack.accentColor}40`,
                        }}
                      >
                        {hack.badge}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-800/70 border border-zinc-700/60 text-zinc-400">
                        ⏱ {hack.duration}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-800/70 border border-zinc-700/60 text-zinc-400">
                        {hack.year}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-1">
                        {hack.name}
                      </h3>
                      <p className="text-xs text-zinc-500 font-medium tracking-wide">
                        {hack.organizer}
                      </p>
                    </div>

                    {/* Project built */}
                    <div
                      className="flex items-start gap-3 p-4 rounded-xl border"
                      style={{
                        background: `${hack.accentColor}08`,
                        borderColor: `${hack.accentColor}25`,
                      }}
                    >
                      <span className="text-lg mt-0.5">🏗️</span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-1">
                          Project Built
                        </p>
                        <p className="text-sm font-semibold text-white">
                          {hack.project}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">
                      {hack.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {hack.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-zinc-800/60" />

                    {/* Links + Team */}
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={hack.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all"
                          style={{ color: hack.accentColor, borderColor: `${hack.accentColor}40`, background: `${hack.accentColor}10` }}
                        >
                          <FaExternalLinkAlt size={10} /> Live Demo
                        </a>
                        <a
                          href={hack.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border border-zinc-700/50 bg-zinc-800/60 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all"
                        >
                          <FaGithub size={11} /> GitHub Repo
                        </a>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">
                          Team — {hack.team}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {hack.teamMembers.map((member) => (
                            <span
                              key={member}
                              className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 bg-zinc-800/60 px-3 py-1.5 rounded-lg border border-zinc-700/40"
                            >
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: hack.accentColor }} />
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
