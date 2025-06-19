


// 'use client';

// import { motion } from 'framer-motion';
// import { JSX, useState } from 'react';
// import {
//   FiMail,
//   FiUser,
//   FiMessageSquare,
//   FiCheckCircle,
//   FiLinkedin,
//   FiGithub,
//   FiInstagram,
// } from 'react-icons/fi';

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20 md:px-24 font-sans relative overflow-hidden">
//       {/* Background Decorations */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-fuchsia-600 blur-[150px] opacity-20 z-0" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 blur-[180px] opacity-20 z-0" />
//       <div className="absolute inset-0 bg-[url('/dots.svg')] opacity-5 z-0" />

//       {/* Main Container */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 max-w-4xl mx-auto text-center space-y-12"
//       >
//         <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
//           Let’s <span className="text-fuchsia-500">Connect</span>
//         </h1>

//         <TypingText text="Awaiting your message... Initiating connection." />

//         {/* Contact Form */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="mt-12 space-y-8 bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-[0_0_40px_#a855f780]"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <FloatingInput label="Your Name" id="name" type="text" icon={<FiUser />} />
//             <FloatingInput label="Your Email" id="email" type="email" icon={<FiMail />} />
//           </div>
//           <FloatingInput label="Subject" id="subject" type="text" icon={<FiMessageSquare />} />
//           <FloatingTextArea label="Your Message" id="message" icon={<FiMessageSquare />} />

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             type="submit"
//             className="bg-fuchsia-600 hover:bg-fuchsia-700 transition rounded-full px-8 py-3 text-white font-semibold shadow-lg w-full"
//           >
//             Send Message →
//           </motion.button>

//           {submitted && (
//             <div className="mt-4 text-green-400 flex items-center justify-center gap-2">
//               <FiCheckCircle /> Message sent successfully!
//             </div>
//           )}
//         </motion.form>

//         {/* Emotional Call to Action */}
//         <div className="mt-12 text-center text-gray-300 space-y-3">
//           <p className="text-xl font-semibold text-fuchsia-500">
//             🚀 Let’s build something futuristic together.
//           </p>
//           <p className="text-sm text-gray-400 max-w-md mx-auto">
//             Whether you're launching a new product, upgrading your interface, or imagining the next-gen AI experience — I’m here for it.
//           </p>
//         </div>

//         {/* Social Media Icons */}
//         <div className="mt-10 flex justify-center gap-6">
//           {[
//             { href: 'mailto:your.email@example.com', icon: <FiMail /> },
//             { href: 'https://github.com/yourusername', icon: <FiGithub /> },
//             { href: 'https://linkedin.com/in/yourusername', icon: <FiLinkedin /> },
//             { href: 'https://instagram.com/yourusername', icon: <FiInstagram /> },
//           ].map(({ href, icon }, idx) => (
//             <a
//               key={idx}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white/5 p-4 rounded-full text-white hover:bg-fuchsia-600 hover:scale-110 transition-all border border-white/10 backdrop-blur-md"
//             >
//               {icon}
//             </a>
//           ))}
//         </div>

//         {/* Inspirational Quote */}
//         <div className="mt-16 text-center text-gray-500 text-sm italic">
//           <p>
//             “Every interface tells a story. Let yours whisper innovation.” — Mam Javeria
//           </p>
//         </div>
//       </motion.div>
//     </main>
//   );
// }

// // Typing Text Animation
// function TypingText({ text }: { text: string }) {
//   const [displayedText, setDisplayedText] = useState('');
//   useState(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text[i]);
//       i++;
//       if (i >= text.length) clearInterval(interval);
//     }, 40);
//     return () => clearInterval(interval);
//   });

//   return <p className="text-sm text-gray-500">{displayedText}</p>;
// }

// // Floating Input
// function FloatingInput({
//   label,
//   id,
//   type,
//   icon,
// }: {
//   label: string;
//   id: string;
//   type: string;
//   icon: JSX.Element;
// }) {
//   return (
//     <div className="relative">
//       <div className="absolute left-3 top-4 text-gray-400">{icon}</div>
//       <input
//         type={type}
//         id={id}
//         required
//         placeholder=" "
//         className="peer w-full pl-10 pt-6 pb-2 bg-white/5 text-white border border-white/10 rounded-md focus:outline-none focus:border-fuchsia-500 transition"
//       />
//       <label
//         htmlFor={id}
//         className="absolute left-10 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-fuchsia-500"
//       >
//         {label}
//       </label>
//     </div>
//   );
// }

// // Floating TextArea
// function FloatingTextArea({
//   label,
//   id,
//   icon,
// }: {
//   label: string;
//   id: string;
//   icon: JSX.Element;
// }) {
//   return (
//     <div className="relative">
//       <div className="absolute left-3 top-4 text-gray-400">{icon}</div>
//       <textarea
//         id={id}
//         rows={5}
//         required
//         placeholder=" "
//         className="peer w-full pl-10 pt-6 pb-2 bg-white/5 text-white border border-white/10 rounded-md focus:outline-none focus:border-fuchsia-500 transition resize-none"
//       />
//       <label
//         htmlFor={id}
//         className="absolute left-10 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-fuchsia-500"
//       >
//         {label}
//       </label>
//     </div>
//   );
// }






// 'use client';

// import { motion } from 'framer-motion';
// import { JSX, useState } from 'react';
// import {
//   FiMail,
//   FiUser,
//   FiMessageSquare,
//   FiCheckCircle,
//   FiLinkedin,
//   FiGithub,
//   FiInstagram,
// } from 'react-icons/fi';

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20 md:px-24 font-sans relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-fuchsia-600 blur-[150px] opacity-20 z-0" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 blur-[180px] opacity-20 z-0" />
//       <div className="absolute inset-0 bg-[url('/dots.svg')] opacity-5 z-0" />

//       {/* Grid Layout */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
//       >
//         {/* Left Side: Contact Info */}
//         <div className="space-y-8">
//           <h2 className="text-4xl font-extrabold text-fuchsia-500">Get in Touch</h2>
//           <p className="text-gray-400">
//             Have a project or just want to connect? I’d love to hear from you!
//           </p>

//           <div className="space-y-4 text-sm">
//             <div>
//               <p className="text-gray-400">Email</p>
//               <p className="text-white">summiyaashraf689@gmail.com</p>
//             </div>
//             <div>
//               <p className="text-gray-400">Phone</p>
//               <p className="text-white">+92 316 2573083</p>
//             </div>
//             <div>
//               <p className="text-gray-400">Location</p>
//               <p className="text-white">Karachi, Pakistan</p>
//             </div>
//           </div>

//           <div className="mt-6 flex gap-4">
//             <a href="mailto:summiyaashraf689@gmail.com" className="hover:text-fuchsia-500"><FiMail size={20} /></a>
//             <a href="#" className="hover:text-fuchsia-500"><FiGithub size={20} /></a>
//             <a href="#" className="hover:text-fuchsia-500"><FiLinkedin size={20} /></a>
//             <a href="#" className="hover:text-fuchsia-500"><FiInstagram size={20} /></a>
//           </div>

//           <TypingText text="Awaiting your message... Initiating connection." />
//         </div>

//         {/* Right Side: Contact Form */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-8 bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-[0_0_40px_#a855f780]"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <FloatingInput label="Your Name" id="name" type="text" icon={<FiUser />} />
//             <FloatingInput label="Your Email" id="email" type="email" icon={<FiMail />} />
//           </div>
//           <FloatingInput label="Subject" id="subject" type="text" icon={<FiMessageSquare />} />
//           <FloatingTextArea label="Your Message" id="message" icon={<FiMessageSquare />} />

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             type="submit"
//             className="bg-fuchsia-600 hover:bg-fuchsia-700 transition rounded-full px-8 py-3 text-white font-semibold shadow-lg w-full"
//           >
//             Send Message →
//           </motion.button>

//           {submitted && (
//             <div className="mt-4 text-green-400 flex items-center justify-center gap-2">
//               <FiCheckCircle /> Message sent successfully!
//             </div>
//           )}
//         </motion.form>
//       </motion.div>

//       {/* Footer */}
//       <div className="mt-16 text-center text-gray-500 text-sm italic">
//         <p>“Every interface tells a story. Let yours whisper innovation.” — Mam Javeria</p>
//       </div>
//     </main>
//   );
// }

// // Typing Text Animation
// function TypingText({ text }: { text: string }) {
//   const [displayedText, setDisplayedText] = useState('');
//   useState(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text[i]);
//       i++;
//       if (i >= text.length) clearInterval(interval);
//     }, 40);
//     return () => clearInterval(interval);
//   });

//   return <p className="text-sm text-gray-500">{displayedText}</p>;
// }

// // Floating Input
// function FloatingInput({
//   label,
//   id,
//   type,
//   icon,
// }: {
//   label: string;
//   id: string;
//   type: string;
//   icon: JSX.Element;
// }) {
//   return (
//     <div className="relative">
//       <div className="absolute left-3 top-4 text-gray-400">{icon}</div>
//       <input
//         type={type}
//         id={id}
//         required
//         placeholder=" "
//         className="peer w-full pl-10 pt-6 pb-2 bg-white/5 text-white border border-white/10 rounded-md focus:outline-none focus:border-fuchsia-500 transition"
//       />
//       <label
//         htmlFor={id}
//         className="absolute left-10 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-fuchsia-500"
//       >
//         {label}
//       </label>
//     </div>
//   );
// // }
// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import {
//   FiMail,
//   FiUser,
//   FiMessageSquare,
//   FiCheckCircle,
//   FiGithub,
// } from 'react-icons/fi';
// import {
//   FaFacebook,
//   FaGithub,
//   FaLinkedinIn,
//   FaTwitter,
// } from 'react-icons/fa';

// const socialLinks = [
//   {
//     icon: FaLinkedinIn,
//     url: 'https://www.linkedin.com/in/javeria-qureshi',
//   },
//   {
//     icon: FaGithub,
//     url: 'https://github.com/javeri-a',
//   },
//   {
//     icon: FaTwitter,
//     url: 'https://x.com/home',
//   },
//   {
//     icon: FaFacebook,
//     url: 'https://www.facebook.com/profile.php?id=100056061157348',
//   },
// ];

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20 md:px-24 font-sans relative overflow-hidden">
//       {/* Background Visuals */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-fuchsia-600 blur-[150px] opacity-20 z-0" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 blur-[180px] opacity-20 z-0" />
//       <div className="absolute inset-0 bg-[url('/dots.svg')] opacity-5 z-0" />

//       {/* Main Container */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
//       >
//         {/* Left Section */}
//         <div className="space-y-8 relative">
//           <h2 className="text-4xl font-extrabold text-fuchsia-500">Let’s Connect</h2>
//           <p className="text-gray-400 max-w-md">
//             I believe in conversations that lead to impact. Whether you have a bold idea or just want to say hello, I’m all ears.
//           </p>

//           <div className="space-y-4 text-sm">
//             <div className="flex items-center gap-3">
//               <FiMail className="text-fuchsia-500" />
//               <p className="text-white">summiyaashraf689@gmail.com</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <FiMessageSquare className="text-fuchsia-500" />
//               <p className="text-white">Let’s talk creativity over coffee or code.</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <FiUser className="text-fuchsia-500" />
//               <p className="text-white">Available for collaborations, globally remote.</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <FiGithub className="text-fuchsia-500" />
//               <p className="text-white">Code is poetry. Find mine on GitHub.</p>
//             </div>
//           </div>

//           <div className="mt-10 flex gap-4">
//             {socialLinks.map(({ icon: Icon, url }, idx) => (
//               <motion.a
//                 key={idx}
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-fuchsia-600 hover:scale-110 transition"
//                 title={url}
//                 animate={{ y: [0, -8, 0] }}
//                 transition={{ repeat: Infinity, duration: 3, delay: idx * 0.1 }}
//               >
//                 <Icon size={16} />
//               </motion.a>
//             ))}
//           </div>

//           <TypingText text="Crafting digital experiences, one connection at a time..." />
//         </div>

//         {/* Right Side: Form */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-[0_0_40px_#a855f780]"
//         >
//           <div>
//             <label htmlFor="name" className="block mb-2 text-sm text-gray-400">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               required
//               className="w-full p-3 bg-black/30 text-white border border-white/10 rounded-md focus:outline-none focus:border-fuchsia-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm text-gray-400">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               required
//               className="w-full p-3 bg-black/30 text-white border border-white/10 rounded-md focus:outline-none focus:border-fuchsia-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="subject" className="block mb-2 text-sm text-gray-400">
//               Subject
//             </label>
//             <input
//               type="text"
//               id="subject"
//               required
//               className="w-full p-3 bg-black/30 text-white border border-white/10 rounded-md focus:outline-none focus:border-fuchsia-500"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block mb-2 text-sm text-gray-400">
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows={5}
//               required
//               className="w-full p-3 bg-black/30 text-white border border-white/10 rounded-md focus:outline-none focus:border-fuchsia-500 resize-none"
//             />
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             type="submit"
//             className="bg-fuchsia-600 hover:bg-fuchsia-700 transition rounded-full px-8 py-3 text-white font-semibold shadow-lg w-full"
//           >
//             Send Message →
//           </motion.button>

//           {submitted && (
//             <div className="mt-4 text-green-400 flex items-center justify-center gap-2">
//               <FiCheckCircle /> Message sent successfully!
//             </div>
//           )}
//         </motion.form>
//       </motion.div>
//     </main>
//   );
// }

// function TypingText({ text }: { text: string }) {
//   const [displayedText, setDisplayedText] = useState('');

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text[i]);
//       i++;
//       if (i >= text.length) clearInterval(interval);
//     }, 40);
//     return () => clearInterval(interval);
//   }, [text]);

//   return <p className="text-sm text-gray-500 mt-4">{displayedText}</p>;
// }



// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import {
//   FiMail,
//   FiUser,
//   FiMessageSquare,
//   FiCheckCircle,
//   FiGithub,
// } from 'react-icons/fi';
// import {
//   FaFacebook,
//   FaGithub as FaGithubIcon,
//   FaLinkedinIn,
//   FaTwitter,
// } from 'react-icons/fa';

// const socialLinks = [
//   { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/javeria-qureshi' },
//   { icon: FaGithubIcon, url: 'https://github.com/javeri-a' },
//   { icon: FaTwitter, url: 'https://x.com/home' },
//   { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100056061157348' },
// ];

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20 md:px-24 font-sans relative overflow-hidden">
//       <div className="absolute inset-0 bg-[url('/dots.svg')] bg-repeat opacity-10 z-0" />

//       {/* Animated Blobs */}
//       <motion.div
//         initial={{ x: 0, y: 0 }}
//         animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
//         transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
//         className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-fuchsia-600 rounded-full blur-[140px] opacity-20 z-0"
//       />
//       <motion.div
//         initial={{ x: 0, y: 0 }}
//         animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
//         className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-500 rounded-full blur-[160px] opacity-20 z-0"
//       />
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: [0.05, 0.1, 0.05] }}
//         transition={{ duration: 10, repeat: Infinity }}
//         className="absolute inset-0 bg-[url('/dots.svg')] z-0"
//       />

//       {/* Main Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
//       >
//         {/* Left Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           transition={{ staggerChildren: 0.2 }}
//           viewport={{ once: true }}
//           className="space-y-8"
//         >
//           <motion.h2
//             variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
//             className="text-4xl font-extrabold text-fuchsia-500"
//           >
//             Let’s Connect
//           </motion.h2>

//           <motion.p
//             variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//             className="text-gray-400 max-w-md"
//           >
//             I believe in conversations that lead to impact. Whether you have a bold idea or just want to say hello, I’m all ears.
//           </motion.p>

//           {/* Contact Info */}
//           <motion.div
//             className="space-y-4 text-sm"
//             variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//           >
//             {[
//               { icon: <FiMail />, text: 'javiconnectdev@gmail.com' },
//               { icon: <FiMessageSquare />, text: 'Let’s talk creativity over coffee or code.' },
//               { icon: <FiUser />, text: 'Available for collaborations, globally remote.' },
//               { icon: <FiGithub />, text: 'Code is poetry. Find mine on GitHub.' },
//             ].map((item, idx) => (
//               <div key={idx} className="flex items-center gap-3">
//                 <span className="text-fuchsia-500">{item.icon}</span>
//                 <p className="text-white">{item.text}</p>
//               </div>
//             ))}
//           </motion.div>

//           {/* Social Icons */}
//           <div className="mt-10 flex gap-4">
//             {socialLinks.map(({ icon: Icon, url }, idx) => (
//               <motion.a
//                 key={idx}
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-fuchsia-600 hover:scale-110 transition"
//                 title={url}
//                 animate={{ y: [0, -6, 0] }}
//                 transition={{ repeat: Infinity, duration: 2.5, delay: idx * 0.1 }}
//               >
//                 <Icon size={16} />
//               </motion.a>
//             ))}
//           </div>

//           {/* Typing Text */}
//           <TypingText text="Crafting digital experiences, one connection at a time..." />
//         </motion.div>

//         {/* Contact Form */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-md shadow-[0_0_40px_#a855f780]"
//         >
//           {['name', 'email', 'subject'].map((field, idx) => (
//             <div key={idx}>
//               <label htmlFor={field} className="block mb-2 text-sm text-gray-400 capitalize">
//                 {field}
//               </label>
//               <input
//                 type={field === 'email' ? 'email' : 'text'}
//                 id={field}
//                 required
//                 className="w-full p-3 bg-black/30 text-white border border-white/10 rounded-md focus:outline-none focus:border-fuchsia-500 transition"
//               />
//             </div>
//           ))}

//           <div>
//             <label htmlFor="message" className="block mb-2 text-sm text-gray-400">
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows={5}
//               required
//               className="w-full p-3 bg-black/30 text-white border border-white/10 rounded-md focus:outline-none focus:border-fuchsia-500 resize-none"
//             />
//           </div>

//           <motion.button
//             whileHover={{
//               scale: 1.05,
//               boxShadow: '0 0 20px #d946ef',
//             }}
//             type="submit"
//             className="bg-fuchsia-600 hover:bg-fuchsia-700 transition rounded-full px-8 py-3 text-white font-semibold shadow-lg w-full"
//           >
//             Send Message →
//           </motion.button>

//           {submitted && (
//             <div className="mt-4 text-green-400 flex items-center justify-center gap-2">
//               <FiCheckCircle /> Message sent successfully!
//             </div>
//           )}
//         </motion.form>
//       </motion.div>
//     </main>
//   );
// }

// function TypingText({ text }: { text: string }) {
//   const [displayedText, setDisplayedText] = useState('');

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text[i]);
//       i++;
//       if (i >= text.length) clearInterval(interval);
//     }, 40);
//     return () => clearInterval(interval);
//   }, [text]);

//   return (
//     <motion.p
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 1.5, duration: 1 }}
//       className="text-sm text-gray-500 mt-4"
//     >
//       {displayedText}
//     </motion.p>
//   );
// }



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

const socialLinks = [
  { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/javeria-qureshi' },
  { icon: FaGithubIcon, url: 'https://github.com/javeri-a' },
  { icon: FaTwitter, url: 'https://x.com/home' },
  { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100056061157348' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-4 py-20 sm:px-6 lg:px-24 font-sans relative overflow-hidden">
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
            className="text-3xl sm:text-4xl font-extrabold text-fuchsia-500"
          >
            Let’s Connect
          </motion.h2>

          <p className="text-gray-400 max-w-md text-base sm:text-lg">
            I believe in conversations that lead to impact. Whether you have a bold idea or just want to say hello, I’m all ears.
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
