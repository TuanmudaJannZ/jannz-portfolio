import React from 'react'
import { motion } from 'framer-motion'
import { FiShield, FiCode, FiUsers, FiTarget } from 'react-icons/fi'

const About = () => {
  const features = [
    {
      icon: <FiShield />,
      title: "Security First",
      description: "Implementing security best practices in every project"
    },
    {
      icon: <FiCode />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code"
    },
    {
      icon: <FiUsers />,
      title: "Team Leadership",
      description: "Leading LegionX security team"
    },
    {
      icon: <FiTarget />,
      title: "Goal Oriented",
      description: "Focused on achieving objectives"
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-neon-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              Cyber Security Specialist & Full Stack Developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm JannZ, a passionate cybersecurity professional with extensive 
              experience in bug hunting, penetration testing, reverse engineering, 
              and malware analysis. As the leader of LegionX, I coordinate security 
              operations and mentor team members.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in technology started with web development, which evolved 
              into a deep interest in cybersecurity. I believe in building secure 
              systems from the ground up and enjoy the challenge of finding 
              vulnerabilities before malicious actors do.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not securing systems or developing applications, I'm 
              contributing to open-source projects, writing technical articles, 
              or participating in bug bounty programs.
            </p>

            <div className="pt-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  />
                </div>
                <span className="text-sm">Security Research</span>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  />
                </div>
                <span className="text-sm">Web Development</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  />
                </div>
                <span className="text-sm">Team Leadership</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-cosmic-light/50 p-6 rounded-2xl glow-border hover-glow"
              >
                <div className="text-3xl text-neon-blue mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
