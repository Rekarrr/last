import React from 'react'

const SkillsCards = (props) => {
  return (
    <div className='p-3 pt-4 gap-3 bg-indigo-600 flex flex-col items-center justify-cente w-[9rem] h-[7rem] rounded-2xl cursor-default hover:bg-indigo-700 hover:scale-105 transition '>
        <div className='w-12'>
            <img className='w-full' src={props.logo} alt="" />
        </div>

        <p className='text-sm text-white text-center font-medium'>{props.name}</p>
    </div>
  )
}

export default SkillsCards
