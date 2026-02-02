import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: "Secure Auth System",
      description: "A robust authentication system with MFA, rate limiting, and security headers implementation",
      tags: ["React", "Node.js", "JWT", "Redis"],
      github: "https://github.com/TuanmudaJannZ/secure-auth",
      live: "https://auth-demo.jannz.my.id",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop"
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated web vulnerability scanner for detecting common security issues",
      tags: ["Python", "Django", "Celery", "PostgreSQL"],
      github: "https://github.com/TuanmudaJannZ/vuln-scanner",
      live: "https://scanner.jannz.my.id",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w-400&h=300&fit=crop"
    },
    {
      title: "Malware Analysis Toolkit",
      description: "Web-based toolkit for basic static and dynamic malware analysis",
      tags: ["Flask", "Docker", "YARA", "Volatility"],
      github: "https://github.com/TuanmudaJannZ/malware-toolkit",
      live: "https://malware-tools.jannz.my.id",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    },
    {
      title: "LegionX Dashboard",
      description: "Security operations dashboard for LegionX team coordination",
      tags: ["Next.js", "TypeScript", "Tailwind", "WebSocket"],
      github: "https://github.com/TuanmudaJannZ/legionx-dashboard",
      live: "https://legionx.jannz.my.id",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "Bug Bounty Reports",
      description: "Curated collection of ethical hacking methodologies and bug bounty writeups",
      tags: ["Markdown", "Jekyll", "GitHub Pages"],
      github: "https://github.com/TuanmudaJannZ/bugbounty-reports",
      live: "https://reports.jannz.my.id",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop"
    },
    {
      title: "Port Scanner Pro",
      description: "Advanced network port scanner with service detection",
      tags: ["Go", "React", "WebAssembly", "Nmap"],
      github: "https://github.com/TuanmudaJannZ/portscanner",
      live: "https://portscan.jannz.my.id",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop"
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-neon-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects combining security and development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-cosmic-light/30 backdrop-blur-sm rounded-2xl overflow-hidden glow-border hover-glow group"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <div 
                  className="w-full h-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cosmic-dark text-xs rounded-full border border-neon-blue/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors"
                  >
                    <FiGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors"
                  >
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/TuanmudaJannZ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold hover-glow transition-all"
          >
            <FiGithub />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
