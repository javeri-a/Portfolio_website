


'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: 'Shop.co',
    description:
      'A modern e-commerce platform with a sleek design and smooth animations, built with Next.js and Tailwind CSS.',
    image: '/image1.png',
    tech: ['Next.js', 'TailwindCSS', 'TypeScript', 'Headless CMS'],
    github: 'https://github.com/javeri-a/shop.co-web.git',
    demo: 'https://marketplace-shopco.vercel.app/',
  },
  {
    title: 'Agentia World',
    description:
      'An interactive AI agent platform with a sleek, modern design and smooth animations.',
    image: '/agentia.png',
    tech: ['Framer Motion', 'Vercel', 'Tailwind'],
    demo: 'https://agentia-world-iqea.vercel.app/',
  },
  {
    title: 'Furniro - Furniture Store',
    description: 'A modern furniture store with a sleek design and smooth animations.',
    image: '/furniro.png',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/javeri-a/furniro-web.git',
    demo: 'https://furnitur-web.vercel.app/',
  },
];

export default function ProjectShowcase() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projectsec"
      className="relative py-32 px-4 sm:px-8 md:px-20 bg-[#0e0e0e] text-white overflow-hidden"
    >
      {/* Background Lights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 left-0 w-[30rem] h-[30rem] bg-fuchsia-600/30 rounded-full blur-[150px] opacity-40 animate-pulse" />
        <div className="absolute -bottom-20 right-0 w-[36rem] h-[36rem] bg-pink-600/30 rounded-full blur-[180px] opacity-30 animate-pulse" />
      </motion.div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center text-6xl font-extrabold text-white text-transparent bg-clip-text mb-16"
      >
        Recent <span className="text-fuchsia-500">Projects</span>
      </motion.h2>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="group bg-white/5 border border-fuchsia-700/20 rounded-2xl p-5 backdrop-blur-md shadow-xl hover:shadow-fuchsia-400/10 cursor-pointer relative overflow-hidden"
            onClick={() => setSelected(proj)}
          >
            <div className="relative h-48 w-full mb-4 rounded-xl overflow-hidden">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <h3 className="text-xl font-semibold text-fuchsia-400">{proj.title}</h3>
            <p className="text-sm text-gray-300 mt-2 line-clamp-3">{proj.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {proj.tech.map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="text-xs px-3 py-1 rounded-full border border-fuchsia-400 bg-fuchsia-900/20 text-fuchsia-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <Dialog open={true} onClose={() => setSelected(null)} className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
              <Dialog.Panel
                as={motion.div}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                // transition={{ duration: 0.3 }}
                className="bg-[#111]/90 backdrop-blur-xl rounded-2xl p-6 md:p-10 max-w-xl w-full text-white"
              >
                <Dialog.Title className="text-2xl font-bold text-fuchsia-400 mb-4">
                  {selected.title}
                </Dialog.Title>

                <Image
                  src={selected.image}
                  alt={selected.title}
                  width={800}
                  height={400}
                  className="rounded-xl object-cover mb-4"
                />
                <p className="text-gray-300 mb-4">{selected.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selected.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full border border-fuchsia-500/40 text-fuchsia-300 bg-fuchsia-900/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mb-4">
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-300 hover:bg-fuchsia-800/20 transition text-center"
                    >
                      GitHub
                    </a>
                  )}
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition text-center"
                  >
                    Live Demo
                  </a>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="w-full py-2 rounded-md bg-white/10 hover:bg-fuchsia-600 text-white transition"
                >
                  Close
                </button>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Matching Glow Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute -top-10 -left-10 w-72 h-72 bg-fuchsia-600 rounded-full blur-[120px] animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-[160px] animate-pulse"
      />
    </section>
  );
}
