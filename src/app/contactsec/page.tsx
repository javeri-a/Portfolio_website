

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
  FiGithub,
} from 'react-icons/fi';
import {
  FaFacebook,
  FaGithub as FaGithubIcon,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/javeria-qureshi' },
  { icon: FaGithubIcon, url: 'https://github.com/javeri-a' },
  { icon: FaTwitter, url: 'https://x.com/home' },
  { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100056061157348' },
  {icon : MdEmail, url: 'mailto:javiconnectdev@gmail.com' }
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main id = "contactsec" className="min-h-screen bg-[#0a0a0a] text-white px-4 py-20 sm:px-6 lg:px-24 font-sans relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/dots.svg')] bg-repeat opacity-10 z-0" />

      {/* Animated Blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-15%] left-[-10%] w-72 h-72 sm:w-80 sm:h-80 bg-fuchsia-600 rounded-full blur-[120px] opacity-20 z-0"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-15%] right-[-10%] w-80 h-80 sm:w-96 sm:h-96 bg-pink-500 rounded-full blur-[140px] opacity-20 z-0"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Left Section */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl sm:text-6xl font-extrabold  text-white"
          >
            Lets  <span className='text-fuchsia-500'>Connect</span> 
          </motion.h2>

          <p className="text-gray-400 max-w-md text-base sm:text-lg">
            I believe in conversations that lead to impact. Whether you have a bold idea or just want to say hello, I am all ears.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 text-sm">
            {[
              { icon: <FiMail />, text: 'javiconnectdev@gmail.com' },
              { icon: <FiMessageSquare />, text: 'Let’s talk creativity over coffee or code.' },
              { icon: <FiUser />, text: 'Available for collaborations, globally remote.' },
              { icon: <FiGithub />, text: 'Code is poetry. Find mine on GitHub.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="mt-1 text-fuchsia-500">{item.icon}</span>
                <p className="text-white text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap gap-4">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <motion.a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-fuchsia-600 hover:scale-110 transition"
                title={url}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: idx * 0.1 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Typing Text */}
          <TypingText text="Crafting digital experiences, one connection at a time..." />
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-[0_0_40px_#a855f780]"
        >
          {['name', 'email', 'subject'].map((field, idx) => (
            <div key={idx}>
              <label htmlFor={field} className="block mb-2 text-sm text-gray-400 capitalize">
                {field}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                required
                className="w-full p-3 bg-black/30 text-white border border-white/10 rounded-md focus:outline-none focus:border-fuchsia-500 transition"
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="block mb-2 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full p-3 bg-black/30 text-white border border-white/10 rounded-md focus:outline-none focus:border-fuchsia-500 resize-none"
            />
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px #d946ef',
            }}
            type="submit"
            className="bg-fuchsia-600 hover:bg-fuchsia-700 transition rounded-full px-6 py-3 text-white font-semibold shadow-lg w-full"
          >
            Send Message →
          </motion.button>

          {submitted && (
            <div className="mt-4 text-green-400 flex items-center justify-center gap-2 text-sm">
              <FiCheckCircle /> Message sent successfully!
            </div>
          )}
        </motion.form>
      </motion.div>
    </main>
  );
}

function TypingText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="text-sm text-gray-500 mt-4"
    >
      {displayedText}
    </motion.p>
  );
}
