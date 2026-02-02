import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi'
import { FaTelegram, FaGithub } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        formData,
        'your_user_id' // Replace with your EmailJS user ID
      )
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactMethods = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "contact@jannz.my.id",
      href: "mailto:contact@jannz.my.id",
      color: "text-red-400"
    },
    {
      icon: <FaTelegram />,
      title: "Telegram",
      value: "@TuanJannZ",
      href: "https://t.me/TuanJannZ",
      color: "text-blue-400"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "TuanmudaJannZ",
      href: "https://github.com/TuanmudaJannZ",
      color: "text-gray-300"
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-neon-blue">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss security? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-cosmic-light/30 backdrop-blur-sm rounded-2xl p-8 glow-border"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
              >
                Failed to send message. Please try again or contact me directly.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <span className="flex items-center space-x-2">
                      <FiUser />
                      <span>Your Name</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cosmic-dark border border-gray-700 rounded-lg focus:border-neon-blue focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <span className="flex items-center space-x-2">
                      <FiMail />
                      <span>Email Address</span>
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cosmic-dark border border-gray-700 rounded-lg focus:border-neon-blue focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cosmic-dark border border-gray-700 rounded-lg focus:border-neon-blue focus:outline-none transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  <span className="flex items-center space-x-2">
                    <FiMessageSquare />
                    <span>Your Message</span>
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-cosmic-dark border border-gray-700 rounded-lg focus:border-neon-blue focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or security concerns..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold flex items-center justify-center space-x-2 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FiSend />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of these channels. I typically 
                respond within 24 hours.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 bg-cosmic-light/20 rounded-xl hover:bg-cosmic-light/40 transition-colors group"
                  >
                    <div className={`text-2xl ${method.color} group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{method.title}</div>
                      <div className="text-gray-300">{method.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response Info */}
            <div className="bg-cosmic-light/20 rounded-2xl p-6 border border-neon-blue/20">
              <h4 className="text-xl font-bold mb-4 text-neon-blue">Quick Response</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 mr-3"></div>
                  <span>Security consultations: Response within 12 hours</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 mr-3"></div>
                  <span>Bug reports: Immediate attention for critical issues</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 mr-3"></div>
                  <span>Project collaborations: Detailed response within 24 hours</span>
                </li>
              </ul>
            </div>

            {/* Availability Status */}
            <div className="bg-cosmic-light/20 rounded-2xl p-6 border border-neon-purple/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">Current Availability</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for projects</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Currently accepting new security audit projects and collaborations. 
                Limited slots available for long-term engagements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
