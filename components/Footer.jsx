'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, FileText, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] border-t border-gray-700">
      <div className="px-10 py-8">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-center font-bold text-white font-mono mb-6 hover:text-[#00f5a0] transition-colors duration-300">
            Contact Me!
          </h3>

          <div className="flex justify-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/BlazeGaming456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-[#00f5a0] transition-colors duration-300"
            >
              <Github size={20} />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ajin-chundakkattu-raju/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-[#00f5a0] transition-colors duration-300"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 text-white hover:text-[#00f5a0] transition-colors duration-300"
            >
              <FileText size={20} />
              Resume
            </a>

            {/* Email */}
            <a
              href="mailto:ajincraju@gmail.com"
              className="flex items-center gap-2 text-white hover:text-[#00f5a0] transition-colors duration-300"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-mono text-sm text-center md:text-left mb-4 md:mb-0">
              © Ajin Chundakkattu Raju 2025 🤪.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
