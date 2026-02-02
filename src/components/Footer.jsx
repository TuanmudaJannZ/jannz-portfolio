import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-400">
              © {currentYear} JannZ. All rights reserved.
            </p>
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400"
          >
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by JannZ</span>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6 mt-4 md:mt-0"
          >
            <a
              href="#home"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              Home
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              Contact
            </a>
            <a
              href="https://github.com/TuanmudaJannZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors"
            >
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Domain */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">
            portofolio.jannz.my.id
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
