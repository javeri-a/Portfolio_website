



'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from 'react-icons/fa';
import { PiOpenAiLogo } from 'react-icons/pi';
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPython,
} from 'react-icons/si';
import { ReactNode } from 'react';

// ✅ Define a proper Skill type
type Skill = {
  name: string;
  icon: ReactNode;
  color: string;
  note: string;
};

const skills: Skill[] = [
  {
    name: 'HTML5',
    icon: <FaHtml5 />,
    color: 'text-orange-500',
    note: 'The foundation of every clean UI.',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />,
    color: 'text-blue-500',
    note: 'Design precision meets responsiveness.',
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
    color: 'text-yellow-400',
    note: 'The heartbeat of interactive logic.',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'text-blue-400',
    note: 'Strict typing for safer, scalable code.',
  },
  {
    name: 'React.js',
    icon: <FaReact />,
    color: 'text-cyan-400',
    note: 'Component-driven frontend at its best.',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    color: 'text-white',
    note: 'Optimized, SEO-first React framework.',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    color: 'text-teal-300',
    note: 'Utility-first styling with elegance.',
  },
  {
    name: 'OpenAI',
    icon: <PiOpenAiLogo />,
    color: 'text-gray-300',
    note: 'Versioning meets collaboration.',
  },
  {
    name: 'Python',
    icon: <SiPython />,
    color: 'text-yellow-300',
    note: 'Clean, AI-focused scripting powerhouse.',
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skillsec"
      className="relative py-28 px-6 md:px-20 bg-[#0b0b0c] text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-16"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Tech <span className="text-fuchsia-500">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each technology here is chosen with purpose — a blend of performance, elegance, and future-proof thinking.
          </p>
        </div>

        {/* Structured Rows */}
        <div className="space-y-12">
          {skills
            .reduce((rows: Skill[][], skill, index) => {
              const row = Math.floor(index / 3);
              if (!rows[row]) rows[row] = [];
              rows[row].push(skill);
              return rows;
            }, [])
            .map((rowSkills, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center"
              >
                {rowSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className={`text-5xl ${skill.color}`}>{skill.icon}</div>
                    <div>
                      <p className="text-base font-semibold">{skill.name}</p>
                      <p className="text-sm text-gray-400 mt-1 max-w-xs">{skill.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
        </div>
      </motion.div>

      {/* Background glow */}
      <div className="absolute -top-20 -left-28 w-96 h-96 bg-fuchsia-600 opacity-20 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute -bottom-20 right-0 w-[26rem] h-[26rem] bg-fuchsia-900 opacity-20 blur-[160px] rounded-full animate-pulse" />
    </section>
  );
}
