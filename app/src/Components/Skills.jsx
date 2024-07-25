import React from 'react'
import SkillsCards from './SkillsCards'
import html from "../assets/html-1.svg"
import java from "../assets/java.svg.svg"
import mysql from "../assets/mysql-3.svg"
import js from "../assets/logo-javascript.svg"
import react from "../assets/react-2.svg"
import tailwind from "../assets/tailwind-css-2.svg"
import git from "../assets/git-icon.svg"
import github from "../assets/github-icon-1.svg"
import redux from "../assets/redux.svg"
import mui from "../assets/material-ui-1.svg"
import bootstrap from "../assets/bootstrap-5-1.svg"
import office from "../assets/Microsoft-365.svg"

const Skills = () => {

const skills = [
  {name: "Adobe Photoshop", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"},
  {name: "Adobe Ilustrator" , url:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"},
  {name: "Html", url:html},
  {name: "CSS" , url:"https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"},
  {name: "Java" , url:java},
  {name: "MySQL" , url:mysql},
  {name: "Java Script" , url:js},
  {name:"React Js" , url:react},
  {name: "Tailwind CSS", url:tailwind},
  {name: "Git", url:git},
  {name: "GitHub", url:github},
  {name: "redux", url:redux},
  {name: "MUI", url:mui},
  {name: "Bootstrap-5", url:bootstrap},
  {name: "Microsoft 365", url:office},
]

  return (
    <>
    <h1 className='pt-10 pb-10 sm:pb-0 text-black dark:text-white flex items-center justify-center text-3xl font-bold'>
    Skills & <span className='ml-2 text-indigo-500'>Abilities</span>
    </h1>
    

    <div id='Skills' className='mt-5 items-center md:mt-0 text-black dark:text-white w-full  h-[80vh] mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8" flex flex-row flex-col  md:flex-row gap-7 sm:gap-10 md:gap-32 lg:gap-44 justify-center md:justify-center md:items-center'>
      
        <div className='grid items-center  gap-5  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-[30rem] sm:mt-[10rem] lg:mt-[2rem]'>
          {skills.map((skills, index)=>{
            return <SkillsCards className='w-40 bg-black' key={index} name={skills.name} logo={skills.url}/>
          })}
        </div>
    </div>


    </>
  )
}

export default Skills



