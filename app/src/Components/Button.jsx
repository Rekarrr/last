import React from 'react'

const Button = (props) => {
  return (
    <div className='mt-3'>
              <button className='text-white rounded-md bg p-2 text-sm font-medium hover:bg-indigo-600'  >{props.text}</button>

    </div>
  )
}

export default Button
