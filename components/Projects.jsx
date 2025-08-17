import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Skill Slate',
    description:
      'A modern full-stack web app that empowers developers and tech professionals to generate, improve, and optimize resumes and cover letters using AI. Features ATS analysis, job match scoring, and more.',
    image: '/skillslate.png',
    tech: [
      'Next.js',
      'Tailwind CSS',
      'PostgreSQL',
      'Gemini API',
      'LaTeX',
      'pdf-parse'
    ],
    link: 'https://github.com/BlazeGaming456/SkillSlate'
  },
  {
    title: 'Delivery ReRoute AI',
    description:
      'An AI-powered delivery rerouting system that dynamically adjusts shipment routes based on warehouse availability and optimized pathfinding. Implements A* algorithm and Google Maps visualization.',
    image: '/delivery.png',
    tech: ['Next.js', 'A* Algorithm', 'Google Maps API'],
    link: 'https://github.com/BlazeGaming456/Delivery_ReRouteAi'
  },
  {
    title: 'InterCode',
    description:
      'A code translation platform that leverages AI to convert code between multiple programming languages. Built with MERN stack and Hugging Face integration for AI-powered conversions.',
    image: '/intercode.png',
    tech: ['MERN', 'Tailwind CSS', 'Gemini API'],
    link: 'https://github.com/BlazeGaming456/Inter-Code'
  },
  {
    title: 'ShopSphere',
    description:
      'An eCommerce web application focused on seamless user experience. Built with the MERN stack, Redux for state management, and Tailwind CSS for styling. Features cart management and secure checkout.',
    image: '/shopsphere.png',
    tech: ['MERN', 'Tailwind CSS', 'Redux'],
    link: 'https://github.com/BlazeGaming456/Shop-Easy-Forever'
  }
]

const Projects = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <h1 className="pb-10 text-4xl text-center font-mono font-bold text-black hover:text-[#00f5a0] transition-all duration-300">
        My Projects
      </h1>

      {/* Wrapper */}
      <div className="grid gap-10 md:grid-cols-1 px-6 max-w-4xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative flex flex-col md:flex-row rounded-xl overflow-hidden bg-white border-2 border-gray-300 transition-all duration-500 ease-out hover:scale-[1.02] hover:border-[#00f5a0] hover:shadow-[0_0_15px_#00f5a0,0_0_30px_#00f5a0]"
          >
            {/* Left Image with diagonal cut */}
            <div className="relative w-full md:w-1/3 h-60 md:h-72 z-10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover [clip-path:polygon(0_0,100%_0,70%_100%,0_100%)]"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-between relative z-10">
              <div>
                <h2 className="text-2xl font-semibold text-black">
                  {project.title}
                </h2>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, i) => (
                  <li
                    key={i}
                    className="bg-[#00f5a0] text-black font-medium rounded-md px-2 py-1 text-xs shadow-sm"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-[#00f5a0] text-black font-semibold rounded-md hover:bg-black hover:text-[#00f5a0] border border-[#00f5a0] transition"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects