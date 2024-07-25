import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import xom from '../assets/xom2.jpg'
import { Link, animateScroll as scroll } from 'react-scroll';

const About = () => {
  return (
<>  

<br />
<br />

<h1 className='text-black dark:text-white flex items-center justify-center text-3xl font-bold'>
About <span className='ml-2 text-indigo-500'>Me</span>
</h1>
   <div className='mt-5 md:mt-0 text-black dark:text-white w-full  h-[80vh] mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8" flex  flex-col  md:flex-row gap-7 sm:gap-10 md:gap-32 lg:gap-44  items-center  md:justify-center md:items-center'>
    <div className='w-[22rem] md:w-[130rem] lg:w-[100rem] '>

      <img className='rounded-3xl' src={xom} alt="xom gyan" />
    </div>
    
    <div>
      <h1 className='text-2xl font-medium'>I'm Rekar</h1>
      <p className='text-lg font-medium'>Front-End Developer</p>
        <br />
      <p className='text-sm font-medium flex-wrap text-wrap'>
          I am an Information Technology student skilled in 
          front-end web development and graphic design. My 
          social personality and communication skills enhance 
          my professional interactions. I am dedicated to high-quality 
          work and passionate about my duties. My strong work ethic 
          and logical thinking help me stay calm and effective in stressful 
          situations.
      </p>
      <br />
      <div className='flex flex-col items-left justify-center gap-3 '>
            <div className='flex gap-2 items-center justify-left'>
            <MdEmail className='text-2xl text-black dark:text-white'/>
            <a href='mailto:rekarjamal@gmail.com' className='underline'>rekarjamal3@gmail.com</a>
            </div>

            <div className='flex gap-2 items-center justify-left'>
            <FaPhoneAlt className='text-xl text-black dark:text-white'/>
            <a href="tel:+9647714256565" className='underline'>+964 771-425-6565</a>
            </div>


        </div>

      <br />
      <Link
      to='Contact'
      spy
      smooth
      offset={-9}
      duration={500}
      className='text-white cursor-pointer rounded-md bg p-2 text-sm font-medium hover:bg-indigo-600'
      >
        Contact Me
      </Link>
    </div>

   </div>
   </>
  )
}

export default About

