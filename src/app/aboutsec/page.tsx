

'use client';

import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaBrain } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id ="aboutsec" className="relative z-10 w-full px-6 md:px-24 py-24 bg-[#0e0e0e] text-gray-300 overflow-hidden">
      {/* Animated glowing background */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-600 rounded-full blur-[120px] opacity-20 z-0"
      />
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[160px] opacity-20 z-0"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center space-y-14 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Who I Am
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto">
          I'm <span className="text-white font-semibold">Javeria</span>, a dedicated Front-End Developer with <span className="text-fuchsia-400 font-semibold">1.5+ years of hands-on experience</span> in building responsive and high-performance user interfaces. I specialize in technologies like <span className="text-fuchsia-400">HTML</span>, <span className="text-pink-400">CSS</span>, <span className="text-purple-400">TypeScript</span>, <span className="text-fuchsia-400">React</span>, <span className="text-pink-400">Next.js</span>, and <span className="text-purple-400">Tailwind CSS</span>, striving to bring clarity, structure, and elegance to every digital experience I build.  
          Currently, I’m expanding into <span className="text-pink-400 font-semibold">Python</span> and actively learning <span className="text-fuchsia-400 font-semibold">OpenAI’s Agentic SDK</span> — diving deep into intelligent automation, autonomous workflows, and the next wave of AI-integrated frontends.
        </p>

        {/* Feature Cards with Icons */}
        <div className="grid md:grid-cols-3 gap-8 pt-14">
          {[
            {
              title: 'Modern Front-End',
              icon: <FaCode size={24} className="text-fuchsia-400" />,
              description:
                'Clean, responsive interfaces built with React, Next.js, TypeScript, and Tailwind CSS for optimal UX.',
            },
            {
              title: 'Backed by Logic',
              icon: <FaBrain size={24} className="text-pink-400" />,
              description:
                'Strengthening my development journey with Python — blending front-end beauty with real-world logic.',
            },
            {
              title: 'AI-Driven Future',
              icon: <FaRobot size={24} className="text-purple-400" />,
              description:
                'Exploring OpenAI Agentic SDK to build autonomous agents and intelligent workflows.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md text-left space-y-4"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
