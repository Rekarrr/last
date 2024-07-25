import React from 'react'
import { MdNavigateNext, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaBehance, FaArrowUp  } from "react-icons/fa";
import {Link,  animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo-white.svg';

const Footer = () => {
  const navigation = [
    { name: 'Home'},
    { name: 'About'},
    { name: 'Skills'},
    { name: 'Education'},
    { name: 'Contact'},
  ]


  
  const socials = [
    {icon: <FaFacebook />, href:"https://www.facebook.com/rekar.jamal.50/"},
    {icon:   <FaInstagram />, href:"https://www.instagram.com/rek4rr_/"},
    {icon:  <FaLinkedinIn />, href:"https://www.linkedin.com/in/rekar-jamal-96b210284/"},
    {icon:  <FaGithub />, href:"https://github.com/r3k4r"},
    {icon:   <FaBehance />, href:"https://www.behance.net/rekarjamal"}
  ]


  return (
<div className='text-white   text-black dark:text-white w-full  mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8" flex  flex-col  md:flex-row gap-7 sm:gap-10 md:gap-32 lg:gap-44   md:justify-center md:items-center'>
    <div className='flex flex-col'>
      <div className=' flex flex-col md:grid grid-cols-2  lg:flex lg:flex-row gap-20 p-10'>
          <div>
              <div className='md:max-lg:w-[299px] flex items-center'>
              <img className='h-12' src={logo} alt="" />
              <h1 className='text-3xl'>Rekar's Portfolio</h1>
              </div>
              <br />
              <p className='pl-6' >Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
          </div>


          <div className='flex flex-col gap-3 '>
            <h1 className='text-3xl w-44'>Quick Links</h1>
            <br />
            {navigation.map((item) => (
                <div className='flex justify-left items-center gap-3' key={item.name}>
                    <MdNavigateNext className=' rounded-full bg-white text-black'/>
                    <Link
                    to={item.name}
                    spy
                    smooth
                    offset={-9}
                    duration={500}
                    activeClass='none'
                    className="cursor-pointer text-white block  font-medium"
                    >
                    {item.name}
                    </Link>
                </div>
            ))}
          </div>

          <div className=' flex flex-col gap-1'>
            <h1 className='text-3xl'>Contact Info</h1>
            <br />

            
      <div className='flex flex-col items-left justify-center gap-3 '>
            <div className='flex gap-2 items-center justify-left'>
            <MdEmail className='text-2xl text-white dark:text-white'/>
            <a href='mailto:rekarjamal@gmail.com' className='underline'>rekarjamal3@gmail.com</a>
            </div>

            <div className='flex gap-2 items-center justify-left'>
            <FaPhoneAlt className='text-xl text-white dark:text-white'/>
            <a href="tel:+9647714256565" className='underline'>+964 771-425-6565</a>
            </div>


        </div>


                 <div className='flex gap-6 my-3 text-2xl' >
                      {socials.map((social, index) => (
                            <a href={social.href} target='blank' className= ' items-center flex justify-center text-3xl text-white  w-9 h-9' key={index}>{social.icon}</a> 
                      ))}
                  </div>

          </div>

          


      </div>


          <div className='px-2 sm:px-6 md:px-8 '>
            <hr className='w-full' />
          </div>


          <div className='flex items-center justify-between px-2 sm:px-6 md:px-8 lg:px-10'>
              <p className='text-center items-center pt-4'>© 2020 Rekar JSX, Inc. All rights reserved.</p>
            
            <div onClick={() => scroll.scrollToTop({ smooth: true, duration: 1500 })}  className='cursor-pointer w-10 h-10 mt-2 sm:mt-3 lg:w-11 lg:h-11 rounded-md flex items-center justify-center bg-white'>
                <FaArrowUp  className='text-indigo-500 absolute cursor-pointer text-3xl' onClick={() => scroll.scrollToTop({ smooth: true, duration: 1500 })} />
            </div>
              
          </div>

    </div>
</div>
  )
}

export default Footer


