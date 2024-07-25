import React from 'react'
import uos from '../assets/uos.jpg'
import ask from '../assets/ASK.jpg'
const Education = () => {

const info =[
  {img: uos, degree:"Bachelor of Information Technology" , school:"University of Sulaimani | College of Commerce" , year:"2021-2025", desc: "Pursuing"},
  {img: ask, degree:"High School Diploma" , school:"Amadaey Slemany Kuran" , year:"2019-2021", desc: "Completed"},
]

  return (
<>
    <h1 id='Education' className='text-black dark:text-white flex items-center justify-center text-3xl font-bold'>
        My <span className='ml-2 text-indigo-500'>Education</span>
    </h1>
<br />
<br />
<br />
    <div className=' text-black dark:text-white w-full  mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8" flex gap-12 md:gap-8 lg:gap-10 flex-col items-center  sm:gap-10 md:gap-13 lg:gap-14  md:justify-center md:items-center'>
      { info.map((info, index)=>{
        return(
            <EducationCard key={index} img={info.img} degree={info.degree} school={info.school} year={info.year} desc={info.desc}/>
        )
      })}
    </div>



    </>
  )
}

export default Education


function EducationCard(props){
  return(
    <>
    <div className= 'flex flex-col sm:flex-row  md:flex-row md:gap-3 w-[22rem] h-[23rem] sm:w-[35rem] sm:h-[11rem] md:w-[45rem] md:h-[11rem] lg:w-full rounded-lg bg-stone-100 shadow-gray-400 shadow-md dark:bg-gray-800 dark:shadow-gray-900 '>

      <div>
        <img className='rounded-t-lg sm:rounded-l-lg sm:rounded-r-none md:rounded-l-lg md:rounded-r-none w-full h-[14rem]  sm:w-[15rem] sm:h-full md:w-[16rem] md:h-full object-cover' src={props.img} alt="" />
      </div>

    <div className='p-2'>
      <h1 className='text-[1.2rem] sm:text-[1.1rem] md:text-2xl lg:text-4xl font-bold'>{props.degree}</h1>
      <p className='text-sm sm:text-[0.8rem] lg:text-lg pt-2 font-medium'>{props.school}</p>
      <br />
      <p className='text-xl font-medium mt-2 sm:pt-12 md:pt-10 lg:pt-7'><span>{props.year}</span> | <span>{props.desc}</span></p> 
    </div>

    </div>
    </>
  )
}

export {EducationCard}
