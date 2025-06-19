
// 'use client';

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { FaBrain, FaCogs, FaUserAstronaut } from 'react-icons/fa';

// export default function AboutSection() {
//   const [projects, setProjects] = useState(0);
//   const [experience, setExperience] = useState(0);

//   useEffect(() => {
//     let proj = 0;
//     let exp = 0;
//     const projInterval = setInterval(() => {
//       proj++;
//       setProjects(proj);
//       if (proj >= 40) clearInterval(projInterval);
//     }, 30);

//     const expInterval = setInterval(() => {
//       exp += 0.1;
//       setExperience(parseFloat(exp.toFixed(1)));
//       if (exp >= 1.5) clearInterval(expInterval);
//     }, 80);

//     return () => {
//       clearInterval(projInterval);
//       clearInterval(expInterval);
//     };
//   }, []);

//   return (
//     <section className="relative z-10 w-full px-6 md:px-24 py-24 bg-[#0e0e0e] text-gray-300 overflow-hidden">
//       <div className="absolute top-0 left-0 w-96 h-96 bg-fuchsia-600 blur-[150px] opacity-10 z-0" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 blur-[150px] opacity-10 z-0" />

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="max-w-6xl mx-auto text-center space-y-14 relative z-10"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
//           Who I Am
//         </h2>


//         <p className="text-lg md:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto">
//           I'm <span className="text-white font-semibold"> Javeria</span>, a front-end developer blending creativity with logic. I specialize in <span className="text-fuchsia-400">Next.js</span>, <span className="text-pink-400">Tailwind CSS</span>, and <span className="text-purple-400">Framer Motion</span> to craft responsive, AI-integrated user interfaces. With a background in <span className="text-pink-400">social media marketing</span> and ongoing exploration into <span className="text-fuchsia-400">agentic AI SDKs</span>, I'm shaping the future by building intelligent, dynamic interfaces and crafting agents that act autonomously in real-world projects.
//         </p>

//         <div className="flex justify-center gap-16 mt-8">
//           <div className="text-center">
//             <h3 className="text-5xl font-bold text-fuchsia-500">{experience}+</h3>
//             <p className="mt-2 text-sm text-gray-400">Years Experience</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-5xl font-bold text-fuchsia-500">{projects}+</h3>
//             <p className="mt-2 text-sm text-gray-400">Projects Completed</p>
//           </div>
//         </div>

//         <div className="flex flex-wrap justify-center gap-8 pt-10">
//           {[
//             {
//               title: 'Intelligent Design',
//               icon: <FaBrain size={24} className="text-fuchsia-500" />,
//               text: 'Merging AI with design principles to build smart, adaptable interfaces that go beyond static user interaction.'
//             },
//             {
//               title: 'Agentic Exploration',
//               icon: <FaUserAstronaut size={24} className="text-pink-400" />,
//               text: 'Currently diving into Agentic AI SDKs to develop autonomous front-end agents for enhanced digital workflows.'
//             },
//             {
//               title: 'Creative Strategy',
//               icon: <FaCogs size={24} className="text-purple-400" />,
//               text: 'Social media marketing experience fuels my UI strategy—bridging visual engagement with functional beauty.'
//             }
//           ].map((card, idx) => (
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               key={idx}
//               className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md w-72 text-left space-y-3"
//             >
//               <div className="flex items-center gap-3">
//                 {card.icon}
//                 <h4 className="text-xl font-semibold text-white">{card.title}</h4>
//               </div>
//               <p className="text-sm text-gray-400 leading-relaxed">{card.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaBrain, FaCogs, FaUserAstronaut } from 'react-icons/fa';

export default function AboutSection() {
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    let proj = 0;
    let exp = 0;
    const projInterval = setInterval(() => {
      proj++;
      setProjects(proj);
      if (proj >= 40) clearInterval(projInterval);
    }, 30);

    const expInterval = setInterval(() => {
      exp += 0.1;
      setExperience(parseFloat(exp.toFixed(1)));
      if (exp >= 1.5) clearInterval(expInterval);
    }, 80);

    return () => {
      clearInterval(projInterval);
      clearInterval(expInterval);
    };
  }, []);

  return (
    <section className="relative z-10 w-full px-6 md:px-24 py-24 bg-[#0e0e0e] text-gray-300 overflow-hidden">
      {/* Animated glowing background using Framer Motion */}
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
          I'm <span className="text-white font-semibold">Javeria</span>, a front-end developer blending creativity with logic. I specialize in <span className="text-fuchsia-400">Next.js</span>, <span className="text-pink-400">Tailwind CSS</span>, and <span className="text-purple-400">Framer Motion</span> to craft responsive, AI-integrated user interfaces. With a background in <span className="text-pink-400">social media marketing</span> and ongoing exploration into <span className="text-fuchsia-400">agentic AI SDKs</span>, I'm shaping the future by building intelligent, dynamic interfaces and crafting agents that act autonomously in real-world projects.
        </p>

        <div className="flex justify-center gap-16 mt-8">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-fuchsia-500">{experience}+</h3>
            <p className="mt-2 text-sm text-gray-400">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold text-fuchsia-500">{projects}+</h3>
            <p className="mt-2 text-sm text-gray-400">Projects Completed</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 pt-10">
          {[
            {
              title: 'Intelligent Design',
              icon: <FaBrain size={24} className="text-fuchsia-500" />,
              text: 'Merging AI with design principles to build smart, adaptable interfaces that go beyond static user interaction.'
            },
            {
              title: 'Agentic Exploration',
              icon: <FaUserAstronaut size={24} className="text-pink-400" />,
              text: 'Currently diving into Agentic AI SDKs to develop autonomous front-end agents for enhanced digital workflows.'
            },
            {
              title: 'Creative Strategy',
              icon: <FaCogs size={24} className="text-purple-400" />,
              text: 'Social media marketing experience fuels my UI strategy—bridging visual engagement with functional beauty.'
            }
          ].map((card, idx) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={idx}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md w-72 text-left space-y-3"
            >
              <div className="flex items-center gap-3">
                {card.icon}
                <h4 className="text-xl font-semibold text-white">{card.title}</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
