import React from 'react'

import { ReactTyped } from "react-typed";
import self from '../assets/self.jpg'
import  Button  from './Button';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";
import { Link } from 'react-scroll';


const Home = () => {


  const socials = [
    {icon: <FaFacebook />, href:"https://www.facebook.com/rekar.jamal.50/"},
    {icon:   <FaInstagram />, href:"https://www.instagram.com/rek4rr_/"},
    {icon:  <FaLinkedinIn />, href:"https://www.linkedin.com/in/rekar-jamal-96b210284/"},
    {icon:  <FaGithub />, href:"https://github.com/r3k4r"},
    {icon:   <FaBehance />, href:"https://www.behance.net/rekarjamal"}
  ]


 
  return (
    <>
  <section className=' w-full h-[110vh] sm:h-[110vh] md:h-[92vh] dark:bg-gray-800'>
    <div className=' top-28 w-full  h-[80vh] mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8" flex flex-row flex-col md:flex-row gap-7  md:justify-center md:items-center'>
      <div className='mt-5 sm:mt-8 dark:text-white' >
          <div className='flex flex-col gap-1'>
              <h3 className='text-2xl  font-medium lg:text-3xl xl:text-4xl'>Hello, its me</h3>
              <h1 className='text-4xl font-bold lg:text-6xl xl:text-6xl'>Rekar <span className='text-4xl font-bold lg:text-6xl xl:text-6xl text-indigo-500'>JSX</span></h1>
              <h3 className='text-2xl  font-medium lg:text-3xl xl:text-4xl'>And im a    <ReactTyped strings={[
                                    "Front-End Developer",
                                    "Graphic Designer"
                                      ]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    attr="placeholder"
                                    loop>
                                    <input type="text" disabled className='bg-transparent placeholder:text-indigo-500 placeholder:font-medium '/>
                                </ReactTyped></h3>
            
              <div className='flex gap-6 my-3 text-2xl' >
                  {socials.map((social, index) => (
                    <a href={social.href} target='blank' className= ' items-center flex justify-center text-indigo-500 hover:text-indigo-600 bg-transparent w-9 h-9 border-2 border-indigo-500 rounded-full shadow-sm shadow-indigo-500 dark:text-white dark:border-white dark:hover:text-indigo-500 dark:hover:border-indigo-500' key={index}>{social.icon}</a>
                        ))}
              </div>

            <Link to="About" spy={true} smooth={true} offset={-9} duration={500} activeClass='none'>
              <Button text={'About Me'}/>
            </Link>
        </div>


      </div>


      <div className='sm:mt-8 mb-5 w-[350px] sm:w-[340px] md:w-[350px] lg:w-[450px] max-w-7xl flex items-center justify-center md:w-[1800px]'>
        <img className=' rounded-2xl  flex ' src={self} alt="self picture" />
      </div>
    </div>
  </section>
    </>
  )
}

export default Home
