import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiAward } from 'react-icons/fi'

const Certificates = () => {
  const certificates = [
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2023",
      description: "Validated expertise in ethical hacking techniques and penetration testing",
      color: "#FF6B35"
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2022",
      description: "Demonstrated knowledge in IT security and risk management",
      color: "#00A8E8"
    },
    {
      title: "Offensive Security Certified Professional (OSCP)",
      issuer: "Offensive Security",
      date: "2023",
      description: "Proven hands-on penetration testing skills",
      color: "#FFD166"
    },
    {
      title: "AWS Certified Security",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Expertise in AWS security services and best practices",
      color: "#FF9900"
    },
    {
      title: "Certified Information Systems Security Professional (CISSP)",
      issuer: "(ISC)²",
      date: "2022",
      description: "Advanced knowledge in information security",
      color: "#2E5AAC"
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "2023",
      description: "Comprehensive cybersecurity training program",
      color: "#4285F4"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  return (
    <section id="certificates" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-neon-blue">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognized expertise through industry certifications and achievements
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-cosmic-light/30 backdrop-blur-sm rounded-2xl p-8 glow-border hover-glow"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl" style={{ color: cert.color }}>
                  <FiAward />
                </div>
                <span className="text-sm text-neon-blue font-semibold">{cert.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
              <p className="text-neon-blue mb-4 font-medium">{cert.issuer}</p>
              <p className="text-gray-300 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-cosmic-light/30 backdrop-blur-sm rounded-2xl p-8 glow-border"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl" style={{ color: certificates[currentIndex].color }}>
                  <FiAward />
                </div>
                <span className="text-sm text-neon-blue font-semibold">
                  {certificates[currentIndex].date}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{certificates[currentIndex].title}</h3>
              <p className="text-neon-blue mb-4 font-medium">{certificates[currentIndex].issuer}</p>
              <p className="text-gray-300 text-sm">{certificates[currentIndex].description}</p>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-cosmic-dark border border-neon-blue/30 hover:bg-neon-blue/10 transition-colors"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <div className="flex space-x-2">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-neon-blue' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-cosmic-dark border border-neon-blue/30 hover:bg-neon-blue/10 transition-colors"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Notable Achievements</h3>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Bug Bounties", value: "50+", desc: "Reports accepted" },
              { label: "CVEs", value: "5", desc: "Vulnerabilities discovered" },
              { label: "Projects", value: "25+", desc: "Open source" },
              { label: "Team Size", value: "15", desc: "LegionX members" },
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-cosmic-light/20 p-6 rounded-xl border border-neon-blue/20"
              >
                <div className="text-3xl font-bold text-neon-blue mb-2">
                  {achievement.value}
                </div>
                <div className="font-semibold mb-1">{achievement.label}</div>
                <div className="text-sm text-gray-300">{achievement.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
