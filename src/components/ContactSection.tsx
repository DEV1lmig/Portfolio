import React from 'react'
import { motion } from 'framer-motion'
import { Github, Instagram, Mail } from 'lucide-react'

export const ContactSection = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/DEV1lmig' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/devilmig' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white p-10 rounded-lg shadow-lg w-auto mx-auto"
    >
      <h3 className="text-2xl font-bold mb-6">¡Conectemos!</h3>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300"
            aria-label={link.name}
          >
            <link.icon size={24} />
          </a>
        ))}
      </div>

      <div className="text-center">
        <a
          href="mailto:your.email@example.com"
          className="inline-flex items-center text-lg hover:text-gray-300 transition-colors duration-300"
        >
          <Mail size={20} className="mr-2" />
          quirozmiguel2002@gmail.com
        </a>
      </div>
    </motion.div>
  )
}
