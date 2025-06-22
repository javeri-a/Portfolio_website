'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {  FaGithub, FaLinkedinIn, FaTwitter, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// Updated: Array with icon + URL
const socialLinks = [
  {
    icon: FaLinkedinIn,
    url: 'www.linkedin.com/in/javeria-qureshi',
  },
  {
    icon: FaGithub,
    url: 'https://github.com/javeri-a',
  },
  {
    icon: FaTwitter,
    url: 'https://x.com/home',
  },
  {
    icon: FaFacebook,
    url: 'https://www.facebook.com/profile.php?id=100056061157348',
  },
  {
    icon: MdEmail,
    url: 'mailto:javiconnectdev@gmail.com',
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0c0c0c] text-white font-sans overflow-hidden">

      {/* Glowing Background Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-fuchsia-600 rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-[160px] opacity-20 animate-pulse" />
      <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-purple-500 rounded-full blur-[100px] opacity-20 animate-pulse" />

 

      {/* Hero Section */}
      <section id="home" className="relative z-20 w-full px-6 md:px-24 py-28 pt-40">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl text-center md:text-left space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Hello, I’m <br />
              <span className="bg-gradient-to-r  from-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
                Javeria
              </span>
              <span className='text-2xl bg-clip-text  font-semibold'>(Front-End Developer)</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
               I build modern front-end experiences using Next.js and Tailwind CSS.
Focused on clean design, smooth animations, and seamless performance.
Creating interfaces that feel intuitive, fast, and ready for what’s next.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="resume.pdf"
              className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 rounded-full font-semibold transition shadow-lg">Download Resume</a>
              
              <a 
  href="#projectsec" 
  className="px-6 py-3 border border-gray-700 hover:border-fuchsia-600 text-gray-300 hover:text-white rounded-full transition"
>
  Explore Work
</a>
              
            </div>
          </motion.div>

          {/* Avatar with Social Icons */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative mb-12 md:mb-0"
          >
            <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full relative z-10 border-4 border-transparent bg-gradient-to-tr from-fuchsia-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
                <Image
                  src="/image.png"
                  alt="Mam Javeria"
                  width={400}
                  height={400}
                  className="rounded-full object-cover shadow-lg w-full "
                />
              </div>
            </div>

            {/* Floating Social Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4"
            >
              {socialLinks.map(({ icon: Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-fuchsia-600 hover:scale-110 transition"
                  title={url}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

