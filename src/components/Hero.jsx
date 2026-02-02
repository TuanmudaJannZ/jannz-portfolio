import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const Hero = () => {
  const roles = [
    "Cyber Security Enthusiast",
    "Bug Hunter",
    "Pentester",
    "Reverse Engineer",
    "Malware Analyst",
    "Web Developer",
    "Leader of LegionX"
  ]

  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === roles[currentRole]) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      } else {
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : roles[currentRole].slice(0, prev.length + 1)
        )
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRole, roles])

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-cosmic-gradient bg-nebula"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-neon-blue font-medium">Hello there! I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="glow-text">Jann</span>
            <span className="text-neon-purple glow-text">Z</span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-16 mb-8"
          >
            <div className="text-2xl md:text-3xl font-semibold text-neon-blue min-h-[3rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Securing digital frontiers and building innovative solutions. 
            Passionate about cybersecurity, reverse engineering, and creating 
            robust web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold hover-glow transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-neon-blue rounded-full font-semibold hover:bg-neon-blue/10 hover-glow transition-all"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll</span>
          <FiChevronDown className="text-2xl text-neon-blue animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
