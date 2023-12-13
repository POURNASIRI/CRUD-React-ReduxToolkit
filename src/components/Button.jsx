import React from 'react'

function Button({onClick, children}) {
  return (
    <button
    onClick={onclick} 
    className='bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700'>
        {children}
    </button>
  )
}

export default Button