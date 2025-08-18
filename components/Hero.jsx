import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import CodeEditor from '@/components/CodeEditor'
import Image from 'next/image'

const Hero = ({id}) => {
  const [code, setCode] = React.useState(`> Ajin.location
"Pullad, Pathanamthitta, Kerala"

> Ajin.contact
["mailto:ajincraju@gmail.com", "https://www.linkedin.com/in/ajin-chundakkattu-raju-96a9ba279/", "https://github.com/BlazeGaming456"]

> Ajin.resume
"/resume.pdf"

> Ajin.interests
["badminton", "travelling", "reading", "movies"]

> Ajin.education
"BTech. Electronics & Communication Engineering - IIIT Jabalpur, Madhya Pradesh"

> Ajin.languages
["Next.js", "C++", "Python"]`)

  return (
    <div id={id} className='bg-[#1c1c1c] pt-26'>
      {/* Main Section */}
      <div className='pb-28 max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6'>
        {/* Left Text Section */}
        <div className='w-full md:w-2/3'>
          <div className='font-bold text-white font-mono text-5xl'>
            <Typewriter
              words={['Ajin Chundakkattu Raju']}
              loop={true}
              cursor
              cursorStyle='|'
              textSpeed={40}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </div>

          <div className='pt-4 text-lg text-gray-400'>
            <p className='text-gray-300 leading-7'>
              {'>'}{' '}
              <span className='text-[#00f5a0] font-semibold'>Next.js</span>{' '}
              developer exploring{' '}
              <span className='text-[#00f5a0] font-semibold'>AI & ML</span> to
              create intelligent web experiences.
              <br />
              {'>'} Passionate about building{' '}
              <span className='text-[#00f5a0] font-semibold'>
                Scalable Applications
              </span>{' '}
              and training my own{' '}
              <span className='text-[#00f5a0] font-semibold'>AI Models</span>{' '}
              for smarter solutions.
            </p>

            {/* CTA Buttons */}
            <div className='mt-6 flex gap-6'>
              <a
                href='#projects'
                className='px-4 py-2 rounded-lg bg-[#00f5a0] text-black font-medium hover:bg-[#00d98a] transition'
              >
                View Projects
              </a>
              <a
                href='/resume.pdf'
                target='_blank'
                className='px-4 py-2 rounded-lg border border-[#00f5a0] text-[#00f5a0] hover:bg-[#00f5a0] hover:text-black transition'
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className='w-full md:w-1/3 flex justify-center mt-10 md:mt-0'>
          <div className='relative w-56 h-56 md:w-82 md:h-82'>
            <Image
              src='/logo.jpeg'
              alt='Ajin'
              fill
              className={`rounded-full object-cover border-4 border-white hover:border-[#00f5a0] transition-all duration-300`}
            />
          </div>
        </div>
      </div>

      {/* Code Editor */}
      <div className='bg-white pt-12'>
        <h1 className='text-center text-3xl font-mono font-bold text-black hover:text-[#00f5a0] transition-all duration-300'>About Me</h1>
        <div className='w-full max-w-xl mx-auto mt-8 px-4 sm:px-6 lg:px-0'>
  <CodeEditor
    language='javascript'
    code={code}
    setCode={setCode}
    readOnly={true}
  />
</div>

      </div>
    </div>
  )
}

export default Hero
