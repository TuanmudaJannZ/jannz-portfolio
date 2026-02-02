import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaLinux, FaGitAlt, FaPython,
  FaShieldAlt, FaNetworkWired, FaCode, FaDatabase
} from 'react-icons/fa'
import { SiTailwindcss, SiReact, SiKaliLinux, SiBurpsuite } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      category: "Web Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "#1572B6" },
        { name: "JavaScript", icon: <FaJs />, level: 88, color: "#F7DF1E" },
        { name: "React", icon: <SiReact />, level: 85, color: "#61DAFB" },
        { name: "Tailwind", icon: <SiTailwindcss />, level: 92, color: "#06B6D4" },
      ]
    },
    {
      category: "Security Tools",
      skills: [
        { name: "Kali Linux", icon: <SiKaliLinux />, level: 90, color: "#557C94" },
        { name: "Burp Suite", icon: <SiBurpsuite />, level: 85, color: "#FF6633" },
        { name: "Wireshark", icon: <FaNetworkWired />, level: 80, color: "#1679A7" },
        { name: "Metasploit", icon: <FaShieldAlt />, level: 75, color: "#FF6B35" },
      ]
    },
    {
      category: "Other Skills",
      skills: [
        { name: "Linux", icon: <FaLinux />, level: 88, color: "#FCC624" },
        { name: "Git", icon: <FaGitAlt />, level: 90, color: "#F05032" },
        { name: "Python", icon: <FaPython />, level: 80, color: "#3776AB" },
        { name: "Reverse Engineering", icon: <FaCode />, level: 75, color: "#00f3ff" },
        { name: "Malware Analysis", icon: <FaShieldAlt />, level: 70, color: "#b967ff" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-neon-blue">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical expertise and proficiency in various tools and technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-cosmic-light/30 backdrop-blur-sm rounded-2xl p-8 glow-border"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-neon-blue">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-neon-blue font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1 }}
                        className="h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">
            Continuous Learning & Growth
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm constantly expanding my skill set through certifications, 
            hands-on projects, and staying updated with the latest security 
            threats and development trends. Currently focusing on advanced 
            penetration testing techniques and cloud security.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
