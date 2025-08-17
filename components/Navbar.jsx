import React from 'react'

export default function Navbar () {
  return (
    <div className='h-20 pt-4 items-center justify-end pr-14 flex bg-[#1c1c1c]'>
      <ul className='flex space-x-28 text-xl font-bold text-white font-mono'>
        <li className='hover:text-[#00f5a0] transition-colors duration-300'>Projects</li>
        <li className='hover:text-[#00f5a0] transition-colors duration-300'>About Me</li>
        <li className='hover:text-[#00f5a0] transition-colors duration-300'>Contact</li>
      </ul>
    </div>
  )
}
