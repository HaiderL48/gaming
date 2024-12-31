import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const links = [
        {href:'https://twitter.com/haidelimdi8', icon: <FaTwitter />},
        {href:'https://discord.com', icon: <FaDiscord />},
        {href:'https://instagram.com/haidelimdi8', icon: <FaInstagram />},
        {href:'https://github.com/HaiderL48', icon: <FaGithub />},
    ]
  return (
   <footer className='w-screen bg-violet-600 mt-5 py-4 txt-black'>
    <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
<p className='text-center text-sm md:text-left '>&copy; 2025 Haider. All rights reserved</p>
<div className='flex justify-center gap-4 md:justify-start'>
{
    links.map((item,index)=>(
        <a key={index} href={item.href} target={'_blank'} rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>{item.icon}</a>
    ))
}
</div>
<a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'> Privacy Policy</a>
    </div>
   </footer>
  )
}

export default Footer