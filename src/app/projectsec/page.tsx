

// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Dialog } from '@headlessui/react';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// const projects = [
//   {
//     title: 'AI Portfolio Builder',
//     description: 'Auto-generate dev portfolios with AI + modular logic.',
//     image: '/agent.PNG',
//     tech: ['Next.js', 'TailwindCSS', 'OpenAI'],
//     github: 'https://github.com/yourusername/ai-portfolio',
//     live: 'https://aiportfolio.dev'
//   },
//   {
//     title: 'Creative Landing Page',
//     description: 'Scroll-driven creative experience for SaaS branding.',
//     image: '/projects/landing-page.png',
//     tech: ['Framer Motion', 'Vercel', 'Tailwind'],
//     github: 'https://github.com/yourusername/creative-landing',
//     live: 'https://creative-landing.dev'
//   },
//   {
//     title: 'Realtime Chat App',
//     description: 'A futuristic messaging interface with node & socket.',
//     image: '/projects/chat-app.png',
//     tech: ['React', 'Socket.io', 'Node.js'],
//     github: 'https://github.com/yourusername/chat-app',
//     live: 'https://chatapp.live'
//   },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, delay: i * 0.2 },
//   }),
// };

// export default function ProjectShowcase() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

//   const openModal = (project: typeof projects[0]) => {
//     setSelectedProject(project);
//     setIsOpen(true);
//   };

//   return (
//     <section
//       id="projects"
//       className="relative bg-gradient-to-br from-[#0f0f0f] to-black py-32 px-6 md:px-20 text-white overflow-hidden"
//     >
//       <div className="absolute inset-0 pointer-events-none z-0">
//         <div className="w-full h-full bg-[radial-gradient(#7e22ce_1px,transparent_1px)] bg-[length:40px_40px] opacity-5" />
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-fuchsia-900/10 to-transparent animate-pulse opacity-30" />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto space-y-28">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-center text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-pink-500 text-transparent bg-clip-text"
//         >
//           Crafted with Passion
//         </motion.h2>

//         {projects.map((proj, idx) => (
//           <motion.div
//             key={idx}
//             custom={idx}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className={`relative group flex flex-col md:flex-row items-center gap-12 ${
//               idx % 2 === 1 ? 'md:flex-row-reverse' : ''
//             }`}
//           >
//             <div
//               onClick={() => openModal(proj)}
//               className="relative w-full md:w-1/2 h-72 overflow-hidden rounded-3xl shadow-xl border border-fuchsia-700/30 group-hover:shadow-fuchsia-500/20 transition duration-500 cursor-pointer"
//             >
//               <Image
//                 src={proj.image}
//                 alt={proj.title}
//                 fill
//                 className="object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110 group-hover:blur-[1px]"
//               />
//               <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-fuchsia-700/10 to-pink-500/10 opacity-20 pointer-events-none" />
//             </div>

//             <div className="w-full md:w-1/2 space-y-4">
//               <h3 className="text-3xl font-bold text-fuchsia-400">{proj.title}</h3>
//               <p className="text-gray-300">{proj.description}</p>
//               <div className="flex flex-wrap gap-2 pt-2">
//                 {proj.tech.map((tech, i) => (
//                   <motion.span
//                     key={i}
//                     whileHover={{ scale: 1.05 }}
//                     className="px-4 py-1 text-sm rounded-full border border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-900/10"
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </div>
//               <div className="flex gap-4 pt-4">
//                 <a
//                   href={proj.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-4 py-2 bg-fuchsia-700 hover:bg-fuchsia-600 text-white rounded-md text-sm"
//                 >
//                   <FaGithub /> GitHub
//                 </a>
//                 <a
//                   href={proj.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-md text-sm"
//                 >
//                   <FaExternalLinkAlt /> Live
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
//         <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-center justify-center p-4">
//           <Dialog.Panel className="bg-[#111] max-w-2xl w-full rounded-xl shadow-2xl p-6 md:p-10 space-y-6 text-white">
//             <Dialog.Title className="text-3xl font-bold text-fuchsia-400">
//               {selectedProject?.title}
//             </Dialog.Title>

//             {selectedProject?.image && (
//               <Image
//                 src={selectedProject.image}
//                 alt={selectedProject.title}
//                 width={800}
//                 height={400}
//                 className="rounded-xl object-cover w-full"
//               />
//             )}

//             <p className="text-gray-300">{selectedProject?.description}</p>
//             <div className="flex flex-wrap gap-2 pt-2">
//               {selectedProject?.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="px-4 py-1 text-sm rounded-full border border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-900/10"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <div className="text-right">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="mt-6 inline-block px-5 py-2 rounded-md bg-fuchsia-700 hover:bg-fuchsia-600 transition text-white"
//               >
//                 Close
//               </button>
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </section>
//   );
// }



// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useState } from 'react';
// import { Dialog } from '@headlessui/react';

// const projects = [
//   {
//     title: 'AI Portfolio Builder',
//     description: 'Auto-generate dev portfolios with AI + modular logic.',
//     image: '/image1.png',
//     tech: ['Next.js', 'TailwindCSS', 'OpenAI'],
//     github: '#',
//     demo: 'https://marketplace-shopco.vercel.app/',
//   },
//   {
//     title: 'Creative Landing Page',
//     description: 'Scroll-driven creative experience for SaaS branding.',
//     image: '/agent.PNG',
//     tech: ['Framer Motion', 'Vercel', 'Tailwind'],
//     github: '#',
//     demo: 'https://agentia-world-iqea.vercel.app/',
//   },
//   {
//     title: 'Realtime Chat App',
//     description: 'A futuristic messaging interface with node & socket.',
//     image: '/furniro.png',
//     tech: ['React', 'Socket.io', 'Node.js'],
//     github: '#',
//     demo: 'https://furnitur-web.vercel.app/',
//   },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, delay: i * 0.2 },
//   }),
// };

// export default function ProjectShowcase() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   function openModal(project: any) {
//     setSelectedProject(project);
//     setIsOpen(true);
//   }

//   return (
//     <section
//       id="projects"
//       className="relative bg-gradient-to-br from-[#0f0f0f] to-black py-32 px-6 md:px-20 text-white overflow-hidden"
//     >
//       {/* Background Animation */}
//       <div className="absolute inset-0 -z-10">
//         <div className="animate-pulse-slow absolute top-1/4 left-10 w-96 h-96 bg-fuchsia-700 opacity-10 rounded-full blur-3xl" />
//         <div className="animate-pulse-slow absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-10 rounded-full blur-2xl" />
//         <div className="w-full h-full bg-[radial-gradient(#7e22ce_1px,transparent_1px)] bg-[length:40px_40px] opacity-5" />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto space-y-28">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-center text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-pink-500 text-transparent bg-clip-text"
//         >
//           Crafted with Passion
//         </motion.h2>

//         {projects.map((proj, idx) => (
//           <motion.div
//             key={idx}
//             custom={idx}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className={`relative group flex flex-col md:flex-row items-center gap-12 ${
//               idx % 2 === 1 ? 'md:flex-row-reverse' : ''
//             }`}
//           >
//             <div
//               className="relative w-full md:w-1/2 h-72 overflow-hidden rounded-3xl shadow-xl border border-fuchsia-700/30 group-hover:shadow-fuchsia-500/20 transition duration-500 cursor-pointer"
//               onClick={() => openModal(proj)}
//             >
//               <Image
//                 src={proj.image}
//                 alt={proj.title}
//                 fill
//                 className="object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110 group-hover:blur-[1px]"
//               />
//               <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-fuchsia-700/10 to-pink-500/10 opacity-20 pointer-events-none" />
//             </div>

//             <div className="w-full md:w-1/2 space-y-4">
//               <h3 className="text-3xl font-bold text-fuchsia-400 tracking-tight">{proj.title}</h3>
//               <p className="text-gray-300 leading-relaxed">{proj.description}</p>
//               <div className="flex flex-wrap gap-2 pt-2">
//                 {proj.tech.map((tech, i) => (
//                   <motion.span
//                     key={i}
//                     whileHover={{ scale: 1.05 }}
//                     className="px-4 py-1 text-sm rounded-full border border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-900/10"
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </div>

//               <div className="pt-4 flex gap-4">
//                 <a
//                   href={proj.github}
//                   target="_blank"
//                   className="px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-800/20 transition"
//                 >
//                   GitHub
//                 </a>
//                 <a
//                   href={proj.demo}
//                   target="_blank"
//                   className="px-4 py-2 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition"
//                 >
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
//         <div className="flex items-center justify-center min-h-screen px-4">
//           <Dialog.Overlay className="fixed inset-0 bg-black/80" />
//           <div className="relative z-10 bg-[#111] p-6 md:p-10 rounded-2xl shadow-2xl max-w-2xl w-full text-white space-y-4">
//             <Dialog.Title className="text-3xl font-bold text-fuchsia-400">
//               {selectedProject?.title}
//             </Dialog.Title>
//             <Image
//               src={selectedProject?.image || ''}
//               alt={selectedProject?.title || ''}
//               width={800}
//               height={400}
//               className="rounded-xl object-cover"
//             />
//             <p className="text-gray-300">{selectedProject?.description}</p>
//             <div className="flex flex-wrap gap-2 pt-2">
//               {selectedProject?.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="px-4 py-1 text-sm rounded-full border border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-900/10"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <div className="flex gap-4 pt-4">
//               <a
//                 href={selectedProject?.github}
//                 target="_blank"
//                 className="px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-800/20 transition"
//               >
//                 GitHub
//               </a>
//               <a
//                 href={selectedProject?.demo}
//                 target="_blank"
//                 className="px-4 py-2 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition"
//               >
//                 Live Demo
//               </a>
//             </div>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="mt-6 px-4 py-2 rounded-md bg-fuchsia-700 hover:bg-fuchsia-600 text-white"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </Dialog>
//     </section>
//   );
// }

// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { useState } from 'react';
// import { Dialog } from '@headlessui/react';

// type Project = {
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
//   github: string;
//   demo: string;
// };

// const projects: Project[] = [
//   {
//     title: 'AI Portfolio Builder',
//     description: 'Auto-generate dev portfolios with AI + modular logic.',
//     image: '/image1.png',
//     tech: ['Next.js', 'TailwindCSS', 'OpenAI'],
//     github: '#',
//     demo: 'https://marketplace-shopco.vercel.app/',
//   },
//   {
//     title: 'Creative Landing Page',
//     description: 'Scroll-driven creative experience for SaaS branding.',
//     image: '/agent.PNG',
//     tech: ['Framer Motion', 'Vercel', 'Tailwind'],
//     github: '#',
//     demo: 'https://agentia-world-iqea.vercel.app/',
//   },
//   {
//     title: 'Realtime Chat App',
//     description: 'A futuristic messaging interface with node & socket.',
//     image: '/furniro.png',
//     tech: ['React', 'Socket.io', 'Node.js'],
//     github: '#',
//     demo: 'https://furnitur-web.vercel.app/',
//   },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 60 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay: i * 0.2 },
//   }),
// };

// export default function ProjectShowcase() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   const openModal = (project: Project) => {
//     setSelectedProject(project);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setTimeout(() => setSelectedProject(null), 300);
//   };

//   return (
//     <section
//       id="projects"
//       className="relative bg-[#0f0f0f] py-32 px-6 md:px-20 text-white overflow-hidden"
//     >
//       {/* Background Animation & Glow */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 -z-10 overflow-hidden"
//       >
//         {/* Floating Glow Orbs */}
//         <motion.div
//           animate={{ y: [0, -30, 0] }}
//           transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
//           className="absolute -top-40 -left-10 w-[30rem] h-[30rem] bg-fuchsia-500/30 rounded-full blur-[160px] opacity-30"
//         />
//         <motion.div
//           animate={{ x: [0, 40, 0] }}
//           transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
//           className="absolute -bottom-20 -right-20 w-[36rem] h-[36rem] bg-pink-600/30 rounded-full blur-[180px] opacity-30"
//         />
//         {/* Radial Grid Background */}
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7e22ce0a] via-[#7e22ce05] to-transparent bg-[length:30px_30px] opacity-10" />
//       </motion.div>

//       <div className="relative z-10 max-w-6xl mx-auto space-y-28">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-center text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-pink-500 text-transparent bg-clip-text"
//         >
//           Crafted with Passion
//         </motion.h2>

//         {projects.map((proj, idx) => (
//           <motion.div
//             key={idx}
//             custom={idx}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className={`relative group flex flex-col md:flex-row items-center gap-12 ${
//               idx % 2 === 1 ? 'md:flex-row-reverse' : ''
//             }`}
//           >
//             <div
//               className="relative w-full md:w-1/2 h-72 overflow-hidden rounded-3xl shadow-xl border border-fuchsia-700/30 cursor-pointer group-hover:shadow-fuchsia-500/20 transition duration-500 hover:scale-[1.02]"
//               onClick={() => openModal(proj)}
//             >
//               <Image
//                 src={proj.image}
//                 alt={proj.title}
//                 fill
//                 className="object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105 group-hover:blur-[1px]"
//               />
//               <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-fuchsia-700/10 to-pink-500/10 opacity-20 pointer-events-none" />
//             </div>

//             <div className="w-full md:w-1/2 space-y-4">
//               <h3 className="text-3xl font-bold text-fuchsia-400 tracking-tight">{proj.title}</h3>
//               <p className="text-gray-300 leading-relaxed">{proj.description}</p>
//               <div className="flex flex-wrap gap-2 pt-2">
//                 {proj.tech.map((tech, i) => (
//                   <motion.span
//                     key={i}
//                     whileHover={{ scale: 1.05 }}
//                     className="px-4 py-1 text-sm rounded-full border border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-900/10"
//                   >
//                     {tech}
//                   </motion.span>
//                 ))}
//               </div>

//               <div className="pt-4 flex gap-4">
//                 <a
//                   href={proj.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-800/20 transition"
//                 >
//                   GitHub
//                 </a>
//                 <a
//                   href={proj.demo}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition"
//                 >
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal Dialog */}
//       <AnimatePresence>
//         {isOpen && selectedProject && (
//           <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-50">
//             <motion.div
//               className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="relative backdrop-blur-md bg-[#111]/80 p-6 md:p-10 rounded-2xl shadow-2xl max-w-2xl w-full text-white space-y-4"
//               >
//                 <Dialog.Title className="text-3xl font-bold text-fuchsia-400">
//                   {selectedProject.title}
//                 </Dialog.Title>
//                 <Image
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   width={800}
//                   height={400}
//                   className="rounded-xl object-cover"
//                 />
//                 <p className="text-gray-300">{selectedProject.description}</p>
//                 <div className="flex flex-wrap gap-2 pt-2">
//                   {selectedProject.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-4 py-1 text-sm rounded-full border border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-900/10"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4 pt-4">
//                   <a
//                     href={selectedProject.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-800/20 transition"
//                   >
//                     GitHub
//                   </a>
//                   <a
//                     href={selectedProject.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition"
//                   >
//                     Live Demo
//                   </a>
//                 </div>
//                 <button
//                   onClick={closeModal}
//                   className="mt-6 px-4 py-2 rounded-md bg-fuchsia-700 hover:bg-fuchsia-600 text-white"
//                 >
//                   Close
//                 </button>
//               </motion.div>
//             </motion.div>
//           </Dialog>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }



// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { Dialog } from '@headlessui/react';
// import { motion, AnimatePresence } from 'framer-motion';

// type Project = {
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
//   github: string;
//   demo: string;
// };

// const projects: Project[] = [
//   {
//     title: 'AI Portfolio Builder',
//     description: 'Auto-generate developer portfolios using AI-driven modular logic.',
//     image: '/image1.png',
//     tech: ['Next.js', 'TailwindCSS', 'OpenAI'],
//     github: '#',
//     demo: 'https://marketplace-shopco.vercel.app/',
//   },
//   {
//     title: 'Creative Landing Page',
//     description: 'Scroll-based interactive branding experience for SaaS.',
//     image: '/agent.PNG',
//     tech: ['Framer Motion', 'Vercel', 'Tailwind'],
//     github: '#',
//     demo: 'https://agentia-world-iqea.vercel.app/',
//   },
//   {
//     title: 'Realtime Chat App',
//     description: 'Sleek messaging UI using Node and Socket.io.',
//     image: '/furniro.png',
//     tech: ['React', 'Socket.io', 'Node.js'],
//     github: '#',
//     demo: 'https://furnitur-web.vercel.app/',
//   },
// ];

// export default function ProjectShowcase() {
//   const [selected, setSelected] = useState<Project | null>(null);

//   return (
//     <section className="relative py-32 px-6 md:px-20 bg-[#0e0e0e] text-white">
//       {/* Background Orbs */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="absolute inset-0 -z-10"
//       >
//         <div className="absolute -top-40 left-0 w-[30rem] h-[30rem] bg-fuchsia-600/30 rounded-full blur-[150px] opacity-40 animate-pulse" />
//         <div className="absolute -bottom-20 right-0 w-[36rem] h-[36rem] bg-pink-600/30 rounded-full blur-[180px] opacity-30 animate-pulse" />
//       </motion.div>

//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//         className="text-center text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-pink-500 text-transparent bg-clip-text mb-16"
//       >
//         Featured Projects
//       </motion.h2>

//       {/* Projects Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projects.map((proj, idx) => (
//           <motion.div
//             key={idx}
//             whileHover={{ scale: 1.03 }}
//             transition={{ type: 'spring', stiffness: 120 }}
//             className="bg-[#1a1a1a] border border-fuchsia-800/20 rounded-2xl p-5 shadow-md hover:shadow-fuchsia-500/10 cursor-pointer"
//             onClick={() => setSelected(proj)}
//           >
//             <div className="relative h-48 w-full mb-4 rounded-xl overflow-hidden">
//               <Image
//                 src={proj.image}
//                 alt={proj.title}
//                 fill
//                 className="object-cover rounded-xl"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-fuchsia-400">{proj.title}</h3>
//             <p className="text-sm text-gray-300 mt-2">{proj.description}</p>
//             <div className="flex flex-wrap gap-2 mt-3">
//               {proj.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="text-xs px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-900/10 text-fuchsia-300"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selected && (
//           <Dialog open={true} onClose={() => setSelected(null)} className="fixed inset-0 z-50">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/80 flex items-center justify-center p-4"
//             >
//               <motion.div
//                 initial={{ scale: 0.95, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.95, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="bg-[#111]/90 backdrop-blur-lg rounded-2xl p-6 md:p-10 max-w-xl w-full space-y-4 text-white"
//               >
//                 <Dialog.Title className="text-2xl font-bold text-fuchsia-400">
//                   {selected.title}
//                 </Dialog.Title>
//                 <Image
//                   src={selected.image}
//                   alt={selected.title}
//                   width={800}
//                   height={400}
//                   className="rounded-xl object-cover"
//                 />
//                 <p className="text-gray-300">{selected.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {selected.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 text-sm rounded-full border border-fuchsia-500/30 text-fuchsia-300 bg-fuchsia-900/10"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4">
//                   <a
//                     href={selected.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-800/20 transition"
//                   >
//                     GitHub
//                   </a>
//                   <a
//                     href={selected.demo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 rounded-lg bg-fuchsia-600 text-white hover:bg-fuchsia-500 transition"
//                   >
//                     Live Demo
//                   </a>
//                 </div>
//                 <button
//                   onClick={() => setSelected(null)}
//                   className="mt-4 px-4 py-2 rounded-md bg-fuchsia-700 hover:bg-fuchsia-600 text-white"
//                 >
//                   Close
//                 </button>
//               </motion.div>
//             </motion.div>
//           </Dialog>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


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
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: 'AI Portfolio Builder',
    description: 'Auto-generate developer portfolios using AI-driven modular logic.',
    image: '/image1.png',
    tech: ['Next.js', 'TailwindCSS', 'OpenAI'],
    github: '#',
    demo: 'https://marketplace-shopco.vercel.app/',
  },
  {
    title: 'Creative Landing Page',
    description: 'Scroll-based interactive branding experience for SaaS.',
    image: '/agent.PNG',
    tech: ['Framer Motion', 'Vercel', 'Tailwind'],
    github: '#',
    demo: 'https://agentia-world-iqea.vercel.app/',
  },
  {
    title: 'Realtime Chat App',
    description: 'Sleek messaging UI using Node and Socket.io.',
    image: '/furniro.png',
    tech: ['React', 'Socket.io', 'Node.js'],
    github: '#',
    demo: 'https://furnitur-web.vercel.app/',
  },
];

export default function ProjectShowcase() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="relative py-32 px-4 sm:px-8 md:px-20 bg-[#0e0e0e] text-white overflow-hidden">
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
        className="text-center text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-pink-500 text-transparent bg-clip-text mb-16"
      >
        ✨ Featured Projects ✨
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
            {/* Image with overlay */}
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
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
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-lg border border-fuchsia-500 text-fuchsia-300 hover:bg-fuchsia-800/20 transition text-center"
                  >
                    GitHub
                  </a>
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
              </motion.div>
            </motion.div>
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
