// components/ProfessionalNavbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const [typingText, setTypingText] = useState('')
  const titles = ['Frontend Developer', 'Next.js Expert', 'UI Specialist', 'Code Artist']
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let i = 0
    const currentTitle = titles[currentTitleIndex]
    const typingInterval = setInterval(() => {
      if (i <= currentTitle.length) {
        setTypingText(currentTitle.substring(0, i))
        i++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentTitleIndex])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: { 
      opacity: 0,
      y: "-100%",
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20 }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-xl' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo with typing effect */}
          <Link href="/" className="flex items-center group">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 10 }}
              className="relative"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-bold text-xl">{'</>'}</span>
              </div>
              <motion.span 
                animate={{ 
                  boxShadow: ["0 0 5px #06b6d4", "0 0 15px #06b6d4", "0 0 5px #06b6d4"],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2 
                }}
                className="absolute inset-0 rounded-full border-2 border-cyan-400 pointer-events-none"
              />
            </motion.div>
            <div className="ml-3">
              <h1 className="text-white font-bold text-lg">Javeria</h1>
              <div className="text-xs text-cyan-400 h-4 font-mono">
                {typingText}<span className="animate-pulse">|</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 rounded-lg group transition-all duration-300 ${pathname === item.path ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
              >
                <span className="relative z-10">{item.name}</span>
                {pathname === item.path && (
                  <>
                    <motion.span 
                      layoutId="activeNavItem"
                      className="absolute inset-0 bg-gray-800 rounded-lg border border-cyan-400/30"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                    <motion.span
                      animate={{ 
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.5, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity 
                      }}
                      className="absolute inset-0 rounded-lg bg-cyan-400/20 pointer-events-none"
                    />
                  </>
                )}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${pathname === item.path ? 'w-full' : ''}`}
                />
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Hire Me
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Toggle menu"
          >
            <div className="w-6 relative">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block absolute h-0.5 w-full bg-white rounded-full"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block absolute h-0.5 w-full bg-white rounded-full mt-2"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 4 }}
                className="block absolute h-0.5 w-full bg-white rounded-full mt-2"
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className="md:hidden mt-4 pb-4 origin-top"
            >
              <motion.div className="flex flex-col space-y-2 bg-gray-800/95 backdrop-blur-lg rounded-xl p-4 border border-gray-700 shadow-2xl">
                {navItems.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all ${pathname === item.path ? 'bg-gray-700 text-cyan-400' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                    >
                      {item.name}
                      {pathname === item.path && (
                        <motion.span
                          animate={{ 
                            x: [-5, 5, -5],
                          }}
                          transition={{ 
                            repeat: Infinity,
                            duration: 1.5
                          }}
                          className="ml-2 inline-block"
                        >
                          ✨
                        </motion.span>
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-2">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium shadow-lg">
                    Hire Me
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar


