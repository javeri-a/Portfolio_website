
'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPython,
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 'Expert', color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 'Expert', color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, level: 'Expert', color: 'text-yellow-400' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 'Advanced', color: 'text-blue-400' },
  { name: 'React.js', icon: <FaReact />, level: 'Advanced', color: 'text-cyan-400' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 'Advanced', color: 'text-white' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Expert', color: 'text-teal-300' },
  { name: 'GitHub', icon: <FaGithub />, level: 'Advanced', color: 'text-gray-300' },
  { name: 'Python', icon: <SiPython />, level: 'Intermediate', color: 'text-yellow-300' },
];

export default function SkillsSection() {
  return (
    <section className="relative z-10 w-full px-6 md:px-24 py-28 bg-[#0c0c0c] text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center space-y-14"
      >
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Tech <span className="text-fuchsia-500">Stack</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Each tool below represents a core part of how I build interactive, AI-infused, future-ready web experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-xl backdrop-blur-md group hover:border-fuchsia-500 hover:shadow-fuchsia-600/20 transition-all"
            >
              <div className={`text-3xl ${skill.color}`}>{skill.icon}</div>
              <p className="text-md font-semibold tracking-wide">{skill.name}</p>
              <span className="text-xs text-gray-400 group-hover:text-fuchsia-400 transition">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Glowing effect */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-fuchsia-600 rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
    </section>
  );
}
